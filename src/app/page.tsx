// 홈페이지 — 리뉴얼 v2 (유저 저니 최적화)
import { HeroSection } from '@/components/sections/HeroSection'
import { TractionSection } from '@/components/sections/TractionSection'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { SolutionSection } from '@/components/sections/SolutionSection'
import { CoreFeatureSection } from '@/components/sections/CoreFeatureSection'
import { ComparisonSection } from '@/components/sections/ComparisonSection'
import { IntegrationHubSection } from '@/components/sections/IntegrationHubSection'
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
      <TractionSection />
      <ProblemSection />
      <CoreFeatureSection />
      <SolutionSection />
      <ComparisonSection />
      <IntegrationHubSection />
      <SocialProofSection />
      <FaqSection />
      <FinalCtaSection />

      <FloatingCTA />
      <ExitPopup />
    </>
  )
}
