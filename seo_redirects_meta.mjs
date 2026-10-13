// Verify redirects + list exact title/desc fixes needed
const cases = [
  ['http://wavesolution.com.au/', 'bare domain -> www'],
  ['https://wavesolution.com.au/', 'bare https -> www'],
  ['https://www.wavesolution.com.au/services/home-cleaning', 'legacy service slug'],
  ['https://www.wavesolution.com.au/locations/sydney', 'removed suburb'],
  ['https://www.wavesolution.com.au/bond-cleaning-checklist.html', 'legacy html'],
  ['https://www.wavesolution.com.au/index.html', 'index.html'],
  ['https://www.wavesolution.com.au/House-Cleaning-Gold-Coast', 'case variant'],
  ['https://www.wavesolution.com.au/house-cleaning-gold-coast/', 'trailing slash'],
  ['https://www.wavesolution.com.au/nonexistent-page-xyz', 'soft 404 check'],
];

console.log('=== REDIRECT / STATUS BEHAVIOUR ===');
for (const [url, label] of cases) {
  try {
    const r = await fetch(url, { redirect: 'manual', headers: { 'user-agent': 'Mozilla/5.0' } });
    const loc = r.headers.get('location');
    console.log(`${String(r.status).padEnd(4)} ${label.padEnd(26)} -> ${loc || '(no redirect)'}`);
  } catch (e) {
    console.log(`ERR  ${label.padEnd(26)} ${e.message}`);
  }
}

const data = JSON.parse(await (await import('node:fs/promises')).readFile('seo_audit_live.json', 'utf8'));
const longTitles = data.issues.filter((i) => i.issue === 'title-too-long')
  .map((i) => ({ len: parseInt(i.detail, 10), title: i.detail.replace(/^\d+:\s*/, ''), url: i.url }))
  .sort((a, b) => b.len - a.len);

console.log(`\n=== TITLES OVER 65 CHARS (${longTitles.length}) ===`);
for (const t of longTitles) console.log(`${String(t.len).padStart(4)}  ${t.url.replace('https://www.wavesolution.com.au', '')}\n        ${t.title}`);

const longDesc = data.issues.filter((i) => i.issue === 'desc-too-long');
console.log(`\n=== META DESCRIPTIONS OVER 165 CHARS (${longDesc.length}) ===`);
for (const d of longDesc) {
  const r = data.results.find((x) => x.url === d.url);
  console.log(`${d.detail.padStart(4)}  ${d.url.replace('https://www.wavesolution.com.au', '')}\n        ${r.desc}`);
}

console.log('\n=== SUMMARY ===');
console.log('issueCounts:', JSON.stringify(data.issueCounts));
console.log('orphans:', data.orphans);
