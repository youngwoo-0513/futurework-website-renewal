// Design Ref: §2.3 — 테마 설정 (next-themes 래퍼)
// next-themes의 ThemeProvider를 layout.tsx에서 직접 사용
// 이 파일은 테마 관련 상수와 유틸리티를 제공

export const THEME_CONFIG = {
  attribute: 'class',
  defaultTheme: 'system',
  enableSystem: true,
} as const
