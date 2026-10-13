// Follow the Google Maps shortlink used as googleBusinessProfile in business-info.ts
let url = 'https://maps.app.goo.gl/gabLdzZ7v3VRzgk87';
for (let i = 0; i < 8; i++) {
  const r = await fetch(url, { redirect: 'manual', headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } });
  const loc = r.headers.get('location');
  console.log(`${r.status}  ${url}`);
  if (!loc) {
    const body = await r.text();
    const title = (body.match(/<title[^>]*>([^<]*)<\/title>/i) || [])[1] || '';
    const hasName = /Wave Solution/i.test(body);
    console.log(`   FINAL status=${r.status} title="${title.trim().slice(0, 100)}" mentions_wave_solution=${hasName}`);
    // look for a business name / place marker
    const cid = body.match(/0x[0-9a-f]+:0x[0-9a-f]+/);
    console.log(`   place_id_hex=${cid ? cid[0] : 'none'}`);
    break;
  }
  console.log(`   -> ${loc}`);
  url = new URL(loc, url).toString();
}
