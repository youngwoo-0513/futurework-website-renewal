// 블로그 상세 페이지
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { BLOG_POSTS } from '@/lib/constants'

// 블로그 본문 콘텐츠 (MVP — 추후 CMS 연동)
const BLOG_CONTENT: Record<string, string[]> = {
  'smart-factory-subsidy-guide-2026': [
    '2026년, 제조업 AI 도입을 위한 정부 지원이 역대 최대 규모로 집행됩니다.',
    '2026 산업AI 예산은 전년대비 2배인 1조 1,000억 원. 중기부 AI 예산만 7,992억 원이며, 이 중 제조현장 AI 대전환에 2,437억 원이 포함되어 있습니다.',
    '기업당 지원 규모를 보면, 자율형공장 구축 최대 6억 원(50% 지원), 정부형 스마트공장 최대 2억 원(50% 지원)입니다. 특히 AI 기반 상생형 구축비의 경우 기존 30%에서 50%로 상향 지원됩니다.',
    '스마트 제조혁신 지원사업은 450개 이상의 과제가 있으며, 자율형공장 30개, 제조AI 특화 400개, 대중소 상생형 20개 이상으로 구성됩니다.',
    '규제도 AI 도입을 밀고 있습니다. 2026년 1월 한국 AI 기본법이 시행되었고, 2026년 8월에는 EU AI Act가 전면 시행됩니다. AI 도입 시 설명·감사 의무가 생겨, 감사 대응이 가능한 AI 플랫폼 선택이 중요해졌습니다.',
    'AX Flow는 스마트공장 지원사업과 연계하여 2주 PoC로 성과 데이터를 자동 생성하고, 지원사업 성과증빙에 필요한 KPI를 실시간으로 추적합니다.',
  ],
  'manufacturing-ai-failure-76-percent': [
    '제조 AI 프로젝트의 76%가 본사업 전환에 실패합니다. 왜 그럴까요?',
    '첫 번째 원인은 "자산이 남지 않는 구조"입니다. 3~6개월 PoC 후, 모델이 바뀌면 재구축해야 합니다. 쌓인 자산 없이 검증만 반복하는 겁니다.',
    '두 번째 원인은 "운영에 올라가지 않는 AI"입니다. 분석 결과만 보여주고, 실제 업무 실행은 사람이 합니다. 결국 6개월마다 바뀌는 AI 기술로 의사결정이 중단됩니다.',
    '본사업으로 전환한 24%도 평균 13.7개월 후 프로젝트를 폐기합니다.',
    '해결책은 "더 좋은 AI"가 아니라 "운영에 올라가는 구조"입니다. AX Flow는 PoC 기간에 쌓은 온톨로지(데이터 구조)가 그대로 자산으로 남아, 모델이 바뀌어도 데이터 구조는 유지됩니다.',
    '한번 쌓인 데이터 구조와 워크플로우는 모델이 바뀌어도 그대로 유지되어 연속성 있는 사업이 가능합니다.',
  ],
  'ontology-data-integration': [
    '제조 현장의 데이터는 MES, ERP, QMS, WMS뿐만 아니라 카톡, 수기 문서, 엑셀, 사진, 숙련자의 머릿속에 흩어져 있습니다.',
    '필요한 정보를 찾으려면 4~5개 시스템을 열어 수동으로 대조해야 합니다. 불량 1건당 원인분석에 4~6시간이 소요되는 이유입니다.',
    '온톨로지 기반 데이터 통합은 키워드 검색이 아닌 "관계 추론"을 가능하게 합니다. 설비-공정-품질-원자재-규제 관계를 이해하는 구조화를 통해, 흩어진 데이터를 의미 기반으로 연결합니다.',
    'AX Flow의 구조는 4개 레이어로 구성됩니다. Connect(연결) → Structure(구조) → Execution(실행) → Govern(통제). Vector DB, Graph DB, Graph RAG, Ontology를 결합한 Structure 레이어가 핵심입니다.',
    '이 구조의 가장 큰 장점은 연속성입니다. 한번 구축한 온톨로지는 모델이 바뀌어도 유지됩니다. PoC에서 쌓은 데이터 구조가 본사업에 그대로 활용됩니다.',
  ],
  'batch-record-automation-gmp': [
    '제약/건기식 GMP 환경에서 배치기록은 핵심 문서입니다. 그러나 아직도 대부분의 현장에서는 사람이 직접 작성합니다.',
    '월간 배치기록 수기작성에 수백 시간이 소요되며, 규제 변경 시 영향 SOP 파악에 수일이 걸립니다.',
    'AI를 도입하면 더 빨라질까요? 배치기록을 사람이 직접 쓰는 구조에서는 AI 도입이 오히려 감사 대응에 불안을 가중합니다.',
    'AX Flow의 Agent 기능은 배치기록을 자동 생성하되, HITL(Human-In-The-Loop) 구조로 검토·서명 프로세스를 내장합니다. AX Guard Trust Layer가 판단 근거, 감사 로그, 승인 이력을 자동으로 기록합니다.',
    '결과: 배치기록 자동화 4시간→20분 이하, SOP 영향 분석 당일 식별 및 초안 제안. GMP·cGMP 감사에 대응 가능한 AI를 구현합니다.',
  ],
  'mes-partner-ai-integration': [
    'MES/ERP/WMS 솔루션사의 고객들은 AI를 원합니다. 하지만 LLM·RAG·에이전트를 직접 만들기엔 시간(12~18개월)과 비용, 유지보수 공수가 부담됩니다.',
    'AX Flow는 기존 MES/ERP/WMS 위에 번들 및 OEM으로 탑재할 수 있습니다. 2주 만에 고객에게 AI 기능을 제공할 수 있습니다.',
    '파트너사에게 제공되는 가치: 고객에게 즉시 제공 가능한 AI 인터페이스, 고객 지식 자산 구조화로 자사 솔루션의 부가가치 생성, 에이전트 마켓플레이스에 등록·판매 가능.',
    '또한 고객의 규제 대응(GMP, HACCP, AI기본법)을 자사 제품 차별점으로 활용할 수 있습니다.',
    '컨소시엄형 지원사업 공동 참여도 가능하여, 파트너사와 FutureWorkLab이 함께 정부 과제를 수행할 수 있습니다.',
  ],
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: `${post.title} | FutureWorkLab`,
    description: post.excerpt,
  }
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) notFound()

  const content = BLOG_CONTENT[slug] || ['콘텐츠 준비 중입니다.']
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      <SchemaMarkup
        type="breadcrumb"
        breadcrumbs={[
          { name: '홈', url: '/' },
          { name: '리소스', url: '/resources' },
          { name: post.title, url: `/resources/${slug}` },
        ]}
      />

      <article className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* 헤더 */}
          <div className="text-center">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {post.category}
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center justify-center gap-4 text-sm text-[var(--text-secondary)]">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime} 읽기</span>
            </div>
          </div>

          {/* 대표 이미지 영역 */}
          <div className="mt-10 aspect-[2/1] rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-cta/10 flex items-center justify-center">
            <p className="text-sm text-[var(--text-secondary)]">대표 이미지 영역</p>
          </div>

          {/* 본문 */}
          <div className="mt-10 space-y-6">
            {content.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-[var(--text-secondary)]">
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA 버튼 */}
          <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 sm:flex-row sm:justify-center sm:gap-4">
            <Button href="/product/ax-flow" size="lg">
              AX Flow 알아보기
            </Button>
            <Button href="/demo" variant="secondary" size="lg">
              데모 신청하기
            </Button>
          </div>
        </div>

        {/* 연결된 글 리스트 */}
        <div className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[var(--foreground)]">다른 글 보기</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {otherPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/resources/${p.slug}`}
                className="group rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-shadow hover:shadow-md"
              >
                <span className="inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  {p.category}
                </span>
                <h3 className="mt-2 text-sm font-bold text-[var(--foreground)] group-hover:text-primary line-clamp-2 transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs text-[var(--text-secondary)] line-clamp-2">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  )
}
