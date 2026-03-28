import fs from 'fs';
import path from 'path';

function findPages(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findPages(filePath, fileList);
    } else if (file === 'page.tsx' || file === 'layout.tsx') {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const pages = findPages('./app');
const results = [];

for (const page of pages) {
  const content = fs.readFileSync(page, 'utf8');
  
  // Extract Title
  const titleMatch = content.match(/title:\s*["'](.*?)["']/);
  // Extract Description
  const descMatch = content.match(/description:\s*["'](.*?)["']/);
  // Extract H1
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);

  results.push({
    file: page,
    title: titleMatch ? titleMatch[1] : null,
    titleLen: titleMatch ? titleMatch[1].length : 0,
    description: descMatch ? descMatch[1] : null,
    descLen: descMatch ? descMatch[1].length : 0,
    h1: h1Match ? h1Match[1].trim().replace(/\n\s*/g, ' ') : null,
    h1Len: h1Match ? h1Match[1].trim().replace(/\n\s*/g, ' ').length : 0,
    numH1s: (content.match(/<h1/g) || []).length
  });
}

fs.writeFileSync('seo_results.json', JSON.stringify(results, null, 2), 'utf8');
