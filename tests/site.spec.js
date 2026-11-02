import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { expect, test } from '@playwright/test';

const WIDTHS = [320, 375, 768, 1280, 1536];
const PAGES = ['/', '/tanish', '/arzan', '/404'];

// Fails on any console error, which includes React's hydration errors.
function watchErrors(page) {
  const errors = [];
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  page.on('pageerror', (error) => errors.push(error.message));
  return errors;
}

// Text contrast, measured on the rendered page.
const measureContrast = () => {
  const toRgba = (value) => {
    const canvas = document.createElement('canvas').getContext('2d');
    canvas.fillStyle = value;
    canvas.fillRect(0, 0, 1, 1);
    canvas.getImageData(0, 0, 1, 1);
    const probe = document.createElement('canvas');
    probe.width = probe.height = 1;
    const context = probe.getContext('2d', { willReadFrequently: true });
    context.clearRect(0, 0, 1, 1);
    context.fillStyle = value;
    context.fillRect(0, 0, 1, 1);
    const [r, g, b, a] = context.getImageData(0, 0, 1, 1).data;
    return [r, g, b, a / 255];
  };
  const luminance = ([r, g, b]) => {
    const channel = (c) => {
      const v = c / 255;
      return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
    };
    return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
  };
  const over = (top, bottom) => {
    const a = top[3];
    return [0, 1, 2].map((i) => top[i] * a + bottom[i] * (1 - a)).concat(1);
  };
  const backgroundOf = (element) => {
    const layers = [];
    for (let node = element; node; node = node.parentElement) {
      const colour = toRgba(getComputedStyle(node).backgroundColor);
      if (colour[3] > 0) layers.push(colour);
      if (colour[3] === 1) break;
    }
    return layers.reverse().reduce((bottom, top) => over(top, bottom), [255, 255, 255, 1]);
  };

  const failures = [];
  let checked = 0;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const text = node.textContent.trim();
    const element = node.parentElement;
    if (!text || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(element.tagName)) continue;
    const box = element.getBoundingClientRect();
    const style = getComputedStyle(element);
    if (!box.width || !box.height || style.visibility === 'hidden' || box.width <= 1) continue;
    let hidden = false;
    for (let up = element; up; up = up.parentElement) {
      if (getComputedStyle(up).opacity === '0') hidden = true;
    }
    if (hidden) continue;

    const background = backgroundOf(element);
    const colour = over(toRgba(style.color), background);
    const [lighter, darker] = [luminance(colour), luminance(background)].sort((a, b) => b - a);
    const ratio = (lighter + 0.05) / (darker + 0.05);
    const size = parseFloat(style.fontSize);
    const large = size >= 24 || (size >= 18.66 && Number(style.fontWeight) >= 700);
    checked += 1;
    if (ratio < (large ? 3 : 4.5)) failures.push(`${ratio.toFixed(2)}:1 "${text.slice(0, 40)}"`);
  }
  return { checked, failures };
};

test.describe('every width', () => {
  for (const width of WIDTHS) {
    test(`no sideways scroll or console errors at ${width}px`, async ({ page }) => {
      const errors = watchErrors(page);
      await page.setViewportSize({ width, height: 800 });
      for (const path of PAGES) {
        await page.goto(path);
        await page.waitForLoadState('networkidle');
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
        expect(overflow, `${path} overflows`).toBeLessThanOrEqual(0);
      }
      expect(errors).toEqual([]);
    });
  }
});

test.describe('contrast', () => {
  for (const path of PAGES) {
    test(path, async ({ page }) => {
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.goto(path);
      const { checked, failures } = await page.evaluate(measureContrast);
      expect(checked).toBeGreaterThan(path === '/404' ? 2 : 10);
      expect(failures).toEqual([]);
    });
  }
});

