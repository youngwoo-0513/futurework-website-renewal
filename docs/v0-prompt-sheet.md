# v0 Prompt Sheet — FutureWorkLab Website Redesign

> 각 섹션별로 [브랜드 컨텍스트]를 앞에 붙이고, 해당 섹션의 프롬프트를 v0에 입력하세요.
> v0 결과물을 Claude Code에 가져올 때: "이 v0 코드를 {파일경로}에 적용해줘" 라고 말하면 됩니다.

---

## 🎨 브랜드 컨텍스트 (모든 프롬프트 앞에 붙이기)

```
[Brand Context]
Brand: AX Flow by FutureWorkLab — Manufacturing AI Agent Platform
Primary Color: Neon Green #00FF85 (CTA buttons, badges), #00B85E (text accent, links)
Background: Dark mode default. Surface #18181B, Background #09090B, Border #27272A
Text: #FAFAFA (primary), #A1A1AA (secondary)
Font: Outfit (headings, bold, latin), Pretendard (body, Korean)
Style: Clean, minimal, dark SaaS. Zinc neutral scale. No heavy gradients, no glassmorphism. Subtle motion ok.
Tech: React + Tailwind CSS. Use Tailwind classes only. Korean text.
Imagery: Use dark gradient placeholders for product screenshots (no real images yet).
```

---

## 📄 PAGE 1: HOMEPAGE (/)

총 10개 섹션. 아래 순서대로 진행.

---

### 1-1. HeroSection

**파일:** `src/components/sections/HeroSection.tsx`

```
[Brand Context 붙이기]

Hero section for a manufacturing AI SaaS product.

Badge (top, animated pulse): "2026 스마트공장 지원사업 — AI 도입비 50% 지원"

Headline (large, bold):
"불량 분석 6시간, 배치기록 수백 시간
아직 사람이 다 하고 계십니까?"

Subheadline:
"AX Flow는 '대답하는 AI'가 아니라, 공장 안의 일을 실제로 끝내는 온톨로지 AI입니다.
스마트공장 지원사업으로 도입 비용의 최대 50%를 절감하세요."

Stats row (3 items, large numbers):
- 95% | 스케줄링 시간 단축
- 90% | 불량 분석 시간 단축
- 50% | 정부 지원사업 비용 절감

CTA Buttons:
- Primary (neon green bg, dark text): "AX Flow 알아보기"
- Secondary (outline): "도입비 50% 지원받기"

Below CTAs: Trust signal text "신뢰하는 기업들이 선택했습니다" + logo bar placeholder (6 gray logos)

Layout: Centered text, stats row below headline, CTAs centered, logo bar at bottom.
Background: Subtle radial gradient from neon green 5% opacity at top.
```

---

### 1-2. TractionSection

**파일:** `src/components/sections/TractionSection.tsx`

```
[Brand Context 붙이기]

Traction / metrics section. 4-column grid of key stats with icons.

Stats:
- 🏭 14 | PoC 수행 기업
- 📈 89% | 평균 생산성 향상
- 💰 3억+ | 고객 절감 효과
- ⚡ 2주 | PoC 완료 기간

Layout: Horizontal 4-column on desktop, 2x2 grid on mobile.
Style: Large numbers (text-4xl font-bold), label below in secondary text.
Background: Surface color (#18181B), subtle border top/bottom.
Animate numbers counting up on scroll into view.
```

---

### 1-3. ProblemSection

**파일:** `src/components/sections/ProblemSection.tsx`

