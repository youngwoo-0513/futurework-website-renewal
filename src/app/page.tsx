// Design Ref: §5.2 — Homepage 섹션 구성 (CRO 최적화 플로우)
// Plan SC: 페이지 이탈률 60% 이하 — Progressive Disclosure 4단계
import { HeroSection } from '@/components/sections/HeroSection'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { SolutionSection } from '@/components/sections/SolutionSection'
import { SocialProofSection } from '@/components/sections/SocialProofSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { FinalCtaSection } from '@/components/sections/FinalCtaSection'
import { FloatingCTA } from '@/components/ui/FloatingCTA'
import { ExitPopup } from '@/components/ui/ExitPopup'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'

export default function HomePage() {
  return (
    <>
      <SchemaMarkup type="organization" />
      <SchemaMarkup type="faq" />

      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <SocialProofSection />
      <FaqSection />
      <FinalCtaSection />

      <FloatingCTA />
      <ExitPopup />
    </>
  )
}
