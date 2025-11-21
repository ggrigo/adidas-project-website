const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Set viewport
  await page.setViewportSize({ width: 1920, height: 1080 });

  console.log('Navigating to Executive Briefing page...');
  await page.goto('http://localhost:3000/executive-briefing', { waitUntil: 'networkidle' });

  // Wait a bit for fonts and animations
  await page.waitForTimeout(2000);

  console.log('Taking screenshot...');
  await page.screenshot({
    path: 'screenshot-executive-briefing-desktop.png',
    fullPage: true
  });

  console.log('Screenshot saved: screenshot-executive-briefing-desktop.png');

  await browser.close();
  console.log('Done!');
})();