```
[Brand Context 붙이기]

Problem statement section for manufacturing AI product. Show pain points.

Headline: "제조 현장에서 반복되는 문제"
Subheadline: "핵심 인력이 데이터 핸들링에 묶여 있고, AI를 도입해도 PoC에서 끝납니다."

4 pain point cards in 2x2 grid:

Card 1 - ⏱️ "불량 원인 분석에 4~6시간"
"MES 로그인, ERP 교차확인, 과거사례 수동검색, 보고서 초안… 숙련자가 반나절을 쏟습니다."

Card 2 - 📝 "배치기록 수기 작성에 수백 시간"
"월간 배치기록을 사람이 직접 씁니다. 제약/GMP 환경에선 규제 변경 시 영향 SOP까지 수일 소요."

Card 3 - 🔴 "제조 AI 프로젝트 76%가 PoC에서 끝남"
"3~6개월 PoC 후 모델이 바뀌면 재구축. 쌓인 자산 없이 검증만 반복."

Card 4 - 👴 "숙련자 퇴직 = 조직 지식 단절"
"조직 지식의 90%는 암묵지. 제조업 평균연령 44세, 은퇴 러시가 시작되면 복구 불가능."

CTA: "AX Flow로 해결하는 방법 보기 →" (secondary outline button)

Card style: Dark surface bg, subtle border, icon top-left, red/warning accent for the pain numbers.
```

---

### 1-4. CoreFeatureSection

**파일:** `src/components/sections/CoreFeatureSection.tsx`

```
[Brand Context 붙이기]

Core features section. 4 major product capabilities, each with metrics and industry use cases.

Section title: "같은 사람, 같은 현장. 바뀌는 건 일하는 방식뿐."
Subtitle: "AX Flow 4대 핵심 기능 — Chatting · Library · Agent · Governance"

4 feature cards in 2-column grid (stacked on mobile):

Feature 1 - 💬 Chatting | 현장 질의응답
Metric badge: "95% 단축" (neon green)
Headline: "긴급 오더 들어왔을 때, 자재·라인·설비 현황을 한 번에 파악합니다"
Description: "음성이든 텍스트든, 질문하면 AI가 공정·설비·원자재 데이터를 자동 연결해 바로 답합니다."
Use cases (small tags):
- 제약/GMP: 음성 질의
- 포장재/부품: 불량 사진→즉시 분석
- 식품/HACCP: CCP 모니터링 음성 알림

Feature 2 - 📚 Library | 지식 구조화
Metric badge: "90% 단축"
Headline: "과거 불량 사례, SOP, 배치기록을 5분 안에 찾습니다"
Description: "키워드가 아닌 관계 기반 검색. Graph-RAG 기반 온톨로지로 연결합니다."
Use cases:
- 제약/GMP: SOP·배치기록 양식 관리
- 포장재/부품: 과거 불량 사례 관계 탐색
- 식품/HACCP: HACCP 문서·추적성 구조화

Feature 3 - 🤖 Agent | 업무 자동화
Metric badge: "80% 단축"
Headline: "배치기록 자동 생성, 불량 보고서 작성까지 AI가 처리합니다"
Description: "노코드 빌더로 현장 담당자도 직접 워크플로우를 만들 수 있습니다."
Use cases:
- 제약/GMP: 배치기록·CAPA 자동 생성
- 포장재/부품: 불량 분석→보고서 워크플로우
- 식품/HACCP: 추적성 문서 자동 생성

Feature 4 - 🛡️ Governance | 감사·규제 대응
Metric badge: "규제 대응 내장"
Headline: "AI가 한 모든 일에 근거와 이력이 남습니다"
Description: "GMP·HACCP·ISO·AI기본법·EU AI Act 규제 대응 내장. 킬스위치까지."
Use cases:
- 제약/GMP: GMP·cGMP 규제 대응
- 포장재/부품: 고객사 대응 보고서 이력
- 식품/HACCP: HACCP·AI기본법 대응

CTA: "데모 체험해보기 →" (primary)
Sub-CTA text: "15분이면 귀사에 가장 적합한 워크플로우 1개를 제안드립니다."

Each card: Dark surface, neon green metric badge top-right, use case tags at bottom in small pills.
```

---

### 1-5. SolutionSection

**파일:** `src/components/sections/SolutionSection.tsx`

