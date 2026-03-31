import type { Metadata } from 'next'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '개인정보처리방침 | FutureWorkLab',
  description: '주식회사 퓨처워크랩의 개인정보처리방침입니다.',
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
        개인정보처리방침
      </h1>
      <p className="mt-2 text-sm text-[var(--text-secondary)]">
        시행일: 2026년 3월 31일
      </p>

      <div className="mt-10 space-y-10 text-sm leading-relaxed text-[var(--foreground)]">
        <section>
          <h2 className="text-lg font-semibold">1. 개인정보의 처리 목적</h2>
          <p className="mt-3 text-[var(--text-secondary)]">
            {COMPANY_INFO.name}(이하 &quot;회사&quot;)는 다음의 목적을 위하여 개인정보를 처리합니다.
            처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며,
            이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-[var(--text-secondary)]">
            <li>데모/PoC 신청 및 상담 문의 처리</li>
            <li>지원사업 가이드 자료 제공</li>
            <li>서비스 관련 정보 및 뉴스레터 발송</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold">2. 수집하는 개인정보 항목</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-[var(--text-secondary)]">
            <li>필수: 이메일 주소, 회사명, 담당자명, 연락처</li>
            <li>선택: 업종, 직원 수, 주요 관심사</li>
            <li>자동 수집: 접속 IP, 브라우저 종류, 방문 일시 (Google Analytics)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold">3. 개인정보의 보유 및 이용 기간</h2>
          <p className="mt-3 text-[var(--text-secondary)]">
            회사는 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
            단, 관계 법령에 의해 보존할 필요가 있는 경우 해당 법령에서 정한 기간 동안 보관합니다.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-[var(--text-secondary)]">
            <li>문의/상담 기록: 3년 (전자상거래법)</li>
            <li>접속 로그: 3개월 (통신비밀보호법)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold">4. 개인정보의 제3자 제공</h2>
          <p className="mt-3 text-[var(--text-secondary)]">
            회사는 정보주체의 동의 없이 개인정보를 제3자에게 제공하지 않습니다.
            다만, 법령의 규정에 의하거나 수사 목적으로 법령에 정해진 절차와 방법에 따라
            수사기관의 요구가 있는 경우에는 예외로 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">5. 개인정보의 처리 위탁</h2>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-[var(--text-secondary)]">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="py-2 text-left font-medium">수탁업체</th>
                  <th className="py-2 text-left font-medium">위탁 업무</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-2">HubSpot Inc.</td>
                  <td className="py-2">리드 데이터 관리 및 이메일 발송</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-2">Google LLC</td>
                  <td className="py-2">웹사이트 이용 분석 (Google Analytics)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold">6. 정보주체의 권리 및 행사 방법</h2>
          <p className="mt-3 text-[var(--text-secondary)]">
            정보주체는 언제든지 개인정보의 열람, 정정, 삭제, 처리 정지를 요청할 수 있습니다.
            요청은 아래 연락처로 서면, 이메일 등을 통해 하실 수 있으며,
            회사는 이에 대해 지체 없이 조치하겠습니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">7. 개인정보 보호책임자</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-[var(--text-secondary)]">
            <li>성명: 박은규 (대표이사)</li>
            <li>이메일: {COMPANY_INFO.ceoEmail}</li>
            <li>전화: {COMPANY_INFO.phone}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold">8. 개인정보처리방침의 변경</h2>
          <p className="mt-3 text-[var(--text-secondary)]">
            이 개인정보처리방침은 2026년 3월 31일부터 적용됩니다.
            변경 사항이 있을 경우 웹사이트를 통해 공지합니다.
          </p>
        </section>
      </div>
    </main>
  )
}
