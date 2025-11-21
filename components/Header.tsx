'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md shadow-soft">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-adidas-black to-neutral-800 shadow-medium group-hover:shadow-hard transition-all group-hover:scale-105">
            <span className="text-xl font-black text-white">A</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-neutral-950 tracking-tight group-hover:text-adidas-black transition-colors">
              adidas AI L&D
            </h1>
            <p className="text-xs text-neutral-500 font-medium">Project Hub</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          <li>
            <Link
              href="/"
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                isActive('/')
                  ? 'text-adidas-black bg-neutral-100'
                  : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50'
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/executive-briefing"
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                isActive('/executive-briefing')
                  ? 'text-adidas-black bg-neutral-100'
                  : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50'
              }`}
            >
              Executive Briefing
            </Link>
          </li>
          <li>
            <Link
              href="/weekly-progress"
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                isActive('/weekly-progress')
                  ? 'text-adidas-black bg-neutral-100'
                  : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50'
              }`}
            >
              Weekly Progress
            </Link>
          </li>
          <li>
            <Link
              href="/timeline"
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                isActive('/timeline')
                  ? 'text-adidas-black bg-neutral-100'
                  : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50'
              }`}
            >
              Timeline
            </Link>
          </li>
          <li>
            <Link
              href="/documents"
              className="ml-2 px-5 py-2 text-sm font-semibold text-white rounded-lg bg-adidas-black hover:bg-neutral-800 shadow-medium hover:shadow-hard hover:scale-105 transition-all"
            >
              Documents
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button (placeholder) */}
        <button className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