```
[Brand Context 붙이기]

Before/After solution comparison section. Show transformation with AX Flow.

Headline: "AX Flow가 해결합니다"
Subheadline: "기능 추가가 아닌, 운영 방식의 재설계"

4-row comparison table:

| 문제 | AX Flow 솔루션 | Before | After |
|------|--------------|--------|-------|
| 긴급 오더 대응 | AI가 자재·라인 현황 자동 연결 | 부서별 확인 2시간+ | 15분 안에 판단·공유 |
| 불량 원인 분석 | 공정·설비·원자재 이력 동시 연결 | 분석~보고서 6시간 | 20분 한 흐름 완료 |
| 배치기록 작성 | 자동 생성 + 검토·서명 | 수기 작성 3~4시간 | 20분 자동 생성 |
| 성과증빙 | 자동 KPI 리포트 + 감사 로그 | 수작업 증빙 2주+ | 실시간 자동 리포트 |

Style: Table with "Before" column in red/muted, "After" column in neon green accent.
Desktop: Full table. Mobile: Stacked cards with before→after arrows.
CTA: "AX Flow 기능 자세히 보기 →" (primary button)
```

---

### 1-6. ComparisonSection

**파일:** `src/components/sections/ComparisonSection.tsx`

```
[Brand Context 붙이기]

Product comparison section. AX Flow vs conventional manufacturing AI.

Headline: "기존 제조 AI 도입과 AX Flow는 다릅니다"
Subheadline: "'AI를 빨리 써보는 것'이 아니라 'AI가 빨리 운영에 올라가고 확장되게 만드는 구조'를 제공합니다."

6-row comparison:

| 비교 항목 | 기존 제조 AI | AX Flow |
|---------|------------|---------|
| 도입속도 | ✗ PoC 3~6개월 | ✓ PoC 2주 |
| 모델변경 | ✗ 재구축 반복 | ✓ 데이터 구조 유지, 모델만 교체 |
| PoC 이후 | ✗ 소모성 검증으로 끝남 | ✓ 온톨로지 자산 누적 |
| 감사대응 | ✗ 설명불가 | ✓ 판단근거+감사로그+승인이력 |
| 현장접근성 | ✗ 개발자 필요 | ✓ 노코드 빌더 |
| 비용부담 | ✗ 전액 자부담 | ✓ 정부 지원사업 연계 (최대 50%) |

Style: Two-column with ✗ (red/muted) vs ✓ (neon green). Clean table on desktop, stacked cards on mobile.
```

---

### 1-7. IntegrationHubSection

**파일:** `src/components/sections/IntegrationHubSection.tsx`

```
[Brand Context 붙이기]

Integration hub visualization. Show AX Flow connecting to all existing systems.

Headline: "기존 시스템을 바꾸지 않습니다"
Subheadline: "위에 AI 운영 레이어 한층을 깝니다"

Center hub: "AX Flow" logo/icon in neon green circle

Connected nodes in 3 groups radiating out:

Group 1 - 기간 시스템: MES, ERP, QMS, WMS, PLM, SCADA
Group 2 - 문서·파일: Excel, PDF, 수기문서
Group 3 - 비정형 데이터: 카톡, 사진, 음성, 이미지, 영상, 암묵지

Bottom text: "기존 데이터나 시스템에 번들 및 OEM으로 탑재 가능하며, 한번 쌓인 데이터 구조·워크플로우는 모델이 바뀌어도 그대로 유지됩니다."

Style: Radial/hub-and-spoke diagram. Animated connection lines from center to nodes. Dark bg, neon green accent lines.
Mobile: Vertical list grouped by category instead of radial.
```

---

### 1-8. SocialProofSection

**파일:** `src/components/sections/SocialProofSection.tsx`

```
[Brand Context 붙이기]

Social proof section with performance metrics and customer testimonials.

Headline: "이미 평균 생산성 향상 89%를 달성했습니다"
Subheadline: "검증은 끝났습니다. 현장의 목소리가 증거입니다."

Part 1 - Performance cases (3 cards, horizontal):

Card 1: "생산 스케줄링 자동화"
- 95% 단축 (1시간→5분)
- MES 위 AX Flow 탑재, 생산/영업 정보 통합 조회

Card 2: "불량 원인 분석 + 고객사 대응 보고"
- 90% 단축 (6시간→20분)
- 공정·설비·원자재 이력 동시 연결, 보고서 자동화

Card 3: "배치기록 자동화 + SOP 영향 분석"
- 80% 단축 (4시간→20분 이하)
- 자동 생성 + 검토·서명, 규제 변경 시 SOP 당일식별

Part 2 - Testimonials (3 cards):

"긴급 오더가 들어오면 예전엔 부서별 확인에 2시간 넘게 걸렸습니다. AX Flow 도입 후에는 15분 안에 판단과 공유가 가능해졌습니다."
— 생산관리부 과장, 자동차 부품 제조

"불량이 생기면 과거 사례를 찾는 데 매번 1시간 이상 걸렸습니다. 지금은 5분 안에 대응 방향을 잡습니다."
— QA팀 사원, 포장재 제조

"AX Flow는 검토·서명·이력 관리까지 함께 설계되어 감사에 대응 가능한 AI로 느꼈습니다."
— 제약 QA 팀장, 제약/GMP 제조

CTA: "우리 공장에도 적용 가능한지 확인하기 →" (primary)

Style: Performance cards with large neon green metric numbers. Testimonial cards with quote marks, name/role/company at bottom.
```

