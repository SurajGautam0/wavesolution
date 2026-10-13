// Targeted citation/backlink existence checks: search engines + directory search endpoints
const q = encodeURIComponent;

const probes = [
  // Bing web search for brand + domain
  ['Bing: "wavesolution.com.au"', `https://www.bing.com/search?q=${q('"wavesolution.com.au"')}`],
  ['Bing: Wave Solution Cleaning Gold Coast', `https://www.bing.com/search?q=${q('"Wave Solution Cleaning" Gold Coast')}`],
  ['Bing: site:wavesolution.com.au', `https://www.bing.com/search?q=${q('site:wavesolution.com.au')}`],
  ['DuckDuckGo: "wavesolution.com.au"', `https://html.duckduckgo.com/html/?q=${q('"wavesolution.com.au"')}`],
  ['DDG: Wave Solution Cleaning Gold Coast', `https://html.duckduckgo.com/html/?q=${q('"Wave Solution Cleaning" Gold Coast')}`],
];

for (const [label, url] of probes) {
  try {
    const r = await fetch(url, {
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36',
        'accept-language': 'en-AU,en;q=0.9',
      },
    });
    const body = await r.text();
    const mentionsDomain = /wavesolution\.com\.au/i.test(body);
    const mentionsBrand = /Wave Solution Cleaning/i.test(body);
    // pull result URLs
    const resultUrls = [...new Set([...body.matchAll(/https?:\/\/(?:www\.)?([a-z0-9.-]+\.[a-z]{2,})\//gi)].map((m) => m[1].toLowerCase()))]
      .filter((h) => !/bing|microsoft|duckduckgo|google|w3\.org|schema\.org|gstatic|msn|yahoo/.test(h)).slice(0, 25);
    console.log(`\n### ${label}  [HTTP ${r.status}] len=${body.length}`);
    console.log(`    mentions wavesolution.com.au: ${mentionsDomain} | mentions "Wave Solution Cleaning": ${mentionsBrand}`);
    console.log(`    domains in results: ${resultUrls.join(', ') || '(none parsed)'}`);
  } catch (e) {
    console.log(`\n### ${label}  ERROR: ${e.message}`);
  }
}
