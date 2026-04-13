// Header — Refined with animated nav underlines, glass backdrop, and dropdown menus
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_ITEMS, NAV_CTA } from '@/lib/constants'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { MobileNav } from './MobileNav'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)]/50 bg-[var(--background)]/70 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-futureworklab.png"
            alt="FutureWorkLab"
            width={160}
            height={28}
            className="h-7 w-auto dark:brightness-0 dark:invert"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="relative flex items-center gap-1 px-3 py-2 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--foreground)] after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-primary after:transition-all after:duration-200 hover:after:w-4/5"
                >
                  {item.label}
                  <svg className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </Link>
                <div className="invisible absolute left-0 top-full pt-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="min-w-[140px] rounded-lg border border-[var(--border)] bg-[var(--background)]/95 py-1 shadow-lg backdrop-blur-md">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-3 py-2 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--foreground)] after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-primary after:transition-all after:duration-200 hover:after:w-4/5"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href={NAV_CTA.href}
            className="rounded-lg bg-cta px-4 py-2 text-sm font-semibold text-[#09090B] shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_4px_16px_rgba(0,255,133,0.25)] active:scale-[0.98]"
          >
            {NAV_CTA.label}
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 text-[var(--foreground)]"
            aria-label="메뉴 열기"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