---

### 1-9. FaqSection

**파일:** `src/components/sections/FaqSection.tsx`

```
[Brand Context 붙이기]

FAQ accordion section. 7 questions about the manufacturing AI product.

Headline: "자주 묻는 질문"

Accordion items (click to expand):

Q1: "우리 공장에도 도입할 수 있나요?"
A: "ERP, MES, Excel 등 데이터가 있는 제조 현장이라면 업종 무관 도입 가능합니다."

Q2: "PoC 기간과 비용은?"
A: "PoC는 2주 소요. 스마트공장 지원사업 연계 시 비용의 최대 50%를 지원받을 수 있습니다."

Q3: "PoC만 하고 끝나면 아깝지 않나요?"
A: "PoC에 쌓은 온톨로지(데이터 구조)가 그대로 자산으로 남습니다. 모델이 바뀌어도 유지됩니다."

Q4: "기존 AI 챗봇 도입에 실패했는데, AX Flow는 뭐가 다른가요?"
A: "AX Flow는 챗봇이 아닌 '운영 레이어'. 분석→문서→승인→후속조치까지 한 흐름으로 처리합니다."

Q5: "스마트공장 지원사업과 연계 가능한가요?"
A: "네, 2026년 중기부 AI 예산 7,992억 원 중 스마트 제조혁신 지원사업 450+과제에 연계 가능."

Q6: "도입하면 사람을 줄이는 건가요?"
A: "사람을 줄이는 것이 아닙니다. 수기 작성자→검토·승인자, 데이터 수집자→원인 판단자로 역할이 전환됩니다."

Q7: "다른 제조 AI 솔루션과 뭐가 다른가요?"
A: "연결·추론·실행·감사를 하나의 제품에서 동시에 제공하는 솔루션은 현재 AX Flow뿐입니다."

CTA: "15분 무료 상담으로 확인하기 →" (secondary)

Style: Clean accordion, plus/minus toggle icon, smooth expand animation. One item open at a time.
```

---

### 1-10. FinalCtaSection

**파일:** `src/components/sections/FinalCtaSection.tsx`

```
[Brand Context 붙이기]

Final CTA section with embedded lead capture form.

Headline: "지금 신청하시면 1일 이내 담당자 매칭"
Subheadline: "15분이면 귀사에 가장 적합한 워크플로우 1개를 제안드립니다."

Left side: Headline + trust signals
- 개인정보 상담 목적만 사용
- 스팸 없음
- 영업일 1일 내 응답 보장

Right side: Lead capture form
Fields: 이름, 이메일, 회사명, 업종 (select), 관심 분야 (select)
Submit: "무료 상담 신청" (primary neon green button)
Micro copy: "영업일 기준 1일 내 연락드립니다"

Layout: 2-column on desktop (text left, form right). Stacked on mobile.
Background: Slightly elevated surface with subtle neon green glow at top.
```

---

## 📄 PAGE 2: PRODUCT (/product/ax-flow)

총 6개 섹션.

---

### 2-1. ProductHeroSection

**파일:** `src/components/sections/ProductHeroSection.tsx`

