import CTAButton from "./CTAButton";

export default function FinalCTASection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-gw-gray-50 dark:bg-gw-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gw-black dark:text-white">
          지금 바로 시작하세요
        </h2>
        <p className="text-lg text-gw-gray-600 dark:text-gw-gray-400 mb-8">
          무료로 시작하고, 내일 아침 첫 리포트를 받아보세요
        </p>
        <CTAButton
          href="/register"
          location="final"
          className="inline-block px-10 py-4 bg-gw-green hover:bg-gw-green-light text-white font-semibold rounded-xl text-lg transition-colors"
          ariaLabel="무료로 시작하기"
        >
          무료로 시작하기
        </CTAButton>
        <p className="mt-6 text-sm text-gw-gray-500">
          신용카드 없이 시작 · 언제든 해지 가능
        </p>
      </div>
    </section>
  );
}
