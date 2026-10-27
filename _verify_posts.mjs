// Verify the three new blog posts: render, metadata, schema, internal links, sitemap, hub listing
const L = 'http://127.0.0.1:3101';

const posts = [
  ['/blog/end-of-lease-cleaning-before-christmas-gold-coast', 65],
  ['/blog/airbnb-cleaning-christmas-gold-coast', 65],
  ['/blog/gold-coast-storm-season-cleaning-mould', 65],
];

let problems = 0;

console.log('=== PAGE METADATA ===');
for (const [p] of posts) {
  const r = await fetch(L + p);
  const html = await r.text();
  const title = ((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || '').trim();
  const desc = ((html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i) || [])[1] || '').trim();
  const canon = ((html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i) || [])[1] || '').trim();
  const h1 = (html.match(/<h1[\s>]/gi) || []).length;
  const words = html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;

  const okStatus = r.status === 200;
  const okTitle = title.length <= 65;
  const okDesc = desc.length > 0 && desc.length <= 165;
  const okCanon = canon === `https://www.wavesolution.com.au${p}`;
  const okH1 = h1 === 1;
  const okWords = words > 700;
  if (!(okStatus && okTitle && okDesc && okCanon && okH1 && okWords)) problems++;

  console.log(`\n  ${p}`);
  console.log(`    status ${r.status} ${okStatus ? 'OK' : 'FAIL'}`);
  console.log(`    title  (${title.length}) ${okTitle ? 'OK' : 'FAIL'}  ${title}`);
  console.log(`    desc   (${desc.length}) ${okDesc ? 'OK' : 'FAIL'}`);
  console.log(`    canon  ${okCanon ? 'OK' : 'FAIL'}  ${canon}`);
  console.log(`    h1     ${h1} ${okH1 ? 'OK' : 'FAIL'}`);
  console.log(`    words  ~${words} ${okWords ? 'OK' : 'THIN'}`);

  // schema
  const blocks = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1]);
  let types = [];
  let invalid = 0;
  for (const b of blocks) {
    try {
      const walk = (n) => {
        if (!n || typeof n !== 'object') return;
        if (Array.isArray(n)) return n.forEach(walk);
        if (n['@type']) (Array.isArray(n['@type']) ? n['@type'] : [n['@type']]).forEach((t) => types.push(t));
        Object.values(n).forEach(walk);
      };
      walk(JSON.parse(b));
    } catch { invalid++; }
  }
  const need = ['BreadcrumbList', 'Article', 'FAQPage'];
  const missing = need.filter((t) => !types.includes(t));
  if (missing.length || invalid) problems++;
  console.log(`    schema ${invalid === 0 && missing.length === 0 ? 'OK' : 'FAIL'}  types=${[...new Set(types)].join(', ')}`);
  if (missing.length) console.log(`      MISSING: ${missing.join(', ')}`);
}

console.log('\n=== BLOG HUB LISTS THEM ===');
const hub = await (await fetch(L + '/blog')).text();
for (const [p] of posts) {
  const has = hub.includes(p);
  if (!has) problems++;
  console.log(`  ${has ? 'OK ' : 'MISSING'} ${p}`);
}

console.log('\n=== IN SITEMAP ===');
const sm = await (await fetch(L + '/sitemap.xml')).text();
for (const [p] of posts) {
  const has = sm.includes(`<loc>https://www.wavesolution.com.au${p}</loc>`);
  if (!has) problems++;
  console.log(`  ${has ? 'OK ' : 'MISSING'} ${p}`);
}

console.log('\n=== INBOUND LINKS FROM SERVICE PAGES ===');
const checks = [
  ['/bond-cleaning-gold-coast', '/blog/end-of-lease-cleaning-before-christmas-gold-coast'],
  ['/end-of-lease-cleaning-gold-coast', '/blog/end-of-lease-cleaning-before-christmas-gold-coast'],
  ['/airbnb-cleaning-gold-coast', '/blog/airbnb-cleaning-christmas-gold-coast'],
  ['/deep-cleaning-gold-coast', '/blog/gold-coast-storm-season-cleaning-mould'],
  ['/after-builders-cleaning-gold-coast', '/blog/gold-coast-storm-season-cleaning-mould'],
];
for (const [from, to] of checks) {
  const html = await (await fetch(L + from)).text();
  const has = html.includes(`href="${to}"`);
  if (!has) problems++;
  console.log(`  ${has ? 'OK ' : 'MISSING'} ${from} -> ${to}`);
}

console.log('\n=== CROSS-LINKS BETWEEN NEW POSTS ===');
for (const [p] of posts) {
  const html = await (await fetch(L + p)).text();
  const others = posts.filter(([q]) => q !== p).filter(([q]) => html.includes(`href="${q}"`));
  console.log(`  ${p} links to ${others.length}/2 other new posts`);
  if (others.length < 2) problems++;
}

console.log(`\n${problems === 0 ? '✅ ALL CHECKS PASSED' : `❌ ${problems} problem(s)`}`);