```
[Brand Context 붙이기]

Product page hero for AX Flow.

Badge: "제조 AI 에이전트 플랫폼" (small, neon green outline)

Headline (very large): "AX Flow"

Subheadline:
"ERP·MES·Excel·PDF·수기문서·암묵지를 연결해
AI가 직접 처리하는 제조 운영 레이어"

CTA Buttons:
- Primary: "데모 신청하기"
- Secondary: "지원사업 연계 안내"

Background: Subtle accent gradient from top.
Layout: Centered, minimal, lots of whitespace. Product name is the star.
```

---

### 2-2. ProductShowcase

**파일:** `src/components/sections/ProductShowcase.tsx`

```
[Brand Context 붙이기]

Interactive product showcase with sidebar navigation. A+ product page style.

Section title: "AX Flow 제품구조 및 기능"
Subtitle: "Chatting · Library · Agent · Governance — 4대 핵심 기능"

Layout - Desktop: Left sticky sidebar (4 nav items) + Right scrollable content panel
Layout - Mobile: Horizontal scroll pill tabs at top + content below

Sidebar items (scroll-spy active state with neon green left border):
1. 💬 Chatting
2. 📚 Library
3. 🤖 Agent
4. 🛡️ Governance

Each content panel contains:
- Visual hero area: Dark gradient placeholder (16:10) with centered icon + title + metric badge
- Headline (1 sentence value prop)
- Description paragraph
- "업종별 활용 사례" — 2x2 grid of small cards (numbered 01-04) showing industry + use case

Feature 1 - Chatting:
Visual: 💬 icon, "현장 질의응답", badge "95% 단축"
Headline: "긴급 오더 들어왔을 때, 자재·라인·설비 현황을 한 번에 파악합니다"
Use cases:
01 제약/GMP — 음성 질의 (현장 핸즈프리)
02 포장재/부품 — 불량 사진 촬영→즉시 분석
03 식품/HACCP — CCP 모니터링 음성 알림
04 MES/ERP 파트너 — 기존 시스템 위에 AI 질의 기능 탑재

Feature 2 - Library:
Visual: 📚 icon, "지식 구조화", badge "90% 단축"
Headline: "과거 불량 사례, SOP, 배치기록을 5분 안에 찾습니다"
Use cases:
01 제약/GMP — SOP·배치기록 양식 관리
02 포장재/부품 — 과거 불량 사례 관계 탐색
03 식품/HACCP — HACCP 문서·추적성 구조화
04 MES/ERP 파트너 — 고객사 지식 자산 관리 기능

Feature 3 - Agent:
Visual: 🤖 icon, "업무 자동화", badge "80% 단축"
Headline: "배치기록 자동 생성, 불량 보고서 작성까지 AI가 처리합니다"
Use cases:
01 제약/GMP — 배치기록·CAPA 자동 생성
02 포장재/부품 — 불량 분석→보고서 워크플로우
03 식품/HACCP — 추적성 문서 자동 생성
04 MES/ERP 파트너 — 고객사 맞춤 AI 워크플로우 제공

Feature 4 - Governance:
Visual: 🛡️ icon, "감사·규제 대응", badge "규제 대응 내장"
Headline: "AI가 한 모든 일에 근거와 이력이 남습니다"
Use cases:
01 제약/GMP — GMP·cGMP 규제 대응, 감사 로그
02 포장재/부품 — 고객사 대응 보고서 이력 관리
03 식품/HACCP — HACCP·AI기본법 규제 대응
04 MES/ERP 파트너 — AI 거버넌스 포함 솔루션 차별화

CTA at bottom: "데모 체험해보기 →" (primary)

Style: Sidebar items have neon green left border on active. Content panel has smooth scroll transitions.
```

---

### 2-3. WorkflowChangeSection

**파일:** `src/components/sections/WorkflowChangeSection.tsx`

