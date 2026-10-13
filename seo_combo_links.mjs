// Determine which service x suburb links actually appear on each parent service page in PRODUCTION
const BASE = 'https://www.wavesolution.com.au';
const services = [
  'bond-cleaning-gold-coast',
  'house-cleaning-gold-coast',
  'end-of-lease-cleaning-gold-coast',
  'pest-control-gold-coast',
  'office-cleaning-gold-coast',
];

const parentLinks = {};
for (const s of services) {
  const html = await (await fetch(`${BASE}/${s}`)).text();
  const links = [...new Set([...html.matchAll(new RegExp(`href="(/${s}/[a-z-]+)"`, 'g'))].map((m) => m[1]))];
  parentLinks[s] = links;
  console.log(`\n${s}  -> ${links.length} suburb links on the parent page`);
  console.log('   ' + (links.join(', ') || '(NONE)'));
  const hasGrid = /by suburb/i.test(html);
  console.log(`   "by suburb" grid heading present: ${hasGrid}`);
}

// Which combo pages are in the sitemap
const sm = await (await fetch(`${BASE}/sitemap.xml`)).text();
const comboInSitemap = [...sm.matchAll(/<loc>([^<]*\/([a-z-]+)\/([a-z-]+))<\/loc>/g)]
  .map((m) => m[1].replace(BASE, ''))
  .filter((p) => !/^\/(locations|blog|services)\//.test(p));

console.log(`\n=== combo pages in sitemap: ${comboInSitemap.length} ===`);

// Now count ALL inbound links across the sitemap pages (clean, no assets)
const allPages = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const inbound = {};
for (const p of allPages) inbound[p.replace(BASE, '') || '/'] = [];

let done = 0;
const queue = [...allPages];
async function worker() {
  while (queue.length) {
    const url = queue.shift();
    try {
      const html = await (await fetch(url)).text();
      const from = url.replace(BASE, '') || '/';
      const links = [...new Set([...html.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1].replace(/\/$/, '') || '/'))]
        .filter((l) => !/\.(js|css|woff2?|png|jpe?g|svg|webp|avif|ico|xml|txt|json)$/.test(l) && !l.startsWith('/_next'));
      for (const l of links) if (inbound[l]) inbound[l].push(from);
    } catch (e) { /* skip */ }
    if (++done % 20 === 0) process.stdout.write('.');
  }
}
await Promise.all(Array.from({ length: 6 }, worker));

console.log(`\n\n=== COMBO PAGE INBOUND LINK COUNTS (${comboInSitemap.length} pages) ===`);
const rows = comboInSitemap.map((p) => ({ p, n: (inbound[p] || []).length, from: inbound[p] || [] })).sort((a, b) => a.n - b.n);
for (const r of rows) {
  console.log(`${String(r.n).padStart(3)}  ${r.p}`);
  console.log(`      from: ${r.from.join(', ') || '(none)'}`);
}

// Which combo pages are NOT linked from their own parent page?
console.log('\n=== COMBO PAGES MISSING FROM THEIR OWN PARENT PAGE ===');
let missing = 0;
for (const p of comboInSitemap) {
  const [svc] = p.split('/').slice(1);
  if (!parentLinks[svc]) { console.log(`  ${p}  (parent /${svc} not a service hub page)`); continue; }
  if (!parentLinks[svc].includes(p)) { console.log(`  ${p}  NOT linked from /${svc}`); missing++; }
}
console.log(`Total missing from parent: ${missing}`);
