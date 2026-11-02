// Runs after the client and server builds. Puts the rendered page into dist/index.html so it
// paints before any JavaScript loads, and tells every page to fetch the font early.
import { readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const dist = resolve(root, 'dist');
const ssr = resolve(root, '.ssr');

const { render } = await import(resolve(ssr, 'entry-server.js'));

const font = readdirSync(resolve(dist, 'assets')).find((file) => /hanken-grotesk-latin-wght-normal.*\.woff2$/.test(file));
if (!font) throw new Error('Could not find the Latin font file in dist/assets');
const preload = `<link rel="preload" href="/assets/${font}" as="font" type="font/woff2" crossorigin />`;

for (const page of ['index.html', 'tanish.html', 'arzan.html', '404.html']) {
  const path = resolve(dist, page);
  let html = readFileSync(path, 'utf8').replace('</title>', `</title>\n    ${preload}`);
  if (page === 'index.html') {
    const marker = '<div id="root"></div>';
    if (!html.includes(marker)) throw new Error('Could not find the root element in dist/index.html');
    html = html.replace(marker, `<div id="root">${render()}</div>`);
  }
  writeFileSync(path, html);
}

rmSync(ssr, { recursive: true, force: true });
console.log('prerendered index.html, preloaded', font);