```
[Brand Context 붙이기]

Before/After workflow transformation section.

Headline: "같은 사람, 같은 현장. 바뀌는 건 일하는 방식뿐."
Subheadline: "불량 발생부터 보고서 완료까지, 워크플로우가 이렇게 바뀝니다."

Part 1 - Timeline comparison:

NOW (Before) — 총소요 4~6시간:
불량발생 → MES 로그인(10분) → ERP 교차확인(20분) → 과거사례 수동검색(1시간) → 원인후보 정리(1시간) → 보고서 초안(1시간) → 검토·수정(1시간) → 보고서 완성(30분)

AFTER AX Flow — 총소요 20분:
불량발생 → [AX Flow] 자동연결 → [AX Flow] 원인 도출 → [AX Flow] 보고서 생성 → 검토승인(담당자) → [AX Flow] 후속조치
"나머지 하루 → 공정 개선, 신규 라인 검토 등 '본업'에 집중"

Style: Horizontal timeline. Before in muted/red tones, After in neon green. AX Flow steps highlighted.

Part 2 - Industry scenarios table (4 rows):

| 업종 | Before | After AX Flow | 역할 전환 |
|------|--------|--------------|---------|
| 제약/건기식 GMP | 배치기록 수기 3~4시간 | 배치기록 자동 생성 20분 + HITL 검토 | QA: 수기 작성자 → 검토·서명자 |
| 포장재/부품 | 불량 원인 분석 4~6시간 | 원인 분석~보고서까지 20분 | 품질: 데이터 수집자 → 원인 판단자 |
| 식품/HACCP | 추적성 문서 수기 + CCP 이탈 수시간 | 추적성 자동 구조화 + CCP 이탈 원인 관계 추론 | 관리자: 기록자 → 공정 개선자 |
| MES/ERP 파트너 | AI 자체 개발 12~18개월 | AX Flow 탑재 2주 만에 AI 기능 제공 | 솔루션사: AI 개발자 → AI 통합자 |

Bottom message box (highlight):
"사람을 줄이는 것이 아닙니다. 핵심 인력의 역할이 바뀝니다."
"수기 작성자 → 검토·승인자, 데이터 수집자 → 원인 판단·개선자"
```

---

### 2-4. PlatformLayerSection

**파일:** `src/components/sections/PlatformLayerSection.tsx`

```
[Brand Context 붙이기]

Platform architecture visualization. 4-layer Manufacturing OS stack.

Headline: "기존 시스템을 바꾸지 않습니다"
Subheadline: "위에 AI 운영 레이어 한층을 깝니다"

4 layers stacked vertically (top to bottom, like a tech stack diagram):

Layer 1 (top) - Govern 통제 — Dark gray
"판단 근거, 감사 로그, 승인 이력, 킬스위치"
Tech tag: AX Guard

Layer 2 - Execution 실행 — Primary accent
"분석→문서→승인→후속 조치, 노코드 에이전트 빌더"
Tech tag: Multi-Agent

Layer 3 - Structure 구조 — Neon green
"설비-공정-품질-원자재-규제 관계를 이해하는 구조화"
Tech tag: Ontology + Graph RAG

Layer 4 (bottom) - Connect 연결 — Bright neon green
"MES·ERP·QMS·WMS·PLM·SCADA + 엑셀 + PDF + 카톡 + 음성 + 암묵지"
Tech tag: Connector + MCP/A2A

Below stack: "+ 기존 시스템 및 데이터" (MES, ERP, QMS 등 badges)

Bottom text: "기존 시스템에 번들 및 OEM 탑재 가능. 한번 쌓인 데이터 구조는 모델이 바뀌어도 유지."

Style: Each layer is a wide card/bar. Gradient from dark (top) to neon green (bottom). Subtle connecting lines between layers.
```

---

### 2-5. TrustLayerSection

**파일:** `src/components/sections/TrustLayerSection.tsx`

```
[Brand Context 붙이기]

Trust and governance section for AI safety.

Headline: "AX Guard — Trust Layer"
Subheadline: "AI가 한 모든 일에 근거와 이력이 남습니다"

3-column pillars:

Pillar 1 - 🛡️ 안전
"프롬프트 인젝션 방어 + 이상행동 자동차단"

Pillar 2 - 📋 설명 가능성
"모든 판단에 근거 명시. 감사보고서 자동 생성"

Pillar 3 - 🔐 통제
"사람이 승인 수준을 직접 설정. 킬스위치."

Regulation badges row (5 items):
GMP, HACCP, ISO, AI기본법, EU AI Act

Bottom message:
"개인의 두 번째 뇌가 아닌, 조직의 두 번째 뇌."
"지식을 연결하고, 에이전트가 실행하고, AX Guard가 신뢰를 보장합니다."

Style: 3 pillars with icons, subtle border cards. Regulation badges in a horizontal row with shield/badge styling.
```

