import { chromium } from '@playwright/test';
import { writeFileSync } from 'fs';

const pages = [
  { name: 'Landing Page', url: 'http://localhost:3000' },
  { name: 'Executive Briefing', url: 'http://localhost:3000/executive-briefing' },
  { name: 'Weekly Progress', url: 'http://localhost:3000/weekly-progress' },
  { name: 'Timeline', url: 'http://localhost:3000/timeline' },
  { name: 'Documents', url: 'http://localhost:3000/documents' },
];

async function analyzeContent() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const results = [];

  for (const page of pages) {
    console.log(`\n📄 Analyzing: ${page.name}`);
    const browserPage = await context.newPage();

    try {
      await browserPage.goto(page.url, { waitUntil: 'networkidle', timeout: 10000 });

      // Wait a bit for any dynamic content to load
      await browserPage.waitForTimeout(2000);

      // Get all visible text content
      const textContent = await browserPage.evaluate(() => {
        // Get all text nodes
        const walker = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_TEXT,
          null,
          false
        );

        const texts = [];
        let node;

        while (node = walker.nextNode()) {
          const text = node.textContent.trim();
          if (text.length > 0) {
            // Check if the element is visible
            const parent = node.parentElement;
            if (parent) {
              const style = window.getComputedStyle(parent);
              if (style.display !== 'none' &&
                  style.visibility !== 'hidden' &&
                  style.opacity !== '0') {
                texts.push(text);
              }
            }
          }
        }

        return texts.join('\n');
      });

      // Get structured content by sections
      const sections = await browserPage.evaluate(() => {
        const results = [];

        // Headers
        const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headers.forEach(h => {
          if (h.textContent.trim()) {
            results.push({
              type: h.tagName.toLowerCase(),
              text: h.textContent.trim()
            });
          }
        });

        // Buttons
        const buttons = document.querySelectorAll('button, a.btn, [role="button"]');
        buttons.forEach(btn => {
          if (btn.textContent.trim()) {
            results.push({
              type: 'button',
              text: btn.textContent.trim()
            });
          }
        });

        // Tables
        const tables = document.querySelectorAll('table');
        tables.forEach((table, idx) => {
          const headers = Array.from(table.querySelectorAll('th')).map(th => th.textContent.trim());
          results.push({
            type: 'table',
            index: idx,
            headers: headers,
            rowCount: table.querySelectorAll('tbody tr').length
          });
        });

        // Cards/sections with specific classes
        const cards = document.querySelectorAll('[class*="card"], [class*="section"], section');
        cards.forEach((card, idx) => {
          const heading = card.querySelector('h1, h2, h3, h4, h5, h6');
          if (heading) {
            results.push({
              type: 'section',
              heading: heading.textContent.trim(),
              textLength: card.textContent.trim().length
            });
          }
        });

        return results;
      });

      results.push({
        page: page.name,
        url: page.url,
        fullText: textContent,
        structured: sections,
        wordCount: textContent.split(/\s+/).length
      });

      console.log(`   ✓ Captured ${textContent.split(/\s+/).length} words`);
      console.log(`   ✓ Found ${sections.filter(s => s.type.startsWith('h')).length} headings`);
      console.log(`   ✓ Found ${sections.filter(s => s.type === 'table').length} tables`);

    } catch (error) {
      console.error(`   ✗ Error: ${error.message}`);
      results.push({
        page: page.name,
        url: page.url,
        error: error.message
      });
    }

    await browserPage.close();
  }

  await browser.close();

  // Save results
  writeFileSync(
    'scripts/content-analysis.json',
    JSON.stringify(results, null, 2)
  );

  console.log('\n✅ Analysis complete! Results saved to scripts/content-analysis.json');

  // Print summary
  console.log('\n📊 SUMMARY:');
  results.forEach(r => {
    if (!r.error) {
      console.log(`\n${r.page}:`);
      console.log(`   - ${r.wordCount} total words`);
      console.log(`   - ${r.structured.filter(s => s.type.startsWith('h')).length} headings`);
      console.log(`   - ${r.structured.filter(s => s.type === 'table').length} tables`);
      console.log(`   - ${r.structured.filter(s => s.type === 'button').length} buttons/links`);
    }
  });
}

analyzeContent().catch(console.error);
