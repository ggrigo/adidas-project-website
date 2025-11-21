import Link from 'next/link';
import StatusCard from '@/components/StatusCard';
import ProgressBar from '@/components/ProgressBar';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Premium Typography */}
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-neutral-100 py-24 md:py-32">
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-ai/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-info/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 mb-8 shadow-lg">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Enterprise AI Deployment</span>
            </div>

            {/* Main Headline - Oversized */}
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-neutral-950 leading-tight mb-6">
              Transforming Learning &<br />
              Leadership Development
              <span className="block mt-2 bg-gradient-to-r from-adidas-black via-neutral-700 to-neutral-900 bg-clip-text text-transparent">
                with AI
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-neutral-600 font-medium">
              adidas' first enterprise HR AI deployment - Establishing the foundation for future innovation
            </p>
          </div>

          {/* Key Stats - Enhanced */}
          <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatusCard
              title="Employees Impacted"
              value="60,000"
              subtitle="Personalized learning recommendations"
              variant="primary"
            />
            <StatusCard
              title="Leaders Supported"
              value="10,000"
              subtitle="AI-powered self-reflection"
              variant="success"
            />
            <StatusCard
              title="Technology Stack"
              value="100%"
              subtitle="Microsoft - Zero external licensing"
              variant="primary"
            />
            <StatusCard
              title="Time Savings"
              value="6+ months"
              subtitle="For future AI projects"
              variant="success"
            />
          </div>
        </div>
      </section>

      {/* Status Dashboard - Refined */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-black tracking-tight text-neutral-950 mb-3">Current Status</h2>
            <p className="text-lg text-neutral-600 font-medium">Real-time project progress and milestones</p>
            <p className="text-sm text-neutral-500 font-medium mt-2">Last updated: November 21, 2025 at 4:30 PM CET</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Learning Agent Card */}
            <div className="group relative overflow-hidden rounded-2xl border-2 border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-8 shadow-soft hover:shadow-hard transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-success/5 rounded-full blur-2xl" />

              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-neutral-950">Learning Agent</h3>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-warning/10">
                    <svg className="w-6 h-6 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="status-badge status-badge-yellow">
                    <span className="status-dot status-dot-yellow"></span>
                    Awaiting Approval
                  </span>
                </div>

                <ProgressBar
                  label="Overall Progress"
                  percentage={95}
                  status="Technical development complete - Awaiting deployment approval"
                  variant="green"
                />

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3 text-sm">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-success" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-semibold text-neutral-700">Core AI engine complete</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-success" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-semibold text-neutral-700">SharePoint integration ready</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-warning/20 flex items-center justify-center">
                      <span className="text-xs">⏳</span>
                    </div>
                    <span className="font-semibold text-neutral-700">Awaiting LeanIX approval</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Self-Reflection Tool Card */}
            <div className="group relative overflow-hidden rounded-2xl border-2 border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-8 shadow-soft hover:shadow-hard transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-info/5 rounded-full blur-2xl" />

              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-neutral-950">Self-Reflection Tool</h3>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success/10">
                    <svg className="w-6 h-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="status-badge status-badge-green">
                    <span className="status-dot status-dot-green"></span>
                    On Track
                  </span>
                </div>

                <ProgressBar
                  label="Overall Progress"
                  percentage={90}
                  status="Ready for mini pilot - December 9-13, 2025"
                  variant="blue"
                />

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3 text-sm">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-success" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-semibold text-neutral-700">23-question framework complete</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-success" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-semibold text-neutral-700">AI recommendation engine ready</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-info/20 flex items-center justify-center">
                      <span className="text-xs">⏳</span>
                    </div>
                    <span className="font-semibold text-neutral-700">Mini pilot Dec 9-13</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Building - Enhanced */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tight text-neutral-950 mb-3">What We're Building</h2>
            <p className="text-lg text-neutral-600 font-medium">Two integrated AI solutions transforming talent development</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Learning Agent */}
            <Link href="/executive-briefing#learning-agent" className="group">
              <div className="relative overflow-hidden rounded-2xl bg-white border-2 border-neutral-200 p-8 shadow-soft hover:shadow-hard hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-ai/5 rounded-full blur-2xl" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-ai to-ai-dark shadow-md mb-6">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-neutral-950 mb-4">Learning Agent</h3>
                  <p className="text-neutral-600 font-medium leading-relaxed mb-6">
                    AI-powered personalized learning recommendations that understand your role, skills, and career goals.
                    Reduces time to find relevant learning from 30+ minutes to under 5 minutes.
                  </p>

                  <div className="flex items-center gap-2 text-adidas-black font-bold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Self-Reflection Tool */}
            <Link href="/executive-briefing#self-reflection" className="group">
              <div className="relative overflow-hidden rounded-2xl bg-white border-2 border-neutral-200 p-8 shadow-soft hover:shadow-hard hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-success/5 rounded-full blur-2xl" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-success to-success-dark shadow-md mb-6">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-neutral-950 mb-4">Leadership Self-Reflection Tool</h3>
                  <p className="text-neutral-600 font-medium leading-relaxed mb-6">
                    Competency-based self-assessment against nine leadership competencies with AI-powered development
                    plans and personalized micro-actions for continuous growth.
                  </p>

                  <div className="flex items-center gap-2 text-adidas-black font-bold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition - Refined */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tight text-neutral-950 mb-3">Value Delivered</h2>
            <p className="text-lg text-neutral-600 font-medium">Impact across all levels of the organization</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-info to-info-dark shadow-lg mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-950 mb-3">For Employees</h3>
              <p className="text-neutral-600 font-medium leading-relaxed">
                Faster, personalized learning experiences tailored to individual roles and career aspirations
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-success to-success-dark shadow-lg mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-950 mb-3">For Leaders</h3>
              <p className="text-neutral-600 font-medium leading-relaxed">
                Structured development support with actionable plans and progress tracking
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-ai to-ai-dark shadow-lg mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-950 mb-3">For Organization</h3>
              <p className="text-neutral-600 font-medium leading-relaxed">
                Strategic insights, skills gap visibility, and scalable AI infrastructure for future innovation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Milestone - Premium CTA */}
      <section className="py-20 bg-gradient-to-br from-neutral-900 to-adidas-black text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider">Upcoming Milestone</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">What's Happening Now</h2>
            <p className="text-xl font-medium text-neutral-300 mb-10">
              December 2-3, 2025 - Face-to-face meeting in Herzogenaurach
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/executive-briefing"
                className="rounded-xl bg-white px-8 py-4 text-base font-bold text-neutral-950 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                View Executive Briefing
              </Link>
              <Link
                href="/weekly-progress"
                className="rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-bold text-white hover:bg-white/20 transition-all"
              >
                Latest Updates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links - Card Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-black tracking-tight text-neutral-950 mb-3">Quick Links</h2>
            <p className="text-lg text-neutral-600 font-medium">Navigate to key project resources</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/executive-briefing"
              className="group relative overflow-hidden rounded-2xl border-2 border-neutral-200 bg-white p-6 shadow-soft hover:shadow-hard hover:-translate-y-1 transition-all"
            >
              <div className="mb-4">
                <svg className="w-8 h-8 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-neutral-950 mb-2">Executive Briefing</h3>
              <p className="text-sm text-neutral-600 font-medium">Comprehensive overview for decision-makers</p>
            </Link>

            <Link
              href="/weekly-progress"
              className="group relative overflow-hidden rounded-2xl border-2 border-neutral-200 bg-white p-6 shadow-soft hover:shadow-hard hover:-translate-y-1 transition-all"
            >
              <div className="mb-4">
                <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-neutral-950 mb-2">Weekly Progress</h3>
              <p className="text-sm text-neutral-600 font-medium">Real-time project status and updates</p>
            </Link>

            <Link
              href="/documents"
              className="group relative overflow-hidden rounded-2xl border-2 border-neutral-200 bg-white p-6 shadow-soft hover:shadow-hard hover:-translate-y-1 transition-all"
            >
              <div className="mb-4">
                <svg className="w-8 h-8 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-neutral-950 mb-2">Document Repository</h3>
              <p className="text-sm text-neutral-600 font-medium">All project artifacts and materials</p>
            </Link>

            <Link
              href="/executive-briefing#contact"
              className="group relative overflow-hidden rounded-2xl border-2 border-neutral-200 bg-white p-6 shadow-soft hover:shadow-hard hover:-translate-y-1 transition-all"
            >
              <div className="mb-4">
                <svg className="w-8 h-8 text-ai" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-neutral-950 mb-2">Contact Information</h3>
              <p className="text-sm text-neutral-600 font-medium">Get in touch with the team</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