---

### 2-6. Bottom CTA (제품 페이지)

**파일:** `src/app/product/ax-flow/page.tsx` (하단 인라인)

```
[Brand Context 붙이기]

Bottom CTA for product page. Conversion-focused.

Headline: "15분이면 귀사에 가장 적합한 워크플로우를 확인할 수 있습니다"
Subheadline: "귀사의 워크플로우에서도 같은 결과를, 15분이면 컨설팅해 드립니다."

CTA Buttons:
- Primary: "데모 신청하기"
- Secondary: "도입비 50% 지원받고 PoC 하기"

Layout: Centered, prominent. Neon green glow behind CTA area. Dark bg.
```

---

## 📄 PAGE 3: SUBSIDY GUIDE (/solutions/subsidy-guide)

### 3-1. SubsidyHeroSection

**파일:** `src/components/sections/SubsidyHeroSection.tsx`

```
[Brand Context 붙이기]

Lead magnet hero. PDF download form for government subsidy guide.

Badge: "무료 가이드" (neon green outline)

Headline: "2026 스마트공장 지원사업 매칭 가이드"

Subheadline:
"지원 자격, 신청 일정, 지원 금액, AX Flow 연계 도입 방법까지
한 눈에 정리한 PDF를 무료로 보내드립니다."

Left column - Benefits checklist:
✓ 2026년 지원사업 자격 요건 총정리
✓ 업종별 최대 지원 금액 안내
✓ AI 도입 + 지원사업 연계 로드맵
✓ PoC 성과증빙 자동화 방법

Right column - PDF download form card:
Title: "가이드 PDF 무료 다운로드"
Subtitle: "이메일로 바로 발송됩니다"
[Form: 이름, 이메일, 회사명, 업종 → Submit "PDF 받기"]

Layout: 2-column (text + checklist left, form card right). Stacked on mobile.
Background: Subtle CTA gradient at top.
```

---

### 3-2. SubsidyContentSection

**파일:** `src/components/sections/SubsidyContentSection.tsx`

```
[Brand Context 붙이기]

Subsidy program details + success cases.

Part 1 - 지원사업 핵심 정보 (4-column info grid):
- 지원 대상: 중소·중견 제조기업 (업종 무관)
- 지원 금액: 사업비의 최대 50% 지원
- 지원 내용: AI·IoT 기반 스마트공장 고도화
- 신청 시기: 2026년 상반기 모집 (마감 임박)

Part 2 - 성공 사례 (2 cards):

Case 1: 자동차 부품 제조 · 300인
"배치 자동화 3시간 → 20분"
"스마트공장 지원사업 연계로 도입 비용 50% 절감."

Case 2: 전자부품 제조 · 150인
"불량 분석 6시간 → 20분"
"자동 생성 KPI 리포트로 성과증빙 완료. 후속 과제 수주까지 연결."

Part 3 - AX Flow + 지원사업 조합:
Headline: "AX Flow + 지원사업 = 최적 조합"
"2주 PoC로 성과 데이터를 자동 생성. 지원사업 성과증빙에 필요한 KPI를 실시간 추적."

CTA: "무료 진단 신청하기" (primary)
```

---

## 📄 PAGE 4: DEMO (/demo)

### 4-1. DemoPage

**파일:** `src/app/demo/page.tsx`

