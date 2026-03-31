// Design Ref: §10.3 — JSON-LD 구조화 데이터 출력
import { SITE_CONFIG, COMPANY_INFO, FAQ_ITEMS } from '@/lib/constants'

type SchemaType = 'organization' | 'faq' | 'software' | 'local-business' | 'breadcrumb'

interface SchemaMarkupProps {
  type: SchemaType
  breadcrumbs?: { name: string; url: string }[]
}

function getSchema(type: SchemaType, breadcrumbs?: { name: string; url: string }[]) {
  switch (type) {
    case 'organization':
      return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: COMPANY_INFO.nameEn,
        legalName: COMPANY_INFO.name,
        url: SITE_CONFIG.url,
        logo: `${SITE_CONFIG.url}/images/logo.png`,
        contactPoint: {
          '@type': 'ContactPoint',
          email: COMPANY_INFO.email,
          contactType: 'sales',
          availableLanguage: 'Korean',
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: '강남구',
          addressRegion: '서울특별시',
          addressCountry: 'KR',
        },
      }

    case 'faq':
      return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQ_ITEMS.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }

    case 'software':
      return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'AX Flow',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'KRW',
          description: '무료 PoC 제공',
        },
        creator: {
          '@type': 'Organization',
          name: COMPANY_INFO.nameEn,
        },
      }

    case 'local-business':
      return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: COMPANY_INFO.name,
        address: {
          '@type': 'PostalAddress',
          addressLocality: '강남구',
          addressRegion: '서울특별시',
          addressCountry: 'KR',
        },
        email: COMPANY_INFO.email,
        url: SITE_CONFIG.url,
      }

    case 'breadcrumb':
      return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: (breadcrumbs ?? []).map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.name,
          item: `${SITE_CONFIG.url}${item.url}`,
        })),
      }
  }
}

export function SchemaMarkup({ type, breadcrumbs }: SchemaMarkupProps) {
  const schema = getSchema(type, breadcrumbs)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
