# alekseilian.com

Personal site of Aleksei Lian, a backend engineer and CS student at York University.

- Live: https://alekseilian.com
- Case studies: https://alekseilian.com/arzan and https://alekseilian.com/tanish
- Stack: React + Vite, deployed on Vercel
- Content is in `src/data/content.js`. The case studies are `arzan.html` and `tanish.html`.

## Run locally

```bash
npm install
npm run dev
```

## Build and test

```bash
npm run build   # client build, server build, then prerender into dist/
npm test        # Playwright against the production build, using installed Chrome
```

## Updating the resume

The pop-up shows an SVG of the PDF, so replace both together:

```bash
cp <new resume>.pdf public/resume.pdf
pdftocairo -svg public/resume.pdf public/resume.svg
```
