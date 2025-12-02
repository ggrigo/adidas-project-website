'use client';

import { useState, useEffect } from 'react';

export default function ExecutiveBriefing() {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'at-a-glance', label: 'At a Glance' },
    { id: 'business-impact', label: 'Business Impact' },
    { id: 'technical', label: 'Technical Foundation' },
    { id: 'journey', label: 'Project Journey' },
    { id: 'next', label: "What's Next" },
    { id: 'roadmap', label: '2026 Roadmap' },
    { id: 'investment', label: 'Investment & ROI' },
    { id: 'metrics', label: 'Success Metrics' },
    { id: 'contact', label: 'Key Contacts' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -66% 0px' }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 mb-6 shadow-lg">
            <span className="h-2 w-2 rounded-full bg-info animate-pulse" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">Executive Briefing</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-neutral-950 mb-4">
            Agentic Talent<br />Development
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 font-medium mb-8">Last update: December 2, 2025</p>
        </div>

        {/* Two-column layout: TOC + Content */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Sticky Table of Contents */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <div className="rounded-2xl border-2 border-neutral-200 bg-white p-6 shadow-soft">
                <h2 className="text-sm font-bold text-neutral-950 uppercase tracking-wider mb-4">Contents</h2>
                <nav className="space-y-1">
                  {sections.map(({ id, label }) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className={`block rounded-lg px-3 py-2 text-sm font-semibold transition-all ${
                        activeSection === id
                          ? 'bg-neutral-900 text-white'
                          : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                      }`}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9">
            {/* At a Glance */}
            <section id="at-a-glance" className="mb-20 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-neutral-950 mb-6">At a Glance</h2>
              <p className="text-lg md:text-xl leading-relaxed text-neutral-700 font-medium mb-8">
                Baresquare and adidas are partnering to deliver adidas' first enterprise AI deployment in HR—two
                integrated solutions transforming how 60,000 employees learn and 10,000 leaders develop.
              </p>

              <div className="grid gap-6 mb-6">
                <div className="relative overflow-hidden rounded-2xl border-2 border-info/20 bg-gradient-to-br from-info-light via-white to-info-light/50 p-8 shadow-soft">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-info/10 rounded-full blur-2xl" />
                  <div className="relative">
                    <h3 className="text-xl font-bold text-neutral-950 mb-4 flex items-center gap-2">
                      <svg className="w-6 h-6 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      Projects
                    </h3>
                    <ul className="space-y-3 text-neutral-700 font-medium">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-info mt-2" />
                        <span><strong>Learning Agent:</strong> AI-powered personalized learning recommendations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-info mt-2" />
                        <span><strong>Self-Reflection Agent:</strong> Competency-based self-assessment and micro-action recommendations</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl border-2 border-success/20 bg-gradient-to-br from-success-light via-white to-success-light/50 p-8 shadow-soft">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-success/10 rounded-full blur-2xl" />
                  <div className="relative">
                    <h3 className="text-xl font-bold text-neutral-950 mb-4 flex items-center gap-2">
                      <svg className="w-6 h-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      Strategic Value
                    </h3>
                    <ul className="space-y-3 text-neutral-700 font-medium">
                      <li className="flex items-start gap-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-success mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>First HR GenAI deployment establishes governance and infrastructure for future innovation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-success mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>100% Microsoft Azure stack ensures security, compliance, and cost efficiency</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-success mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Employee-controlled data with no passive monitoring — development insights remain personal unless explicitly shared</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl border-2 border-ai/20 bg-gradient-to-br from-ai-light via-white to-ai-light/50 p-8 shadow-soft">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-ai/10 rounded-full blur-2xl" />
                  <div className="relative">
                    <h3 className="text-xl font-bold text-neutral-950 mb-4 flex items-center gap-2">
                      <svg className="w-6 h-6 text-ai" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Current Status
                    </h3>
                    <ul className="space-y-3 text-neutral-700 font-medium">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-success mt-2" />
                        <span><strong>Learning Agent:</strong> Technical development complete, awaiting deployment approval</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-info mt-2" />
                        <span><strong>Self-Reflection Agent:</strong> Mini pilot scheduled December 9-13, 2025</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-warning mt-2" />
                        <span>Both projects positioned for Q1 2026 enterprise rollout</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Business Impact */}
            <section id="business-impact" className="mb-20 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-neutral-950 mb-8">Business Impact</h2>

              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-2xl border-l-4 border-info bg-white p-8 shadow-soft">
                  <h3 className="text-2xl font-bold text-neutral-950 mb-4">For Employees (30,000 corporate users)</h3>
                  <ul className="space-y-3 text-neutral-700 font-medium">
                    <li className="flex items-start gap-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-info mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Find relevant learning in under 5 minutes; no more navigating fragmented content scattered across LinkedIn Learning, SharePoint, and internal academies. Recommendations surface based on what matters, not what's trending.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-info mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Receive personalized suggestions based on role, skills, and career goals: as aspirations shift or positions change, the recommendations evolve automatically. Learning becomes a continuous companion, not a periodic chore.</span>
                    </li>
                  </ul>
                </div>

                <div className="relative overflow-hidden rounded-2xl border-l-4 border-success bg-white p-8 shadow-soft">
                  <h3 className="text-2xl font-bold text-neutral-950 mb-4">For Leaders (10,000 people managers)</h3>
                  <ul className="space-y-3 text-neutral-700 font-medium">
                    <li className="flex items-start gap-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-success mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Build self-reflection habits through private assessments against nine leadership competencies; see how results compare to peers while individual responses stay confidential. Structure replaces guesswork in understanding where to focus.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-success mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Receive micro-actions applicable this week: practical behavior changes like "start one-on-ones with recognition" rather than courses to complete someday. Development happens in the flow of work, not outside it.</span>
                    </li>
                  </ul>
                </div>

                <div className="relative overflow-hidden rounded-2xl border-l-4 border-ai bg-white p-8 shadow-soft">
                  <h3 className="text-2xl font-bold text-neutral-950 mb-4">For the Organization</h3>
                  <ul className="space-y-3 text-neutral-700 font-medium">
                    <li className="flex items-start gap-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-ai mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Gain aggregated visibility into skills gaps and leadership development needs across functions and regions. Strategic decisions on training investment become data-informed rather than assumption-driven.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-ai mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Operationalize the Leadership Framework at scale without additional change management campaigns; employees engage with competencies through the tool, not through presentations. Adoption becomes invisible.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-ai mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Establish enterprise AI infrastructure — governance frameworks, security protocols, and Azure architecture that future HR applications inherit. Every subsequent agent launches faster and cheaper because the foundation exists.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Technical Foundation - OPTION A: Full Version */}
            <section id="technical" className="mb-20 scroll-mt-24">
              <div className="mb-6 p-4 rounded-xl bg-warning-light/50 border-2 border-warning/30">
                <p className="text-sm font-bold text-warning-dark">OPTION A: "Why This Works at adidas" (Full Version) — Review and compare with Option B below</p>
              </div>

              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-neutral-950 mb-8">Why This Works at adidas</h2>

              <div className="space-y-6">
                {/* No new platforms */}
                <div className="relative overflow-hidden rounded-2xl border-2 border-success/20 bg-gradient-to-br from-success-light/30 via-white to-white p-8 shadow-soft">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-success/5 rounded-full blur-2xl" />
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-neutral-950 mb-4 flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      No new platforms — fewer, actually
                    </h3>
                    <ul className="space-y-3 text-neutral-700 font-medium ml-13">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-success mt-2" />
                        <span>100% Microsoft stack (Power Apps, Copilot Studio, SharePoint, Entra)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-success mt-2" />
                        <span>Integrates with Learning Hub, not beside it</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-success mt-2" />
                        <span>Consolidates fragmented learning touchpoints into one AI layer</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-success mt-2" />
                        <span>Pilots AI/HR micro-apps pattern with Power Apps</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* IT says yes */}
                <div className="relative overflow-hidden rounded-2xl border-2 border-info/20 bg-gradient-to-br from-info-light/30 via-white to-white p-8 shadow-soft">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-info/5 rounded-full blur-2xl" />
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-neutral-950 mb-4 flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-info/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      IT says yes
                    </h3>
                    <ul className="space-y-3 text-neutral-700 font-medium ml-13">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-info mt-2" />
                        <span>Corporate cloud = pre-approved infrastructure</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-info mt-2" />
                        <span>Microsoft Entra integration = user context without new data pipelines</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-info mt-2" />
                        <span>No external vendors, no new security reviews</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Compliance by default */}
                <div className="relative overflow-hidden rounded-2xl border-2 border-ai/20 bg-gradient-to-br from-ai-light/30 via-white to-white p-8 shadow-soft">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-ai/5 rounded-full blur-2xl" />
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-neutral-950 mb-4 flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-ai/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-ai" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      Compliance by default
                    </h3>
                    <ul className="space-y-3 text-neutral-700 font-medium ml-13">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-ai mt-2" />
                        <span>Data stays in adidas Microsoft tenant</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-ai mt-2" />
                        <span>No employee data leaves the corporate boundary</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-ai mt-2" />
                        <span>Privacy architecture designed with IT, not around IT</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-ai mt-2" />
                        <span>Corporate cloud = simpler data compliance than external applications</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Every AI app after this is easier */}
                <div className="relative overflow-hidden rounded-2xl border-2 border-warning/30 bg-gradient-to-br from-warning-light/50 to-white p-8 shadow-medium">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-warning/10 rounded-full blur-3xl" />
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-neutral-950 mb-4 flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      Every AI app after this is easier
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                      <div className="text-center p-4 rounded-xl bg-white border border-neutral-200">
                        <div className="text-2xl font-black text-success mb-1">Done</div>
                        <div className="text-xs font-semibold text-neutral-600">Governance frameworks</div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-white border border-neutral-200">
                        <div className="text-2xl font-black text-success mb-1">Done</div>
                        <div className="text-xs font-semibold text-neutral-600">Security protocols</div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-white border border-neutral-200">
                        <div className="text-2xl font-black text-success mb-1">Done</div>
                        <div className="text-xs font-semibold text-neutral-600">Azure architecture</div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-white border border-neutral-200">
                        <div className="text-2xl font-black text-success mb-1">Proven</div>
                        <div className="text-xs font-semibold text-neutral-600">Power Platform patterns</div>
                      </div>
                    </div>
                    <p className="text-neutral-700 font-medium mt-6 text-center">
                      Each subsequent HR AI agent launches <strong>faster and cheaper</strong> because the foundation exists.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Foundation - OPTION B: 3 Nos Version */}
            <section id="technical-b" className="mb-20 scroll-mt-24">
              <div className="mb-6 p-4 rounded-xl bg-info-light/50 border-2 border-info/30">
                <p className="text-sm font-bold text-info-dark">OPTION B: "Why This Works at adidas" (Punchy 3 Nos Version) — Compare with Option A above</p>
              </div>

              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-neutral-950 mb-8">Why This Works at adidas</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* No new platforms */}
                <div className="relative overflow-hidden rounded-2xl border-2 border-success/30 bg-gradient-to-br from-success-light/50 to-white p-8 shadow-soft">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-success/10 rounded-full blur-2xl" />
                  <div className="relative text-center">
                    <div className="w-16 h-16 rounded-2xl bg-success/10 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-black text-neutral-950 mb-3">No new platforms</h3>
                    <p className="text-neutral-700 font-medium text-sm leading-relaxed">
                      Built entirely on Microsoft 365 you already pay for. Power Apps, Copilot Studio, SharePoint, Entra — all corporate-approved.
                    </p>
                  </div>
                </div>

                {/* No IT surprises */}
                <div className="relative overflow-hidden rounded-2xl border-2 border-info/30 bg-gradient-to-br from-info-light/50 to-white p-8 shadow-soft">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-info/10 rounded-full blur-2xl" />
                  <div className="relative text-center">
                    <div className="w-16 h-16 rounded-2xl bg-info/10 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-black text-neutral-950 mb-3">No IT surprises</h3>
                    <p className="text-neutral-700 font-medium text-sm leading-relaxed">
                      Corporate cloud, Entra integration, pre-approved patterns. Data never leaves adidas tenant. Compliance is automatic.
                    </p>
                  </div>
                </div>

                {/* No repeated work */}
                <div className="relative overflow-hidden rounded-2xl border-2 border-warning/30 bg-gradient-to-br from-warning-light/50 to-white p-8 shadow-soft">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-warning/10 rounded-full blur-2xl" />
                  <div className="relative text-center">
                    <div className="w-16 h-16 rounded-2xl bg-warning/10 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-black text-neutral-950 mb-3">No repeated work</h3>
                    <p className="text-neutral-700 font-medium text-sm leading-relaxed">
                      Every future HR AI agent inherits this foundation. Governance, security, architecture — done once, reused forever.
                    </p>
                  </div>
                </div>
              </div>

              {/* Foundation callout */}
              <div className="mt-8 relative overflow-hidden rounded-2xl border-2 border-neutral-200 bg-gradient-to-r from-neutral-50 to-white p-8 shadow-soft">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-950">The Microsoft Advantage</h4>
                      <p className="text-sm text-neutral-600 font-medium">Integrates with Learning Hub. Uses Entra for user context. Pilots Power Apps for HR micro-apps.</p>
                    </div>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="text-3xl font-black text-neutral-950">6+ months</div>
                    <div className="text-sm font-semibold text-neutral-600">saved per future AI initiative</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Project Journey */}
            <section id="journey" className="mb-20 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-neutral-950 mb-8">Project Journey</h2>

              <div className="relative">
                <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-info via-success to-warning" />
                <div className="space-y-6">
                  {[
                    { date: 'March 2025', desc: 'Initial engagement on Learning Agent concept', color: 'info' },
                    { date: 'June 2025', desc: 'Learning Agent SOW signed, scope expanded to include Self-Reflection Tool', color: 'info' },
                    { date: 'August 2025', desc: 'Face-to-face workshop, technical architecture finalized', color: 'success' },
                    { date: 'Aug-Nov 2025', desc: 'Infrastructure setup, AI Committee approval, prototype development', color: 'success' },
                    { date: 'November 2025', desc: 'Projects ready for pilot testing', color: 'success' },
                    { date: 'December 2025', desc: 'Mini pilot with 5-8 directors, transition to new project lead', color: 'warning' },
                    { date: 'Q1 2026', desc: 'Enterprise rollout for both solutions', color: 'warning' },
                  ].map((milestone, idx) => (
                    <div key={idx} className="relative flex gap-6 group">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-${milestone.color} to-${milestone.color}-dark shadow-lg border-4 border-white flex items-center justify-center z-10`}>
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                      <div className="flex-1 pb-6">
                        <div className="rounded-xl bg-white border-2 border-neutral-200 p-6 shadow-soft group-hover:shadow-medium transition-shadow">
                          <span className={`inline-block px-3 py-1 rounded-full bg-${milestone.color}/10 text-${milestone.color} text-xs font-bold uppercase tracking-wider mb-2`}>
                            {milestone.date}
                          </span>
                          <p className="text-neutral-700 font-medium">{milestone.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Remaining sections with similar styling... */}
            {/* For brevity, I'll continue with key sections */}

            {/* What's Next */}
            <section id="next" className="mb-20 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-neutral-950 mb-8">What's Next</h2>

              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-2xl border-2 border-info/20 bg-gradient-to-br from-info-light via-white to-white p-8 shadow-soft">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-info/5 rounded-full blur-2xl" />
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-neutral-950 mb-4">December 2-3: Face-to-Face Alignment (Herzogenaurach)</h3>
                    <ul className="space-y-3 text-neutral-700 font-medium">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-info mt-2" />
                        <span>Executive briefing for Pedro, Karina, and new project lead</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-info mt-2" />
                        <span>Demonstration of both solutions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-info mt-2" />
                        <span>Mini pilot planning and success criteria</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-info mt-2" />
                        <span>Enterprise rollout strategy discussion</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl border-2 border-success/20 bg-gradient-to-br from-success-light via-white to-white p-8 shadow-soft">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-success/5 rounded-full blur-2xl" />
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-neutral-950 mb-4">December 9-13: Mini Pilot Testing</h3>
                    <ul className="space-y-3 text-neutral-700 font-medium">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-success mt-2" />
                        <span>5-8 directors test Leadership Self-Reflection Tool</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-success mt-2" />
                        <span>Structured feedback collection</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-success mt-2" />
                        <span>Refinement based on real user experience</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-success mt-2" />
                        <span>Documentation of lessons learned</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl border-2 border-warning/20 bg-gradient-to-br from-warning-light via-white to-white p-8 shadow-soft">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-warning/5 rounded-full blur-2xl" />
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-neutral-950 mb-4">Q1 2026: Path to Enterprise</h3>
                    <ul className="space-y-3 text-neutral-700 font-medium">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-warning mt-2" />
                        <span><strong>January:</strong> Director cohort pilot (40-50 users)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-warning mt-2" />
                        <span><strong>February:</strong> Scale infrastructure, finalize change management</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-warning mt-2" />
                        <div>
                          <span><strong>March:</strong> Initial enterprise rollout</span>
                          <ul className="ml-6 mt-2 space-y-2">
                            <li className="flex items-start gap-2 text-sm">
                              <span className="flex-shrink-0 w-1 h-1 rounded-full bg-warning mt-1.5" />
                              <span>Learning Agent: 8,000 people leaders</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm">
                              <span className="flex-shrink-0 w-1 h-1 rounded-full bg-warning mt-1.5" />
                              <span>Self-Reflection Tool: 10,000 people leaders</span>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 2026 Roadmap */}
            <section id="roadmap" className="mb-20 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-neutral-950 mb-8">
                2026 Roadmap: From Foundation to Ecosystem
              </h2>

              <div className="space-y-6">
                <div className="rounded-2xl border-2 border-info/20 bg-white p-8 shadow-soft">
                  <h3 className="text-2xl font-bold text-neutral-950 mb-4">Q2: Integration & Expansion</h3>
                  <ul className="space-y-3 text-neutral-700 font-medium">
                    <li className="flex items-start gap-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-info mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Performance management integration:</strong> Connect self-reflection to performance conversations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-info mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>German language support:</strong> Serve German-speaking employee population</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-info mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Enhanced analytics:</strong> Skills gap analysis, learning effectiveness metrics</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border-2 border-success/20 bg-white p-8 shadow-soft">
                  <h3 className="text-2xl font-bold text-neutral-950 mb-4">Q3-Q4: Advanced Capabilities</h3>
                  <ul className="space-y-3 text-neutral-700 font-medium">
                    <li className="flex items-start gap-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-success mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Additional languages:</strong> Spanish, French, Chinese, Japanese</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-success mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Career pathing:</strong> AI-powered career recommendations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-success mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Peer learning:</strong> Connect employees for knowledge sharing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-success mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Voice interface:</strong> Hands-free interaction for accessibility</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border-2 border-ai/20 bg-white p-8 shadow-soft">
                  <h3 className="text-2xl font-bold text-neutral-950 mb-4">2027: Strategic Platform</h3>
                  <ul className="space-y-3 text-neutral-700 font-medium">
                    <li className="flex items-start gap-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-ai mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Recruiting integration:</strong> Skills-based hiring recommendations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-ai mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Succession planning:</strong> Predictive analytics for talent pipelines</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-ai mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>External learning platforms:</strong> Expand beyond LinkedIn Learning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-ai mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Advanced organizational insights:</strong> Strategic workforce planning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Investment & ROI */}
            <section id="investment" className="mb-20 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-neutral-950 mb-8">Investment & Value Proposition</h2>

              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-2xl border-2 border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-8 shadow-soft">
                  <h3 className="text-2xl font-bold text-neutral-950 mb-6">Ongoing Operational Costs</h3>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-neutral-950 mb-3">Technology: €15,000-25,000/year at full scale</h4>
                    <ul className="space-y-2 text-neutral-700 font-medium">
                      <li className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2" />
                        <span>Microsoft Azure OpenAI usage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2" />
                        <span>Power Platform licenses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2" />
                        <span>No additional software required</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-neutral-950 mb-3">Operations: 0.5-1.0 FTE equivalent</h4>
                    <ul className="space-y-2 text-neutral-700 font-medium">
                      <li className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2" />
                        <span>Content updates and refinement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2" />
                        <span>User support and training</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2" />
                        <span>Continuous improvement</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative overflow-hidden rounded-2xl border-2 border-success/30 bg-gradient-to-br from-success-light/30 to-white p-6 shadow-soft">
                    <h3 className="text-lg font-bold text-neutral-950 mb-4">Direct Benefits</h3>
                    <ul className="space-y-2 text-sm text-neutral-700 font-medium">
                      <li className="flex items-start gap-2">
                        <svg className="flex-shrink-0 w-4 h-4 text-success mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Reduced external training costs (better targeting)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="flex-shrink-0 w-4 h-4 text-success mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Improved learning engagement and completion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="flex-shrink-0 w-4 h-4 text-success mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Better leadership development (reduced turnover)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="flex-shrink-0 w-4 h-4 text-success mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Faster time to competency for new roles</span>
                      </li>
                    </ul>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border-2 border-info/30 bg-gradient-to-br from-info-light/30 to-white p-6 shadow-soft">
                    <h3 className="text-lg font-bold text-neutral-950 mb-4">Strategic Benefits</h3>
                    <ul className="space-y-2 text-sm text-neutral-700 font-medium">
                      <li className="flex items-start gap-2">
                        <svg className="flex-shrink-0 w-4 h-4 text-info mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Accelerated future AI projects (6+ months time savings per project)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="flex-shrink-0 w-4 h-4 text-info mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Data-driven talent decisions (skills gap visibility)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="flex-shrink-0 w-4 h-4 text-info mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Competitive advantage in AI-powered HR</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="flex-shrink-0 w-4 h-4 text-info mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Foundation for performance management transformation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Success Metrics */}
            <section id="metrics" className="mb-20 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-neutral-950 mb-8">Success Metrics</h2>

              <div className="space-y-6">
                <div className="rounded-2xl border-2 border-info/20 bg-white p-8 shadow-soft">
                  <h3 className="text-2xl font-bold text-neutral-950 mb-4">Learning Agent</h3>
                  <ul className="space-y-3 text-neutral-700 font-medium">
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-info/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-info" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span><strong>Adoption:</strong> 70% of people leaders active within 6 months</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-info/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-info" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span><strong>Engagement:</strong> Average 2+ sessions per week, 10+ minutes per session</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-info/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-info" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span><strong>Learning completion:</strong> 30% increase in content completion year-over-year</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-info/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-info" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span><strong>Satisfaction:</strong> 4.0+ out of 5.0 user rating</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border-2 border-success/20 bg-white p-8 shadow-soft">
                  <h3 className="text-2xl font-bold text-neutral-950 mb-4">Self-Reflection Tool</h3>
                  <ul className="space-y-3 text-neutral-700 font-medium">
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-success/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span><strong>Completion rate:</strong> 85% of leaders complete annual self-reflection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-success/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span><strong>Development plans:</strong> 80% create actionable development plan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-success/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span><strong>Organizational insights:</strong> Identify top 10 skills gaps by function/geography</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-success/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span><strong>Performance integration:</strong> Track in 2026 performance cycle</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border-2 border-ai/20 bg-white p-8 shadow-soft">
                  <h3 className="text-2xl font-bold text-neutral-950 mb-4">Combined Impact</h3>
                  <ul className="space-y-3 text-neutral-700 font-medium">
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-ai/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-ai" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span><strong>Infrastructure reuse:</strong> 3+ additional AI projects leverage foundation by end of 2026</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-ai/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-ai" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span><strong>Cost efficiency:</strong> 40% lower than external solutions or consultancy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-ai/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-ai" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span><strong>Time to market:</strong> New HR AI initiatives launch 6+ months faster</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-ai/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-ai" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span><strong>Strategic insights:</strong> Skills-based workforce planning capabilities operational by Q4 2026</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Key Contacts */}
            <section id="contact" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-neutral-950 mb-8">Key Contacts</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl border-2 border-neutral-200 bg-white p-8 shadow-soft">
                  <h3 className="text-2xl font-bold text-neutral-950 mb-6 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-adidas-black flex items-center justify-center">
                      <span className="text-lg font-black text-white">A</span>
                    </div>
                    adidas
                  </h3>
                  <ul className="space-y-3 text-sm text-neutral-700 font-medium">
                    <li>Pedro Silva - VP Talent Organization (Self-Reflection sponsor)</li>
                    <li>Karina - Senior Leadership (Leadership Framework sponsor)</li>
                    <li>Zsofia Pior - Leadership Framework Product Owner (until Dec 12)</li>
                    <li>Lucas - L&D Technical Liaison (Learning Agent)</li>
                    <li>Divya Jhamb - Learning Initiatives India (Self-Reflection)</li>
                  </ul>
                </div>

                <div className="rounded-2xl border-2 border-neutral-200 bg-white p-8 shadow-soft">
                  <h3 className="text-2xl font-bold text-neutral-950 mb-6">Baresquare</h3>
                  <ul className="space-y-4 text-sm text-neutral-700 font-medium">
                    <li>
                      <div className="font-bold text-neutral-950">Georgios Grigoriadis, CEO</div>
                      <div>Strategic oversight</div>
                      <a href="mailto:georgios@baresquare.com" className="text-info hover:text-info-dark font-semibold">
                        georgios@baresquare.com
                      </a>
                    </li>
                    <li>
                      <div className="font-bold text-neutral-950">Lars Boeddener, COO</div>
                      <div>Program management</div>
                      <a href="mailto:lars@baresquare.com" className="text-info hover:text-info-dark font-semibold">
                        lars@baresquare.com
                      </a>
                    </li>
                    <li>
                      <div className="font-bold text-neutral-950">Nikos Vogiatzis</div>
                      <div>Technical Lead - Development and architecture</div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Footer Note */}
            <div className="border-t-2 border-neutral-200 pt-8 text-center text-sm text-neutral-500">
              <p className="font-semibold"><strong>Prepared by:</strong> Georgios Grigoriadis, Baresquare</p>
              <p className="mt-2"><strong>Date:</strong> November 21, 2025</p>
              <p className="mt-2"><strong>Next Update:</strong> December 3, 2025 (post face-to-face meeting)</p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
