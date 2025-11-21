import Link from 'next/link';
import StatusCard from '@/components/StatusCard';
import ProgressBar from '@/components/ProgressBar';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transforming Learning & Leadership Development with AI
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              adidas' first enterprise HR AI deployment - Establishing the foundation for future innovation
            </p>
          </div>

          {/* Key Stats */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Status Dashboard */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Current Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Learning Agent</h3>
              <ProgressBar
                label="Overall Progress"
                percentage={95}
                status="Technical development complete - Awaiting deployment approval"
                variant="green"
              />
              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p className="flex items-center">
                  <span className="mr-2">✓</span> Core AI engine complete
                </p>
                <p className="flex items-center">
                  <span className="mr-2">✓</span> SharePoint integration ready
                </p>
                <p className="flex items-center">
                  <span className="mr-2">⏳</span> Awaiting LeanIX approval
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Self-Reflection Tool</h3>
              <ProgressBar
                label="Overall Progress"
                percentage={90}
                status="Ready for mini pilot - December 9-13, 2025"
                variant="blue"
              />
              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p className="flex items-center">
                  <span className="mr-2">✓</span> 23-question framework complete
                </p>
                <p className="flex items-center">
                  <span className="mr-2">✓</span> AI recommendation engine ready
                </p>
                <p className="flex items-center">
                  <span className="mr-2">⏳</span> Mini pilot Dec 9-13
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Building */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What We're Building</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Learning Agent</h3>
              <p className="text-gray-600 mb-4">
                AI-powered personalized learning recommendations that understand your role, skills, and career goals.
                Reduces time to find relevant learning from 30+ minutes to under 5 minutes.
              </p>
              <Link
                href="/executive-briefing#learning-agent"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Leadership Self-Reflection Tool</h3>
              <p className="text-gray-600 mb-4">
                Competency-based self-assessment against nine leadership competencies with AI-powered development
                plans and personalized micro-actions for continuous growth.
              </p>
              <Link
                href="/executive-briefing#self-reflection"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Value Delivered</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">For Employees</h3>
              <p className="text-gray-600">
                Faster, personalized learning experiences tailored to individual roles and career aspirations
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">For Leaders</h3>
              <p className="text-gray-600">
                Structured development support with actionable plans and progress tracking
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">For Organization</h3>
              <p className="text-gray-600">
                Strategic insights, skills gap visibility, and scalable AI infrastructure for future innovation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Milestone */}
      <section className="py-16 bg-primary-50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What's Happening Now</h2>
            <p className="text-lg text-gray-700 mb-8">
              December 2-3, 2025 - Face-to-face meeting in Herzogenaurach
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/executive-briefing"
                className="rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
              >
                View Executive Briefing
              </Link>
              <Link
                href="/weekly-progress"
                className="rounded-lg bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm border border-primary-600 hover:bg-primary-50 transition-colors"
              >
                Latest Updates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Quick Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/executive-briefing"
              className="rounded-lg border-2 border-gray-200 p-6 hover:border-primary-500 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Executive Briefing</h3>
              <p className="text-sm text-gray-600">Comprehensive overview for decision-makers</p>
            </Link>
            <Link
              href="/weekly-progress"
              className="rounded-lg border-2 border-gray-200 p-6 hover:border-primary-500 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Weekly Progress</h3>
              <p className="text-sm text-gray-600">Real-time project status and updates</p>
            </Link>
            <Link
              href="/documents"
              className="rounded-lg border-2 border-gray-200 p-6 hover:border-primary-500 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Document Repository</h3>
              <p className="text-sm text-gray-600">All project artifacts and materials</p>
            </Link>
            <Link
              href="/executive-briefing#contact"
              className="rounded-lg border-2 border-gray-200 p-6 hover:border-primary-500 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Contact Information</h3>
              <p className="text-sm text-gray-600">Get in touch with the team</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