```
[Brand Context 붙이기]

Demo request page. 2-column layout with info + form.

Left column:

Badge: "무료"
Headline: "데모 체험 & 무료 상담"
Subheadline: "15분이면 귀사에 가장 적합한 워크플로우를 제안드립니다."

Section 1 - "데모를 통해 확인할 수 있는 것" (3 benefit items with icons):
🔍 귀사 업종 맞춤 워크플로우 제안
📊 예상 Before/After 시뮬레이션
💰 정부 지원사업 연계 가능 여부 확인 (기업당 최대 6억 원)

Section 2 - "도입 절차" (4-step vertical timeline):
Step 1: 15분 무료 상담 → 현장 파악, 워크플로우 제안
Step 2: 2주 PoC → 실제 데이터로 적용, 성과 자동 생성
Step 3: PoC 결과 리뷰 [1일] → ROI 확인, 본도입 결정
Step 4: 본도입·확장 → 온톨로지 자산 그대로 활용

Section 3 - "15분 무료 상담 포함 내역" (checklist box):
✓ 업종별 최적 워크플로우 1개 제안
✓ 예상 Before/After
✓ 지원사업 연계 가능 여부
✓ 기업당 최대 6억 원 지원
✓ AI바우처 활용 가능성

Right column - Lead form card:
Title: "데모 신청 및 무료 상담"
Subtitle: "영업일 기준 1일 내 담당자가 연락드립니다."
[LeadForm component]

Layout: 2-column sticky form on right. Left column scrolls. Mobile: form at bottom.
```

---

## 📄 PAGE 5: CONTACT (/contact)

### 5-1. ContactPage

**파일:** `src/app/contact/page.tsx`

```
[Brand Context 붙이기]

Contact page. Simple 2-column layout.

Left column:
Headline: "문의하기"
Subheadline: "제조 AI 도입, 지원사업 연계 등 궁금한 사항이 있으시면 편하게 문의해주세요."

Address: 서울특별시 강남구
Map link: "📍 카카오맵에서 위치 보기"
Email: contact@futureworklab.co.kr (mailto link)

Right column - Contact form:
Title: "문의 및 상담"
Fields: 이름, 이메일, 회사명, 문의 내용 (textarea)
Submit: "문의 보내기" (primary button)

Success state: ✅ "문의가 접수되었습니다" / "영업일 기준 1일 내 연락드리겠습니다."

Layout: 2-column, clean and minimal.
```

---

## 🧩 PERSISTENT UI COMPONENTS

### Header

**파일:** `src/components/layout/Header.tsx`

```
[Brand Context 붙이기]

Sticky header navigation for SaaS website.

Left: Logo image (FutureWorkLab)
Center nav (desktop only): 제품, 지원사업(도입비 50%지원), 데모 신청, 리소스, 문의
Right: Theme toggle (sun/moon icon) + "데모 신청하기" CTA button (neon green)
Mobile: Theme toggle + hamburger menu → slide-in drawer with nav items

Style: Height 64px, sticky top, backdrop blur, border-bottom. Dark bg.
CTA button: neon green bg, dark text, rounded-lg.
```

---

### Footer

**파일:** `src/components/layout/Footer.tsx`

```
[Brand Context 붙이기]

Site footer. 4-column grid.

Col 1: Logo + "제조업 AI 도입의 새로운 기준. AI가 직접 실행하는 제조 운영 레이어."
Col 2: Menu links (제품, 지원사업, 데모 신청, 리소스, 문의)
Col 3: 연락처 (서울특별시 강남구, contact@futureworklab.co.kr)
Col 4: 소셜 (Blog, LinkedIn)

Bottom bar: © 2026 주식회사 퓨처워크랩 + 개인정보처리방침 link

Style: Surface bg, subtle border top. Clean, minimal. 4-col on desktop, 2-col on tablet, stacked on mobile.
```

---

## 📋 작업 순서 추천

| 순서 | 섹션 | 우선순위 | 이유 |
|------|------|---------|------|
| 1 | Header + Footer | ★★★ | 전체 톤 결정, 모든 페이지에 영향 |
| 2 | HeroSection | ★★★ | 첫인상, 전환의 시작점 |
| 3 | CoreFeatureSection | ★★★ | 제품 핵심 가치 전달 |
| 4 | ProductShowcase | ★★☆ | 제품 페이지 메인 |
| 5 | SocialProofSection | ★★☆ | 신뢰 구축 |
| 6 | 나머지 홈페이지 섹션 | ★★☆ | 스크롤 플로우 완성 |
| 7 | SubsidyHero + Demo | ★★☆ | 리드 전환 페이지 |
| 8 | 제품 하위 섹션 | ★☆☆ | 디테일 보강 |
