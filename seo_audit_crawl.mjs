// Read-only SEO audit crawler for wavesolution.com.au
// 1. Pulls live sitemap, checks every URL status + title + canonical + h1 + meta robots
// 2. Builds internal link graph from the live homepage/HTML to find orphans
// Writes seo_audit_live.json
import fs from 'fs';

const BASE = 'https://www.wavesolution.com.au';
const CONCURRENCY = 6;
const TIMEOUT = 30000;

async function get(url) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), TIMEOUT);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      redirect: 'manual',
      headers: { 'user-agent': 'Mozilla/5.0 (compatible; SEOAudit/1.0)' },
    });
    const body = await res.text();
    return { status: res.status, location: res.headers.get('location'), body, ok: true };
  } catch (e) {
    return { ok: false, error: String(e.message || e), status: 0, body: '' };
  } finally {
    clearTimeout(t);
  }
}

function extract(body, re) {
  const m = body.match(re);
  return m ? m[1].trim() : null;
}

function textOf(html) {
  if (!html) return null;
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const sitemapRes = await get(`${BASE}/sitemap.xml`);
const locs = [...sitemapRes.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
console.log(`Sitemap: ${locs.length} URLs (status ${sitemapRes.status})`);

const results = [];
let idx = 0;

async function worker() {
  while (idx < locs.length) {
    const i = idx++;
    const url = locs[i];
    const r = await get(url);
    if (!r.ok) {
      results[i] = { url, status: 0, error: r.error };
      continue;
    }
    const body = r.body;
    const title = textOf(extract(body, /<title[^>]*>([\s\S]*?)<\/title>/i));
    const desc = extract(body, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i);
    const canonical = extract(body, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
    const robots = extract(body, /<meta[^>]+name=["']robots["'][^>]+content=["']([^"']*)["']/i);
    const h1raw = extract(body, /<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const h1 = textOf(h1raw);
    const h1count = (body.match(/<h1[\s>]/gi) || []).length;
    const internalLinks = [...new Set(
      [...body.matchAll(/href=["'](\/[^"'#?]*)/g)].map((m) => m[1].replace(/\/$/, '') || '/')
    )];
    const jsonLdCount = (body.match(/application\/ld\+json/g) || []).length;
    const hasBreadcrumb = /BreadcrumbList/.test(body);
    const imgCount = (body.match(/<img[\s>]/gi) || []).length;
    const imgsNoAlt = (body.match(/<img(?![^>]*\balt=)[^>]*>/gi) || []).length;
    results[i] = {
      url, status: r.status, title, titleLen: title ? title.length : 0,
      desc, descLen: desc ? desc.length : 0, canonical, robots,
      h1, h1count, jsonLdCount, hasBreadcrumb, imgCount, imgsNoAlt,
      internalLinks, bodyBytes: Buffer.byteLength(body),
    };
    process.stdout.write('.');
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, worker));
console.log('\nCrawl complete.');

// canonical mismatch / robots / dupes
const issues = [];
const titleMap = new Map();
const h1Map = new Map();
for (const r of results) {
  if (!r) continue;
  if (r.status !== 200) { issues.push({ url: r.url, issue: 'non-200', detail: `${r.status} ${r.error || ''}` }); continue; }
  const norm = r.url.replace(/\/$/, '');
  if (r.canonical && r.canonical.replace(/\/$/, '') !== norm) {
    issues.push({ url: r.url, issue: 'canonical-mismatch', detail: r.canonical });
  }
  if (r.robots && /noindex/i.test(r.robots)) issues.push({ url: r.url, issue: 'noindex', detail: r.robots });
  if (!r.title) issues.push({ url: r.url, issue: 'missing-title', detail: '' });
  else if (r.titleLen > 65) issues.push({ url: r.url, issue: 'title-too-long', detail: `${r.titleLen}: ${r.title}` });
  if (!r.desc) issues.push({ url: r.url, issue: 'missing-description', detail: '' });
  else if (r.descLen > 165) issues.push({ url: r.url, issue: 'desc-too-long', detail: `${r.descLen}` });
  if (r.h1count !== 1) issues.push({ url: r.url, issue: 'h1-count', detail: String(r.h1count) });
  if (r.imgsNoAlt > 0) issues.push({ url: r.url, issue: 'images-missing-alt', detail: `${r.imgsNoAlt}/${r.imgCount}` });
  if (r.title) {
    const k = r.title.toLowerCase();
    if (titleMap.has(k)) issues.push({ url: r.url, issue: 'duplicate-title', detail: `also ${titleMap.get(k)}` });
    else titleMap.set(k, r.url);
  }
  if (r.h1) {
    const k = r.h1.toLowerCase();
    if (h1Map.has(k)) issues.push({ url: r.url, issue: 'duplicate-h1', detail: `also ${h1Map.get(k)}` });
    else h1Map.set(k, r.url);
  }
}

// inbound link counts
const inbound = new Map();
for (const r of results) {
  if (!r || !r.internalLinks) continue;
  for (const l of r.internalLinks) if (!inbound.has(l)) inbound.set(l, []);
}
for (const r of results) {
  if (!r || !r.internalLinks) continue;
  const from = r.url.replace(BASE, '').replace(/\/$/, '') || '/';
  for (const l of r.internalLinks) {
    if (inbound.has(l)) inbound.get(l).push(from);
  }
}

const orphans = [];
for (const r of results) {
  if (!r || r.status !== 200) continue;
  const path = r.url.replace(BASE, '').replace(/\/$/, '') || '/';
  const inb = inbound.get(path) || [];
  if (inb.length === 0) orphans.push(path);
}

const out = {
  crawledAt: new Date().toISOString(),
  sitemapCount: locs.length,
  results,
  issues,
  orphans,
  issueCounts: issues.reduce((a, i) => { a[i.issue] = (a[i.issue] || 0) + 1; return a; }, {}),
};
fs.writeFileSync('seo_audit_live.json', JSON.stringify(out, null, 2));
console.log('Issues:', JSON.stringify(out.issueCounts, null, 2));
console.log('Orphans (no inbound internal links from crawled set):', orphans.length);
