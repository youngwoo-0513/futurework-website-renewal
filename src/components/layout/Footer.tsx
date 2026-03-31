// Design Ref: §5.3 — 회사 정보, 연락처, SNS, 개인정보처리방침
import Link from 'next/link'
import Image from 'next/image'
import { COMPANY_INFO, NAV_ITEMS, SOCIAL_LINKS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* 회사 정보 */}
          <div>
            <Link href="/">
              <Image
                src="/logo-futureworklab.png"
                alt="FutureWorkLab"
                width={140}
                height={24}
                className="h-6 w-auto dark:brightness-0 dark:invert"
              />
            </Link>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">
              제조업 AI 도입의 새로운 기준.
              <br />
              AI가 직접 실행하는 제조 운영 레이어.
            </p>
          </div>

          {/* 메뉴 */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--foreground)]">메뉴</h3>
            <ul className="mt-3 space-y-2">
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
            <h3 className="text-sm font-semibold text-[var(--foreground)]">연락처</h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--text-secondary)]">
              <li>{COMPANY_INFO.address}</li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="transition-colors hover:text-[var(--foreground)]"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* SNS */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--foreground)]">소셜</h3>
            <ul className="mt-3 space-y-2">
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

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-8 sm:flex-row">
          <p className="text-xs text-[var(--text-secondary)]">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <Link
            href="/privacy"
            className="text-xs text-[var(--text-secondary)] transition-colors hover:text-[var(--foreground)]"
          >
            개인정보처리방침
          </Link>
        </div>
      </div>
    </footer>
  )
}
