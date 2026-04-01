// Footer — Editorial grid with refined typography
import Link from 'next/link'
import Image from 'next/image'
import { COMPANY_INFO, NAV_ITEMS, SOCIAL_LINKS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* 회사 정보 */}
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src="/logo-futureworklab.png"
                alt="FutureWorkLab"
                width={140}
                height={24}
                className="h-6 w-auto dark:brightness-0 dark:invert"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
              제조업 AI 도입의 새로운 기준.
              <br />
              AI가 직접 실행하는 제조 운영 레이어.
            </p>
          </div>

          {/* 메뉴 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-tertiary)]">
              메뉴
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--foreground)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-tertiary)]">
              연락처
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-[var(--text-secondary)]">
              <li>{COMPANY_INFO.address}</li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="transition-colors hover:text-primary"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* SNS */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-tertiary)]">
              소셜
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--foreground)]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-8 sm:flex-row">
          <p className="text-xs text-[var(--text-tertiary)]">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <Link
            href="/privacy"
            className="text-xs text-[var(--text-tertiary)] transition-colors hover:text-[var(--foreground)]"
          >
            개인정보처리방침
          </Link>
        </div>
      </div>
    </footer>
  )
}
