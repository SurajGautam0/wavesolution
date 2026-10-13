// Check whether Next.js image optimization is serving sized variants, or raw multi-MB files
const BASE = 'https://www.wavesolution.com.au';

const loc = await (await fetch(`${BASE}/locations`)).text();
const srcs = [...new Set([...loc.matchAll(/(?:src|srcSet)="([^"]+)"/g)].map((m) => m[1]))];
console.log('=== image sources on /locations ===');
srcs.filter((u) => /image|\.jpg|\.jpeg|\.png|\.webp|\.avif/i.test(u)).slice(0, 8).forEach((u) => console.log('  ' + u.slice(0, 260)));

const home = await (await fetch(BASE)).text();
console.log('\n=== /_next/image optimizer usage ===');
console.log('  homepage _next/image refs:', (home.match(/\/_next\/image/g) || []).length);
console.log('  homepage raw .jpg refs   :', (home.match(/src="[^"]*\.jpe?g/g) || []).length);

console.log('\n=== optimized variants of the 4.4 MB location hero ===');
for (const w of [640, 828, 1200, 1920, 3840]) {
  const u = `${BASE}/_next/image?url=%2Fpexels-tima-miroshnichenko-6195274.jpg&w=${w}&q=80`;
  try {
    const r = await fetch(u);
    const b = await r.arrayBuffer();
    console.log(`  w=${String(w).padEnd(5)} ${r.status} ${(b.byteLength / 1024).toFixed(0).padStart(6)} KB  ${r.headers.get('content-type')}`);
  } catch (e) {
    console.log(`  w=${w} ERR ${e.message}`);
  }
}

console.log('\n=== raw vs optimized on the pages that use the big files ===');
for (const [path, img] of [['/locations', '/pexels-tima-miroshnichenko-6195274.jpg'], ['/about', '/pexels-helenalopes-27176670.jpg'], ['/gallery', '/gold-coast-cleaning-team.jpg']]) {
  const html = await (await fetch(BASE + path)).text();
  const hasNextImg = html.includes('/_next/image');
  const rawRef = html.includes(img);
  console.log(`  ${path.padEnd(11)} uses_next_image=${hasNextImg}  references_raw=${rawRef}`);
}
