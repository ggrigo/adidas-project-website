import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-primary-700">
            adidas AI L&D Initiative
          </h1>
        </div>

        <ul className="hidden md:flex items-center gap-6">
          <li>
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/executive-briefing"
              className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              Executive Briefing
            </Link>
          </li>
          <li>
            <Link
              href="/weekly-progress"
              className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              Weekly Progress
            </Link>
          </li>
          <li>
            <Link
              href="/documents"
              className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              Documents
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
