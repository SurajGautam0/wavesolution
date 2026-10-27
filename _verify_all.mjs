// Full-site regression crawl on the dev server after adding 3 posts
const L = 'http://127.0.0.1:3101';
const sm = await (await fetch(`${L}/sitemap.xml`)).text();
const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace('https://www.wavesolution.com.au', ''));

const inbound = {};
for (const p of locs) inbound[p || '/'] = [];
const pages = [];
let queue = [...locs];
async function worker() {
  while (queue.length) {
    const p = queue.shift();
    try {
      const r = await fetch(L + p, { redirect: 'manual' });
      const html = await r.text();
      const title = ((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || '').trim();
      const desc = ((html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i) || [])[1] || '').trim();
      const canon = ((html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i) || [])[1] || '').trim();
      const h1s = (html.match(/<h1[\s>]/gi) || []).length;
      const links = [...new Set([...html.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1].replace(/\/$/, '') || '/'))]
        .filter((l) => !/\.(js|css|woff2?|png|jpe?g|svg|webp|avif|ico|xml|txt|json|webmanifest)$/.test(l) && !l.startsWith('/_next'));
      for (const l of links) if (inbound[l]) inbound[l].push(p || '/');
      pages.push({ p: p || '/', status: r.status, title, desc, canon, h1s });
    } catch (e) { pages.push({ p, status: 0, err: e.message }); }
  }
}
await Promise.all(Array.from({ length: 5 }, worker));

const ok = pages.filter((x) => x.status === 200);
const bad = pages.filter((x) => x.status !== 200);
console.log(`sitemap ${locs.length} | crawled ${pages.length} | 200 ${ok.length} | non-200 ${bad.length}`);
bad.slice(0, 8).forEach((b) => console.log(`  ! ${b.status} ${b.p}`));

const longT = ok.filter((x) => x.title.length > 65);
const seen = new Map(); const dups = [];
for (const x of ok) { const k = x.title.toLowerCase(); if (seen.has(k)) dups.push([x.p, seen.get(k)]); else seen.set(k, x.p); }
const longD = ok.filter((x) => x.desc.length > 165);
const missD = ok.filter((x) => !x.desc);
const badH1 = ok.filter((x) => x.h1s !== 1);
const canonBad = ok.filter((x) => x.canon && x.canon.replace(/\/$/, '') !== `https://www.wavesolution.com.au${x.p}`.replace(/\/$/, ''));

console.log(`titles > 65       : ${longT.length}`);
longT.slice(0, 6).forEach((x) => console.log(`  ${x.title.length} ${x.p}: ${x.title}`));
console.log(`duplicate titles  : ${dups.length}`);
dups.slice(0, 6).forEach(([a, b]) => console.log(`  ${a} == ${b}`));
console.log(`descriptions > 165: ${longD.length}`);
console.log(`missing desc      : ${missD.length}`);
console.log(`H1 count != 1     : ${badH1.length}`);
console.log(`canonical mismatch: ${canonBad.length}`);

const orphans = Object.entries(inbound).filter(([, v]) => v.length === 0).map(([k]) => k);
console.log(`orphans           : ${orphans.length}`);
orphans.forEach((o) => console.log(`  ${o}`));

const oneIn = Object.entries(inbound).filter(([, v]) => v.length === 1);
console.log(`1-inbound pages   : ${oneIn.length}`);
oneIn.slice(0, 10).forEach(([k, v]) => console.log(`  ${k} <- ${v[0]}`));

const newPosts = ['/blog/end-of-lease-cleaning-before-christmas-gold-coast', '/blog/airbnb-cleaning-christmas-gold-coast', '/blog/gold-coast-storm-season-cleaning-mould'];
console.log('\nnew post inbound counts:');
for (const n of newPosts) console.log(`  ${inbound[n] ? inbound[n].length : 'MISSING'}  ${n}`);
