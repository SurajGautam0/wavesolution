// Verify the resulting title/description lengths after the fixes, computed from source
import fs from 'fs';

const TEMPLATE_SUFFIX = ' | Wave Solution';
const LIMIT_TITLE = 65;
const LIMIT_DESC = 165;

const problems = [];
const ok = [];

// --- location pages: metaTitle + template suffix
const locSrc = fs.readFileSync('lib/location-pages.ts', 'utf8');
for (const m of locSrc.matchAll(/metaTitle:\s*"([^"]+)"/g)) {
  const final = m[1] + TEMPLATE_SUFFIX;
  (final.length <= LIMIT_TITLE ? ok : problems).push({ kind: 'location title', len: final.length, text: final });
}

// --- service pages
const svcSrc = fs.readFileSync('lib/service-pages.ts', 'utf8');
for (const m of svcSrc.matchAll(/metaTitle:\s*"([^"]+)"/g)) {
  // some already embed the brand suffix deliberately
  const final = m[1].includes('Wave Solution') ? m[1] : m[1] + TEMPLATE_SUFFIX;
  (final.length <= LIMIT_TITLE ? ok : problems).push({ kind: 'service title', len: final.length, text: final });
}

// --- standalone page/layout metadata titles (those that DON'T go through the template are absolute,
// but Next applies the template to any child `title` string, so we add the suffix to all of them)
const files = [
  'app/locations/page.tsx', 'app/blog/layout.tsx', 'app/book/page.tsx', 'app/about/page.tsx',
  'app/contact/layout.tsx', 'app/gallery/page.tsx', 'app/team/page.tsx', 'app/testimonials/layout.tsx',
  'app/blog/cleaning-tips/page.tsx', 'app/blog/office-cleaning/page.tsx', 'app/blog/pest-control-guide/page.tsx',
  'app/blog/carpet-cleaning-guide/page.tsx', 'app/blog/office-cleaning-schedule/page.tsx',
  'app/blog/commercial-cleaning-benefits/page.tsx', 'app/blog/end-of-lease-checklist/page.tsx',
  'app/blog/how-often-house-cleaning/page.tsx', 'app/blog/rental-inspection-tips/page.tsx',
  'app/blog/after-builders-cleaning-guide/page.tsx', 'app/blog/mould-prevention-gold-coast/page.tsx',
  'app/blog/bond-cleaning-checklist/page.tsx', 'app/blog/end-of-lease-cleaning-requirements-qld/page.tsx',
  'app/locations/[slug]/page.tsx',
];
for (const f of files) {
  if (!fs.existsSync(f)) { console.log(`(missing) ${f}`); continue; }
  const src = fs.readFileSync(f, 'utf8');
  const t = src.match(/^\s*title:\s*"([^"]+)"/m);
  const d = src.match(/^\s*description:\s*\n?\s*"([^"]+)"/m) || src.match(/^\s*description:\s*"([^"]+)"/m);
  if (t) {
    const final = t[1].includes('Wave Solution') ? t[1] : t[1] + TEMPLATE_SUFFIX;
    (final.length <= LIMIT_TITLE ? ok : problems).push({ kind: `title ${f}`, len: final.length, text: final });
  }
  if (d) {
    const len = d[1].length;
    (len <= LIMIT_DESC ? ok : problems).push({ kind: `desc ${f}`, len, text: d[1] });
  }
}

console.log(`=== REMAINING PROBLEMS: ${problems.length} ===`);
for (const p of problems.sort((a, b) => b.len - a.len)) console.log(`${String(p.len).padStart(4)}  [${p.kind}]\n        ${p.text}`);
console.log(`\n=== WITHIN LIMITS: ${ok.length} ===`);
console.log(`titles checked: ${ok.filter((o) => o.kind.includes('title')).length + problems.filter((p) => p.kind.includes('title')).length}`);
