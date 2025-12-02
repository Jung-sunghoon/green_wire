import { ReportDemo } from "./ReportDemo";
import CTAButton from "./CTAButton";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 md:pb-24 px-6">
      {/* 단색 배경 */}
      <div className="absolute inset-0 bg-gw-gray-50 dark:bg-gw-black" />

      <div className="max-w-7xl mx-auto relative w-full">
        <div className="flex flex-col items-center text-center">
          {/* 헤드라인 */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-4 text-gw-black dark:text-white">
            매일 아침, 한국어로 받아보세요
            <br />
            <span className="text-gw-green">어젯밤 미국 주식 AI 분석 리포트</span>
          </h1>

          {/* 서브헤드 */}
          <p className="text-base md:text-lg text-gw-gray-600 dark:text-gw-gray-400 mb-3 max-w-xl">
            영어 뉴스 직접 읽지 마세요.
            <br className="hidden md:block" />
            AI가 읽고, 호재/악재 분석해서 보내드립니다.
          </p>

          {/* 타겟 명시 */}
          <p className="text-sm text-gw-gray-500 dark:text-gw-gray-500 mb-8">
            미국 주식 투자하시는 분들을 위한 AI 뉴스 분석 서비스
          </p>

          {/* CTA 버튼 */}
          <CTAButton
            href="/register"
            location="hero"
            className="px-8 py-4 bg-gw-green hover:bg-gw-green-light text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-lg"
            ariaLabel="무료로 시작하기"
          >
            무료로 받아보기
          </CTAButton>

          {/* 신뢰 텍스트 */}
          <p className="mt-4 text-sm text-gw-gray-500 dark:text-gw-gray-500">
            가입 3분 · 내일 아침 첫 리포트 도착
          </p>

          {/* 리포트 데모 */}
          <div className="mt-12 md:mt-16 w-full max-w-2xl">
            <ReportDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