test.describe('the page', () => {
  test('is in the HTML before any JavaScript runs', async ({ request }) => {
    const html = await (await request.get('/')).text();
    expect(html).toContain('Aleksei Lian');
    expect(html).toContain('Software Engineer (Co-Founder)');
    expect(html).toContain('rel="preload"');
    expect(html).not.toContain('fonts.googleapis.com');
  });

  test('says who I am, what I did, my credentials and where to find me', async ({ page }) => {
    await page.goto('/');
    for (const name of ['About', 'Experience', 'Projects', 'Credentials', 'Skills']) {
      await expect(page.getByRole('heading', { level: 2, name, exact: true })).toBeVisible();
    }
    await expect(page.getByRole('heading', { level: 1, name: 'Aleksei Lian' })).toBeVisible();
    for (const text of ['York University', 'Carleton University', 'Arzan', 'Tanish', 'Temir AI', 'Mendy', 'URL Shortener', 'Chess Engine', 'Russian']) {
      await expect(page.getByText(text).first()).toBeVisible();
    }
  });

  test('says how to reach me without listing an email', async ({ page }) => {
    await page.goto('/');
    const contacts = page.getByRole('link', { name: 'Message me on LinkedIn' });
    await expect(contacts).toHaveCount(2);
    for (const contact of await contacts.all()) {
      await expect(contact).toHaveAttribute('href', 'https://linkedin.com/in/aleksei-lian');
    }
    const text = await page.evaluate(() => document.body.innerText);
    expect(text).not.toContain('@');
  });

  test('the resume has no email address or mail link', async () => {
    expect(readFileSync(new URL('../public/resume.svg', import.meta.url), 'utf8')).not.toMatch(/mailto|gmail/);
    const pdf = spawnSync('pdftotext', ['public/resume.pdf', '-'], { encoding: 'utf8' });
    test.skip(Boolean(pdf.error), 'pdftotext is not installed');
    expect(pdf.stdout).toContain('Aleksei Lian');
    expect(pdf.stdout).not.toContain('@');
    expect(pdf.stdout.split('\n').find((line) => line.includes('linkedin.com'))).not.toContain('Toronto');
  });

  test('gives no email address anywhere', async ({ page }) => {
    for (const path of PAGES) {
      await page.goto(path);
      const html = await page.evaluate(() => document.documentElement.outerHTML);
      expect(html, path).not.toContain('mailto:');
      expect(html, path).not.toContain('@gmail');
    }
  });

  test('prints without its controls', async ({ page }) => {
    await page.goto('/');
    await page.emulateMedia({ media: 'print' });
    await expect(page.getByRole('link', { name: 'GitHub' }).first()).toBeHidden();
    await expect(page.getByRole('navigation')).toBeHidden();
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('every internal file and page exists', async ({ page, request }) => {
    for (const path of ['/', '/tanish', '/arzan', '/404', '/resume.pdf', '/resume.svg', '/og.png', '/favicon.svg', '/apple-touch-icon.png', '/logos/arzan.png', '/logos/tanish.png', '/logos/temir.png']) {
      expect((await request.get(path)).status(), path).toBe(200);
    }
    await page.goto('/');
    const links = await page.$$eval('a[href]', (anchors) => anchors.map((a) => a.getAttribute('href')));
    for (const expected of [
      '/resume.pdf',
      'https://github.com/alxlyn',
      'https://linkedin.com/in/aleksei-lian',
      'https://x.com/_alxlyn',
      'https://github.com/alxlyn/alex-url-shortener',
      'https://github.com/alxlyn/alex-chess-engine',
      '/tanish',
      '/arzan',
    ]) {
      expect(links, expected).toContain(expected);
    }
  });

  test('every logo loads', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const broken = await page.$$eval('main img', (images) => images.filter((image) => !image.naturalWidth).map((image) => image.src));
    expect(broken).toEqual([]);
    expect(await page.locator('main img').count()).toBe(3);
  });

  test('case study screenshots load and say they use test data', async ({ page }) => {
    for (const [path, count] of [['/arzan', 2], ['/tanish', 3]]) {
      await page.goto(path);
      const shots = page.locator('.shot img');
      await expect(shots).toHaveCount(count);
      for (const shot of await shots.all()) {
        await shot.scrollIntoViewIfNeeded();
        await expect.poll(() => shot.evaluate((node) => node.naturalWidth)).toBeGreaterThan(0);
        await expect(shot).toHaveAttribute('alt', /\S/);
      }
      for (const caption of await page.locator('.shot figcaption').allInnerTexts()) {
        expect(caption).toMatch(/test (data|account)/);
      }
    }
  });

  test('both case studies are linked from Experience and lead back home', async ({ page }) => {
    await page.goto('/');
    await page.locator('#experience a[href="/arzan"]').click();
    await expect(page).toHaveURL(/\/arzan$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Arzan');
    await page.getByRole('link', { name: 'Back to alekseilian.com' }).click();
    await page.locator('#experience a[href="/tanish"]').click();
    await expect(page).toHaveURL(/\/tanish$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Tanish');
  });
});

test.describe('the resume pop-up', () => {
  const button = (page) => page.getByRole('link', { name: 'View resume' }).first();
  const dialog = (page) => page.getByRole('dialog', { name: 'Resume' });

  test('opens on the page with the resume showing, not in a new tab', async ({ page, context }) => {
    await page.goto('/');
    await button(page).click();
    await expect(dialog(page)).toBeVisible();
    await expect(page).toHaveURL(/127\.0\.0\.1:4173\/$/);
    expect(context.pages()).toHaveLength(1);
    const image = dialog(page).getByRole('img');
    await expect.poll(() => image.evaluate((node) => node.naturalWidth)).toBeGreaterThan(0);
    await expect(dialog(page).getByRole('link', { name: 'Download PDF' })).toHaveAttribute('href', '/resume.pdf');
  });

  test('opens from the navigation bar too', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Resume', exact: true }).click();
    await expect(dialog(page)).toBeVisible();
    expect(await page.locator('dialog').count()).toBe(1);
  });

  test('closes with Escape, the button, or a click outside, and focus goes back', async ({ page }) => {
    await page.goto('/');

    await button(page).click();
    await expect(page.getByRole('button', { name: 'Close resume' })).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(dialog(page)).toBeHidden();
    await expect(button(page)).toBeFocused();

    await button(page).click();
    await page.getByRole('button', { name: 'Close resume' }).click();
    await expect(dialog(page)).toBeHidden();

    await button(page).click();
    await expect(dialog(page)).toBeVisible();
    await page.mouse.click(8, 400);
    await expect(dialog(page)).toBeHidden();
  });

  test('stays open when the page itself is clicked', async ({ page }) => {
    await page.goto('/');
    await button(page).click();
    await dialog(page).getByRole('img').click();
    await page.waitForTimeout(400);
    await expect(dialog(page)).toBeVisible();
  });

  test('travels out of the button, and only fades with reduced motion', async ({ page }) => {
    await page.goto('/');
    await button(page).click();
    const moving = await page.evaluate(() =>
      document.querySelector('dialog').getAnimations({ subtree: true }).some((animation) => animation.effect.getKeyframes().some((frame) => frame.transform)),
    );
    expect(moving).toBe(true);

    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.reload();
    await button(page).click();
    const stillMoving = await page.evaluate(() =>
      document.querySelector('dialog').getAnimations({ subtree: true }).some((animation) => animation.effect.getKeyframes().some((frame) => frame.transform)),
    );
    expect(stillMoving).toBe(false);
    await expect(dialog(page)).toBeVisible();
  });

  test('is still a plain link to the PDF without JavaScript', async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false, baseURL: 'http://127.0.0.1:4173' });
    const page = await context.newPage();
    await page.goto('/');
    await expect(button(page)).toHaveAttribute('href', '/resume.pdf');
    await context.close();
  });
});

