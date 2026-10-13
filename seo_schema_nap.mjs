// Schema.org type coverage + NAP consistency scan from the live crawl data
import fs from 'fs';

const data = JSON.parse(fs.readFileSync('seo_audit_live.json', 'utf8'));

// Re-fetch just to extract JSON-LD @type inventory per page (crawl didn't store it)
const BASE = 'https://www.wavesolution.com.au';
const results = data.results.filter((r) => r && r.status === 200);

const typeByPage = {};
const types = {};
let aggregateRatingPages = [];
let reviewPages = [];
let fetchErrors = [];

for (const r of results) {
  try {
    const res = await fetch(r.url, { headers: { 'user-agent': 'Mozilla/5.0 (compatible; SEOAudit/1.0)' } });
    const body = await res.text();
    const blocks = [...body.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)];
    const found = new Set();
    let hasAgg = false, hasReview = false;
    for (const b of blocks) {
      try {
        const parsed = JSON.parse(b[1]);
        const walk = (n) => {
          if (!n || typeof n !== 'object') return;
          if (Array.isArray(n)) { n.forEach(walk); return; }
          if (n['@type']) {
            const t = Array.isArray(n['@type']) ? n['@type'] : [n['@type']];
            t.forEach((x) => { found.add(x); types[x] = (types[x] || 0) + 1; });
          }
          if (n.aggregateRating) hasAgg = true;
          if (n['@type'] === 'Review' || (Array.isArray(n['@type']) && n['@type'].includes('Review'))) hasReview = true;
          Object.values(n).forEach(walk);
        };
        walk(parsed);
      } catch (e) { found.add('INVALID_JSON_LD'); }
    }
    const path = r.url.replace(BASE, '') || '/';
    typeByPage[path] = [...found];
    if (hasAgg) aggregateRatingPages.push(path);
    if (hasReview) reviewPages.push(path);
    process.stdout.write('.');
  } catch (e) {
    fetchErrors.push({ url: r.url, error: String(e.message) });
  }
}

// NAP consistency: scrape phone / email strings
const phones = {};
const emails = {};
for (const r of results) {
  try {
    const res = await fetch(r.url, { headers: { 'user-agent': 'Mozilla/5.0 (compatible; SEOAudit/1.0)' } });
    const body = await res.text();
    for (const m of body.matchAll(/(?:\+?61\s?4\d{2}|0?4\d{2})\s?\d{3}\s?\d{3}/g)) {
      const p = m[0].replace(/\s/g, '');
      phones[p] = (phones[p] || 0) + 1;
    }
    for (const m of body.matchAll(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g)) {
      const e = m[0].toLowerCase();
      if (e.includes('.png') || e.includes('.jpg')) continue;
      emails[e] = (emails[e] || 0) + 1;
    }
  } catch (e) { /* ignore */ }
}

const out = {
  scannedAt: new Date().toISOString(),
  pageCount: results.length,
  schemaTypeCoverage: Object.fromEntries(Object.entries(types).sort((a, b) => b[1] - a[1])),
  aggregateRatingPages,
  reviewSchemaPages: reviewPages,
  pagesWithNoStructuredData: Object.entries(typeByPage).filter(([, v]) => v.length === 0).map(([k]) => k),
  phoneVariants: phones,
  emailVariants: emails,
  fetchErrors,
};
fs.writeFileSync('seo_schema_nap.json', JSON.stringify(out, null, 2));
console.log('\n=== SCHEMA TYPE COVERAGE ===');
console.log(JSON.stringify(out.schemaTypeCoverage, null, 2));
console.log('\n=== aggregateRating pages ===', aggregateRatingPages);
console.log('=== Review schema pages ===', reviewPages);
console.log('=== pages with NO structured data ===', out.pagesWithNoStructuredData);
console.log('=== phone variants ===', phones);
console.log('=== email variants ===', emails);
console.log('=== fetch errors ===', fetchErrors.length);
