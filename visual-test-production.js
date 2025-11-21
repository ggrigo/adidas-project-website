const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Set viewport
  await page.setViewportSize({ width: 1920, height: 1080 });

  console.log('Testing production build...');

  // Test landing page
  console.log('Testing landing page...');
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: 'screenshot-production-landing.png',
    fullPage: true
  });

  // Test executive briefing
  console.log('Testing executive briefing...');
  await page.goto('http://localhost:3001/executive-briefing', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: 'screenshot-production-executive-briefing.png',
    fullPage: true
  });

  // Test weekly progress
  console.log('Testing weekly progress...');
  await page.goto('http://localhost:3001/weekly-progress', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: 'screenshot-production-weekly-progress.png',
    fullPage: true
  });

  // Test documents
  console.log('Testing documents...');
  await page.goto('http://localhost:3001/documents', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: 'screenshot-production-documents.png',
    fullPage: true
  });

  console.log('All production screenshots saved!');

  await browser.close();
  console.log('Done!');
})();
