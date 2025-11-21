const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log('Generating PDFs from website pages...');

  // 1. Executive Briefing PDF
  console.log('1. Generating Executive Briefing PDF...');
  await page.goto('http://localhost:3000/executive-briefing', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.pdf({
    path: 'public/documents/executive-briefing.pdf',
    format: 'A4',
    margin: {
      top: '20mm',
      right: '15mm',
      bottom: '20mm',
      left: '15mm'
    },
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<div style="font-size: 10px; width: 100%; text-align: center; color: #666;">adidas AI L&D Project - Executive Briefing</div>',
    footerTemplate: '<div style="font-size: 10px; width: 100%; text-align: center; color: #666;">Page <span class="pageNumber"></span> of <span class="totalPages"></span> | November 21, 2025</div>'
  });
  console.log('   ✓ Executive Briefing PDF created');

  // 2. Weekly Progress Report PDF
  console.log('2. Generating Weekly Progress Report PDF...');
  await page.goto('http://localhost:3000/weekly-progress', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.pdf({
    path: 'public/documents/weekly-progress-nov-21.pdf',
    format: 'A4',
    margin: {
      top: '20mm',
      right: '15mm',
      bottom: '20mm',
      left: '15mm'
    },
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<div style="font-size: 10px; width: 100%; text-align: center; color: #666;">adidas AI L&D Project - Weekly Progress</div>',
    footerTemplate: '<div style="font-size: 10px; width: 100%; text-align: center; color: #666;">Page <span class="pageNumber"></span> of <span class="totalPages"></span> | Week of November 21, 2025</div>'
  });
  console.log('   ✓ Weekly Progress Report PDF created');

  // 3. Landing Page as Project Overview
  console.log('3. Generating Project Overview PDF...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.pdf({
    path: 'public/documents/project-overview.pdf',
    format: 'A4',
    margin: {
      top: '20mm',
      right: '15mm',
      bottom: '20mm',
      left: '15mm'
    },
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<div style="font-size: 10px; width: 100%; text-align: center; color: #666;">adidas AI L&D Project - Overview</div>',
    footerTemplate: '<div style="font-size: 10px; width: 100%; text-align: center; color: #666;">Page <span class="pageNumber"></span> of <span class="totalPages"></span> | November 21, 2025</div>'
  });
  console.log('   ✓ Project Overview PDF created');

  await browser.close();

  console.log('\n✅ All PDFs generated successfully!');
  console.log('\nGenerated files:');
  console.log('- public/documents/executive-briefing.pdf');
  console.log('- public/documents/weekly-progress-nov-21.pdf');
  console.log('- public/documents/project-overview.pdf');
})();
