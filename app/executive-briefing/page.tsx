export default function ExecutiveBriefing() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 lg:px-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Executive Briefing</h1>
        <p className="mt-2 text-lg text-gray-600">November 21, 2025</p>
      </div>

      {/* At a Glance */}
      <section className="mb-12">
        <h2 className="mb-4 text-3xl font-bold text-gray-900">At a Glance</h2>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            Baresquare and adidas are partnering to deliver adidas' first enterprise AI deployment in HR—two
            integrated solutions transforming how 60,000 employees learn and 10,000 leaders develop.
          </p>

          <div className="mt-6 bg-primary-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Projects:</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Learning Agent:</strong> AI-powered personalized learning recommendations</li>
              <li><strong>Leadership Self-Reflection Tool:</strong> Competency-based self-assessment and development planning</li>
            </ul>
          </div>

          <div className="mt-6 bg-green-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Strategic Value:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>First HR AI deployment establishes governance and infrastructure for future innovation</li>
              <li>100% Microsoft Azure stack ensures security, compliance, and cost efficiency</li>
              <li>Privacy-first architecture with individual data ownership</li>
              <li>Scalable foundation for performance management, recruiting, and other HR domains</li>
            </ul>
          </div>

          <div className="mt-6 bg-blue-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Current Status:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Learning Agent: Technical development complete, awaiting deployment approval</li>
              <li>Self-Reflection Tool: Mini pilot scheduled December 9-13, 2025</li>
              <li>Both projects positioned for Q1 2026 enterprise rollout</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Business Impact</h2>

        <div className="space-y-6">
          <div className="border-l-4 border-primary-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">For Employees (60,000)</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Reduce time to find relevant learning:</strong> From 30+ minutes to under 5 minutes</li>
              <li><strong>Personalized recommendations:</strong> AI understands your role, skills, and career goals</li>
              <li><strong>Unified experience:</strong> Self-reflection insights inform learning recommendations</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">For Leaders (10,000)</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Structured self-reflection:</strong> Against nine leadership competencies</li>
              <li><strong>Actionable development plans:</strong> Personalized micro-actions and learning paths</li>
              <li><strong>Progress tracking:</strong> Private, user-controlled development journey</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">For the Organization</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Skills gap visibility:</strong> Aggregated, anonymized data on development needs</li>
              <li><strong>Strategic insights:</strong> Identify training priorities and leadership development trends</li>
              <li><strong>Scalable infrastructure:</strong> Foundation for future AI innovations in talent management</li>
              <li><strong>Cost efficiency:</strong> Minimal ongoing operational costs, leverages existing Microsoft investment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Foundation */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Technical Foundation</h2>

        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Built entirely on Microsoft Azure/365:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Microsoft Copilot Studio (AI engine)</li>
            <li>Power Platform (applications)</li>
            <li>SharePoint Online (integration)</li>
            <li>Individual OneDrive (privacy-first storage)</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900">Key Innovations:</h3>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li><strong>Privacy-first architecture:</strong> User data stored in personal OneDrive, not central database</li>
            <li><strong>Intelligent mapping:</strong> AI connects roles → skills → learning → competencies</li>
            <li><strong>Seamless integration:</strong> SharePoint plugins integrated into existing Learning Hub</li>
            <li><strong>Zero external licenses:</strong> 100% Microsoft stack, no additional vendors</li>
          </ol>
        </div>

        <div className="mt-6 bg-primary-50 border border-primary-200 rounded-lg p-6">
          <p className="text-gray-800">
            <strong>Infrastructure Value:</strong> This deployment establishes reusable AI governance, security
            frameworks, and technical architecture that accelerates future HR AI projects by 6+ months per initiative.
          </p>
        </div>
      </section>

      {/* Project Journey */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Project Journey</h2>

        <div className="space-y-3 text-gray-700">
          <div className="flex gap-4">
            <span className="font-semibold text-primary-600 min-w-32">March 2025:</span>
            <span>Initial engagement on Learning Agent concept</span>
          </div>
          <div className="flex gap-4">
            <span className="font-semibold text-primary-600 min-w-32">June 2025:</span>
            <span>Learning Agent SOW signed, scope expanded to include Self-Reflection Tool</span>
          </div>
          <div className="flex gap-4">
            <span className="font-semibold text-primary-600 min-w-32">August 2025:</span>
            <span>Face-to-face workshop, technical architecture finalized</span>
          </div>
          <div className="flex gap-4">
            <span className="font-semibold text-primary-600 min-w-32">Aug-Nov 2025:</span>
            <span>Infrastructure setup, AI Committee approval, prototype development</span>
          </div>
          <div className="flex gap-4">
            <span className="font-semibold text-primary-600 min-w-32">November 2025:</span>
            <span>Projects ready for pilot testing</span>
          </div>
          <div className="flex gap-4">
            <span className="font-semibold text-primary-600 min-w-32">December 2025:</span>
            <span>Mini pilot with 5-8 directors, transition to new project lead</span>
          </div>
          <div className="flex gap-4">
            <span className="font-semibold text-primary-600 min-w-32">Q1 2026:</span>
            <span>Enterprise rollout for both solutions</span>
          </div>
        </div>
      </section>

      {/* What's Next */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">What's Next</h2>

        <div className="space-y-6">
          <div className="bg-primary-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">December 2-3: Face-to-Face Alignment (Herzogenaurach)</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Executive briefing for Pedro, Karina, and new project lead</li>
              <li>Demonstration of both solutions</li>
              <li>Mini pilot planning and success criteria</li>
              <li>Enterprise rollout strategy discussion</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">December 9-13: Mini Pilot Testing</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>5-8 directors test Leadership Self-Reflection Tool</li>
              <li>Structured feedback collection</li>
              <li>Refinement based on real user experience</li>
              <li>Documentation of lessons learned</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Q1 2026: Path to Enterprise</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>January:</strong> Director cohort pilot (40-50 users)</li>
              <li><strong>February:</strong> Scale infrastructure, finalize change management</li>
              <li><strong>March:</strong> Initial enterprise rollout
                <ul className="ml-8 mt-2 list-circle list-inside">
                  <li>Learning Agent: 8,000 people leaders</li>
                  <li>Self-Reflection Tool: 10,000 people leaders</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2026 Roadmap */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">2026 Roadmap: From Foundation to Ecosystem</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Q2: Integration & Expansion</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Performance management integration:</strong> Connect self-reflection to performance conversations</li>
              <li><strong>German language support:</strong> Serve German-speaking employee population</li>
              <li><strong>Enhanced analytics:</strong> Skills gap analysis, learning effectiveness metrics</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Q3-Q4: Advanced Capabilities</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Additional languages:</strong> Spanish, French, Chinese, Japanese</li>
              <li><strong>Career pathing:</strong> AI-powered career recommendations</li>
              <li><strong>Peer learning:</strong> Connect employees for knowledge sharing</li>
              <li><strong>Voice interface:</strong> Hands-free interaction for accessibility</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">2027: Strategic Platform</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Recruiting integration:</strong> Skills-based hiring recommendations</li>
              <li><strong>Succession planning:</strong> Predictive analytics for talent pipelines</li>
              <li><strong>External learning platforms:</strong> Expand beyond LinkedIn Learning</li>
              <li><strong>Advanced organizational insights:</strong> Strategic workforce planning</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Investment & ROI */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Investment & Value Proposition</h2>

        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Ongoing Operational Costs</h3>
            <p className="text-gray-700 mb-4">
              <strong>Technology:</strong> €15,000-25,000/year at full scale
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Microsoft Azure OpenAI usage</li>
              <li>Power Platform licenses</li>
              <li>No additional software required</li>
            </ul>
            <p className="text-gray-700">
              <strong>Operations:</strong> 0.5-1.0 FTE equivalent
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Content updates and refinement</li>
              <li>User support and training</li>
              <li>Continuous improvement</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 bg-green-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Direct Benefits:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                <li>Reduced external training costs (better targeting)</li>
                <li>Improved learning engagement and completion</li>
                <li>Better leadership development (reduced turnover)</li>
                <li>Faster time to competency for new roles</li>
              </ul>
            </div>

            <div className="border border-primary-200 bg-primary-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Strategic Benefits:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                <li>Accelerated future AI projects (6+ months time savings per project)</li>
                <li>Data-driven talent decisions (skills gap visibility)</li>
                <li>Competitive advantage in AI-powered HR</li>
                <li>Foundation for performance management transformation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Success Metrics</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Learning Agent</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Adoption:</strong> 70% of people leaders active within 6 months</li>
              <li><strong>Engagement:</strong> Average 2+ sessions per week, 10+ minutes per session</li>
              <li><strong>Learning completion:</strong> 30% increase in content completion year-over-year</li>
              <li><strong>Satisfaction:</strong> 4.0+ out of 5.0 user rating</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Self-Reflection Tool</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Completion rate:</strong> 85% of leaders complete annual self-reflection</li>
              <li><strong>Development plans:</strong> 80% create actionable development plan</li>
              <li><strong>Organizational insights:</strong> Identify top 10 skills gaps by function/geography</li>
              <li><strong>Performance integration:</strong> Track in 2026 performance cycle</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Combined Impact</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Infrastructure reuse:</strong> 3+ additional AI projects leverage foundation by end of 2026</li>
              <li><strong>Cost efficiency:</strong> 40% lower than external solutions or consultancy</li>
              <li><strong>Time to market:</strong> New HR AI initiatives launch 6+ months faster</li>
              <li><strong>Strategic insights:</strong> Skills-based workforce planning capabilities operational by Q4 2026</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Contacts */}
      <section id="contact" className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Key Contacts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">adidas</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>Pedro Silva - VP Talent Organization (Self-Reflection sponsor)</li>
              <li>Karina - Senior Leadership (Leadership Framework sponsor)</li>
              <li>Zsofia Pior - Leadership Framework Product Owner (until Dec 12)</li>
              <li>Lucas - L&D Technical Liaison (Learning Agent)</li>
              <li>Divya Jhamb - Learning Initiatives India (Self-Reflection)</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Baresquare</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>Georgios Grigoriadis, CEO - Strategic oversight<br/>
                <a href="mailto:georgios@baresquare.com" className="text-primary-600 hover:text-primary-700">
                  georgios@baresquare.com
                </a>
              </li>
              <li>Lars Boeddener, COO - Program management<br/>
                <a href="mailto:lars@baresquare.com" className="text-primary-600 hover:text-primary-700">
                  lars@baresquare.com
                </a>
              </li>
              <li>Nikos Vogiatzis - Technical Lead<br/>Development and architecture</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
        <p><strong>Prepared by:</strong> Georgios Grigoriadis, Baresquare</p>
        <p className="mt-1"><strong>Date:</strong> November 21, 2025</p>
        <p className="mt-1"><strong>Next Update:</strong> December 3, 2025 (post face-to-face meeting)</p>
      </div>
    </div>
  );
}
