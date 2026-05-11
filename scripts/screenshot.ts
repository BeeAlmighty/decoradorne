import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const BASE_URL = process.env.SCREENSHOT_URL ?? 'http://localhost:3000';

const PAGES = [
  { path: '/', name: 'home' },
  { path: '/services', name: 'services' },
  { path: '/services/engagement-decor-lagos', name: 'service-engagement' },
  { path: '/services/kamu-decoration-lagos', name: 'service-kamu' },
  { path: '/services/henna-party-decor-lagos', name: 'service-henna' },
  { path: '/services/arabian-night-decoration-lagos', name: 'service-arabian' },
  { path: '/services/nikkah-decoration-lagos', name: 'service-nikkah' },
  { path: '/services/naming-ceremony-decor-lagos', name: 'service-naming' },
  { path: '/services/picnic-setup-lagos', name: 'service-picnic' },
  { path: '/services/event-rentals-lagos', name: 'service-rentals' },
  { path: '/gallery', name: 'gallery' },
  { path: '/about', name: 'about' },
];

const VIEWPORTS = [
  { name: 'mobile', width: 375, height: 812, deviceScaleFactor: 2 },
  { name: 'desktop', width: 1440, height: 900, deviceScaleFactor: 1 },
];

async function run() {
  const outputDir = path.join(process.cwd(), 'screenshots');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  let captured = 0;

  for (const pageConfig of PAGES) {
    for (const viewport of VIEWPORTS) {
      const page = await browser.newPage();
      await page.setViewport({
        width: viewport.width,
        height: viewport.height,
        deviceScaleFactor: viewport.deviceScaleFactor,
      });

      const url = `${BASE_URL}${pageConfig.path}`;
      try {
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
        // Wait for animations
        await new Promise((r) => setTimeout(r, 800));

        const filename = `${pageConfig.name}-${viewport.name}.png`;
        await page.screenshot({
          path: path.join(outputDir, filename),
          fullPage: true,
        });

        console.log(`  ✓ ${filename}`);
        captured++;
      } catch (err) {
        console.error(`  ✗ Failed: ${url} @ ${viewport.name}`, err);
      } finally {
        await page.close();
      }
    }
  }

  await browser.close();
  console.log(`\nDone. ${captured} screenshots saved to ./screenshots/`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
