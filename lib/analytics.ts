/**
 * Google Analytics 4 이벤트 트래킹 헬퍼
 */

// GA 측정 ID
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

// GA가 로드되었는지 확인
const isGALoaded = (): boolean => {
  return typeof window !== "undefined" && typeof window.gtag === "function";
};

// 페이지뷰 트래킹
export const pageview = (url: string): void => {
  if (!isGALoaded() || !GA_MEASUREMENT_ID) return;

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// 커스텀 이벤트 트래킹
export const event = (
  action: string,
  params?: Record<string, string | number | boolean>
): void => {
  if (!isGALoaded()) return;

  window.gtag("event", action, params);
};

// CTA 클릭 이벤트
export const trackCTAClick = (location: string): void => {
  event("cta_click", {
    location,
    timestamp: new Date().toISOString(),
  });
};

// 섹션 뷰 이벤트
export const trackSectionView = (sectionName: string): void => {
  event("section_view", {
    section: sectionName,
  });
};

// FAQ 펼침 이벤트
export const trackFAQExpand = (question: string): void => {
  event("faq_expand", {
    question,
  });
};

// 요금제 뷰 이벤트
export const trackPricingView = (plan: string): void => {
  event("pricing_view", {
    plan,
  });
};

// TypeScript 타입 선언
declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
  }
}
