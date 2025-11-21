const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Set viewport
  await page.setViewportSize({ width: 1920, height: 1080 });

  console.log('Navigating to localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Wait a bit for fonts and animations
  await page.waitForTimeout(2000);

  console.log('Taking screenshot...');
  await page.screenshot({
    path: 'screenshot-desktop.png',
    fullPage: true
  });

  console.log('Screenshot saved: screenshot-desktop.png');

  // Also test mobile view
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  await page.screenshot({
    path: 'screenshot-mobile.png',
    fullPage: true
  });

  console.log('Screenshot saved: screenshot-mobile.png');

  await browser.close();
  console.log('Done!');
})();