test.describe('navigation and socials', () => {
  test('the bar stays in view and follows the section being read', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('/');
    await page.evaluate(() => document.getElementById('skills').scrollIntoView({ behavior: 'instant', block: 'start' }));
    await expect(page.locator('nav a[aria-current]')).toHaveText('Skills');
    const top = await page.locator('header').first().evaluate((node) => node.getBoundingClientRect().top);
    expect(top).toBe(0);
  });

  test('the social links are icons with names, opening in a new tab', async ({ page }) => {
    await page.goto('/');
    for (const [name, href] of [
      ['GitHub', 'https://github.com/alxlyn'],
      ['LinkedIn', 'https://linkedin.com/in/aleksei-lian'],
      ['X', 'https://x.com/_alxlyn'],
    ]) {
      const link = page.getByRole('link', { name, exact: true }).first();
      await expect(link).toHaveAttribute('href', href);
      await expect(link).toHaveAttribute('target', '_blank');
      await expect(link.locator('svg')).toBeVisible();
    }
  });
});

test.describe('small controls', () => {
  test('the first Tab lands on a working skip link', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    const skip = page.getByRole('link', { name: 'Skip to the content' });
    await expect(skip).toBeFocused();
    const top = await skip.evaluate((node) => node.getBoundingClientRect().top);
    expect(top).toBeGreaterThanOrEqual(0);
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/#main$/);
  });

  test('every control shows a focus ring and has a name', async ({ page }) => {
    await page.goto('/');
    const controls = page.locator('a[href], button');
    const count = await controls.count();
    expect(count).toBeGreaterThan(8);
    await page.keyboard.press('Tab');
    for (let i = 0; i < count; i += 1) {
      const state = await page.evaluate(() => {
        const element = document.activeElement;
        const style = getComputedStyle(element);
        const name = element.getAttribute('aria-label') || element.textContent.trim();
        return { name, outline: style.outlineStyle, tag: element.tagName };
      });
      if (state.tag === 'BODY') break;
      expect(state.name, 'focused control has a name').toBeTruthy();
      expect(state.outline, `${state.name} has a focus ring`).not.toBe('none');
      await page.keyboard.press('Tab');
    }
  });

  test('touch targets are comfortable on a phone', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await page.goto('/');
    const small = await page.$$eval('header a, main a[class], footer a, button', (nodes) =>
      nodes
        // Stretched link: the whole card is the tap target.
        .map((node) => ({
          text: node.textContent.trim() || node.getAttribute('aria-label'),
          height: (node.closest('[data-link]') ?? node).getBoundingClientRect().height,
        }))
        .filter((box) => box.height > 0 && box.height < 32),
    );
    expect(small).toEqual([]);
  });
});
