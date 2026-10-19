// Lists every placeholder you still need to fill in.
// Run with:  npm run todos
// Placeholders are either a "TODO" comment or visible text like "[add: ...]".
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const pattern = /TODO|\[add:/;
const hits = [];

function scan(file) {
  readFileSync(file, 'utf8')
    .split('\n')
    .forEach((line, i) => {
      if (pattern.test(line)) hits.push(`${file}:${i + 1}\n    ${line.trim()}`);
    });
}

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (/\.(tsx?|html)$/.test(name)) scan(path);
  }
}

walk('src');
scan('index.html');

if (hits.length === 0) {
  console.log('No placeholders left. Nice.');
} else {
  console.log(`${hits.length} placeholder(s) to fill in:\n`);
  console.log(hits.join('\n\n'));
  process.exitCode = 1;
}
