import CTAButton from "./CTAButton";

export default function MobileCTA() {
  return (
    <>
      {/* Mobile Fixed CTA */}
      <div
        className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-gw-black border-t border-gw-gray-200 dark:border-gw-gray-800 md:hidden z-50"
        role="complementary"
        aria-label="모바일 가입 버튼"
      >
        <CTAButton
          href="/register"
          location="mobile"
          className="block w-full py-4 bg-gw-green hover:bg-gw-green-light text-white font-semibold rounded-lg text-center shadow-md"
          ariaLabel="무료로 시작하기"
        >
          무료로 받아보기
        </CTAButton>
      </div>

      {/* Add padding at bottom for mobile fixed CTA */}
      <div className="h-20 md:hidden" aria-hidden="true" />
    </>
  );
}
