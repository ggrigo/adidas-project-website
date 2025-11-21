const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const placeholders = [
    {
      filename: 'website-structure-outline.pdf',
      title: 'Website Structure Outline',
      content: `
        <h1>Website Structure Outline</h1>
        <p><strong>Complete blueprint for project website with 20 page specifications</strong></p>
        <p>Date: November 21, 2025</p>
        <hr/>
        <h2>Overview</h2>
        <p>This document contains the complete structural specification for the adidas AI L&D project website, including:</p>
        <ul>
          <li>Information architecture and navigation</li>
          <li>Page-by-page specifications</li>
          <li>Content requirements for each section</li>
          <li>Interactive features and functionality</li>
          <li>Design guidelines and German sensibility principles</li>
        </ul>
        <h2>Key Pages</h2>
        <ul>
          <li>Landing Page</li>
          <li>Executive Briefing</li>
          <li>Weekly Progress</li>
          <li>Project Timeline</li>
          <li>Product Roadmap</li>
          <li>Document Repository</li>
          <li>Stakeholder Map</li>
        </ul>
        <p><em>For the complete 20-page specification document, please contact the project team.</em></p>
      `
    },
    {
      filename: 'master-guide-readme.pdf',
      title: 'Master Guide & README',
      content: `
        <h1>Master Guide & README</h1>
        <p><strong>Overview of all project documentation and how to navigate it</strong></p>
        <p>Date: November 21, 2025</p>
        <hr/>
        <h2>Purpose</h2>
        <p>This guide serves as the central index for all adidas AI L&D project documentation, helping team members quickly locate the information they need.</p>
        <h2>Document Categories</h2>
        <h3>Strategic Documents</h3>
        <ul>
          <li>Executive Briefing - High-level overview for stakeholders</li>
          <li>Website Structure Outline - Complete website specification</li>
        </ul>
        <h3>Operational Documents</h3>
        <ul>
          <li>Weekly Progress Reports - Current status and action items</li>
          <li>Project Timeline & Roadmap - Full project timeline with milestones</li>
        </ul>
        <h3>Handover Documents</h3>
        <ul>
          <li>Project Context Document - Comprehensive background for successor</li>
          <li>Stakeholder Map - Key contacts and organizational structure</li>
        </ul>
        <h2>How to Navigate</h2>
        <p>All documents are available through the project website document repository. Contact the project team for specific document access.</p>
      `
    },
    {
      filename: 'project-timeline-roadmap.pdf',
      title: 'Project Timeline & Roadmap',
      content: `
        <h1>Project Timeline & Roadmap</h1>
        <p><strong>Detailed timeline from March 2025 through 2026 with Gantt data</strong></p>
        <p>Date: November 21, 2025</p>
        <hr/>
        <h2>Project Phases</h2>
        <h3>Phase 1: Foundation (March - November 2025) ✅ Complete</h3>
        <ul>
          <li>Initial engagement and SOW (March - June)</li>
          <li>Workshop and discovery (August)</li>
          <li>Infrastructure setup (August - November)</li>
          <li>Prototype development (September - November)</li>
        </ul>
        <h3>Phase 2: Pilot Testing (November - December 2025) 🟡 Current</h3>
        <ul>
          <li>Mini pilot planning (November)</li>
          <li>Face-to-face executive meeting (December 2-3)</li>
          <li>Mini pilot execution (December 9-13)</li>
        </ul>
        <h3>Phase 3: Enterprise Rollout (Q1 2026) 📅 Planned</h3>
        <ul>
          <li>Director cohort pilot (January)</li>
          <li>Infrastructure scaling (February)</li>
          <li>Enterprise launch (March)</li>
        </ul>
        <h3>Phase 4: Scale & Enhance (2026) 📅 Planned</h3>
        <ul>
          <li>Q2: Integration & Expansion</li>
          <li>Q3-Q4: Advanced Capabilities</li>
          <li>2027: Strategic Platform</li>
        </ul>
        <p><em>For the complete Gantt chart and detailed milestones, see the interactive timeline page on the website.</em></p>
      `
    },
    {
      filename: 'weekly-progress-template.pdf',
      title: 'Weekly Progress Template',
      content: `
        <h1>Weekly Progress Template</h1>
        <p><strong>Template for ongoing weekly status updates</strong></p>
        <p>Date: November 21, 2025</p>
        <hr/>
        <h2>Weekly Progress Report Template</h2>
        <h3>Header Information</h3>
        <ul>
          <li>Week of: [Date]</li>
          <li>Last Updated: [Date and Time with Timezone]</li>
          <li>Overall Status: 🟢 On Track | 🟡 At Risk | 🔴 Blocked</li>
        </ul>
        <h3>Executive Summary</h3>
        <p>[Brief 2-3 sentence overview of the week]</p>
        <h3>For Each Project (Learning Agent & Self-Reflection Tool)</h3>
        <h4>Status: 🟢/🟡/🔴</h4>
        <h4>Completed This Week</h4>
        <ul><li>[Item with owner]</li></ul>
        <h4>In Progress</h4>
        <ul><li>[Item with owner and target date]</li></ul>
        <h4>Blockers & Risks</h4>
        <ul><li>[Critical issues requiring attention]</li></ul>
        <h4>Key Metrics</h4>
        <ul><li>[Quantitative progress indicators]</li></ul>
        <h3>Action Items</h3>
        <table border="1">
          <tr><th>Action</th><th>Owner</th><th>Due Date</th><th>Status</th></tr>
          <tr><td>[Description]</td><td>[Name]</td><td>[Date]</td><td>🟢/🟡</td></tr>
        </table>
        <h3>Upcoming Milestones</h3>
        <ul><li>[Milestone] - [Date] - Confidence: 🟢 High | 🟡 Medium | 🔴 Low</li></ul>
      `
    },
    {
      filename: 'project-context-document.pdf',
      title: 'Project Context Document',
      content: `
        <h1>Project Context Document</h1>
        <p><strong>Comprehensive 21-page context for successor handover</strong></p>
        <p>Date: November 21, 2025</p>
        <hr/>
        <h2>Executive Summary</h2>
        <p>This document provides complete context for the adidas AI Learning & Leadership Development project, designed specifically for successor onboarding and project continuity.</p>
        <h2>Project Overview</h2>
        <ul>
          <li><strong>Scope:</strong> Two AI-powered solutions for 60,000 employees and 10,000 leaders</li>
          <li><strong>Partners:</strong> adidas (client) and Baresquare (delivery)</li>
          <li><strong>Timeline:</strong> March 2025 - Q4 2026</li>
          <li><strong>Technology:</strong> 100% Microsoft stack (Azure, SharePoint, Power Platform)</li>
        </ul>
        <h2>Key Stakeholders</h2>
        <ul>
          <li><strong>adidas:</strong> Pedro Silva (VP), Karina (Leadership), Zsofia (Project Lead → Successor TBD)</li>
          <li><strong>Baresquare:</strong> Georgios (CEO), Lars (COO), Nikos (Technical Lead)</li>
        </ul>
        <h2>Current Status (November 21, 2025)</h2>
        <ul>
          <li><strong>Learning Agent:</strong> 🟡 95% complete - Awaiting LeanIX infrastructure approval</li>
          <li><strong>Self-Reflection Tool:</strong> 🟢 90% complete - Ready for mini pilot December 9-13</li>
        </ul>
        <h2>Next Steps</h2>
        <ul>
          <li>December 2-3: Face-to-face executive meeting in Herzogenaurach</li>
          <li>December 9-13: Mini pilot with 5-8 leaders</li>
          <li>Q1 2026: Enterprise rollout</li>
        </ul>
        <p><em>For complete historical context, decision log, and detailed technical specifications, access the full 21-page document through the project team.</em></p>
      `
    },
    {
      filename: 'stakeholder-map.pdf',
      title: 'Stakeholder Map',
      content: `
        <h1>Stakeholder Map</h1>
        <p><strong>Key contacts, roles, and communication protocols</strong></p>
        <p>Date: November 21, 2025</p>
        <hr/>
        <h2>Executive Sponsors</h2>
        <h3>adidas</h3>
        <ul>
          <li><strong>Pedro Silva</strong> - VP Talent Organization (Self-Reflection sponsor)</li>
          <li><strong>Karina</strong> - Senior Leadership (Leadership Framework sponsor)</li>
        </ul>
        <h2>Project Team</h2>
        <h3>adidas</h3>
        <ul>
          <li><strong>Zsofia Pior</strong> - Leadership Framework Product Owner (until December 12, 2025)</li>
          <li><strong>Successor (TBD)</strong> - New Project Lead (announcement expected November 29)</li>
          <li><strong>Lucas</strong> - L&D Technical Liaison (Learning Agent coordination)</li>
          <li><strong>Divya Jhamb</strong> - Learning Initiatives India (Self-Reflection content)</li>
        </ul>
        <h3>Baresquare</h3>
        <ul>
          <li><strong>Georgios Grigoriadis</strong> - CEO (Strategic oversight) - georgios@baresquare.com</li>
          <li><strong>Lars Boeddener</strong> - COO (Program management) - lars@baresquare.com</li>
          <li><strong>Nikos Vogiatzis</strong> - Technical Lead (Development & architecture)</li>
          <li><strong>Panayotis</strong> - Development team</li>
        </ul>
        <h2>Communication Protocols</h2>
        <h3>Meeting Cadences</h3>
        <ul>
          <li>Weekly sync: adidas + Baresquare project teams</li>
          <li>Bi-weekly executive updates: Pedro, Karina</li>
          <li>Ad-hoc technical: Lucas, Nikos as needed</li>
        </ul>
        <h3>Escalation Path</h3>
        <ul>
          <li><strong>Level 1:</strong> Project leads (Zsofia/Successor, Lars)</li>
          <li><strong>Level 2:</strong> Executive sponsors (Pedro, Karina, Georgios)</li>
          <li><strong>Level 3:</strong> Senior leadership</li>
        </ul>
        <p><em>For the complete organizational chart with photos and detailed role descriptions, see the stakeholder map page on the website.</em></p>
      `
    }
  ];

  for (const doc of placeholders) {
    console.log(`Generating ${doc.filename}...`);

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            line-height: 1.6;
            color: #0A0A0A;
            max-width: 800px;
            margin: 40px;
          }
          h1 {
            color: #000000;
            font-size: 32px;
            font-weight: 900;
            margin-bottom: 8px;
          }
          h2 {
            color: #000000;
            font-size: 24px;
            font-weight: 800;
            margin-top: 32px;
            margin-bottom: 16px;
          }
          h3 {
            color: #000000;
            font-size: 18px;
            font-weight: 700;
            margin-top: 24px;
            margin-bottom: 12px;
          }
          h4 {
            color: #000000;
            font-size: 16px;
            font-weight: 600;
            margin-top: 16px;
            margin-bottom: 8px;
          }
          p {
            margin-bottom: 12px;
            color: #404040;
          }
          ul, ol {
            margin-bottom: 16px;
            padding-left: 24px;
          }
          li {
            margin-bottom: 8px;
            color: #404040;
          }
          strong {
            color: #000000;
            font-weight: 600;
          }
          hr {
            border: none;
            border-top: 2px solid #E5E5E5;
            margin: 24px 0;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 16px 0;
          }
          th, td {
            padding: 12px;
            text-align: left;
            border: 1px solid #E5E5E5;
          }
          th {
            background-color: #F5F5F5;
            font-weight: 600;
          }
          em {
            color: #666666;
            font-style: italic;
          }
        </style>
      </head>
      <body>
        ${doc.content}
      </body>
      </html>
    `;

    await page.setContent(htmlContent);
    await page.pdf({
      path: `public/documents/${doc.filename}`,
      format: 'A4',
      margin: {
        top: '20mm',
        right: '15mm',
        bottom: '20mm',
        left: '15mm'
      },
      printBackground: true
    });

    console.log(`   ✓ ${doc.filename} created`);
  }

  await browser.close();
  console.log('\n✅ All placeholder PDFs generated successfully!');
})();
