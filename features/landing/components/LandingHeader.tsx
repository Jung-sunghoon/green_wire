"use client";

import Link from "next/link";
import { toast } from "sonner";
import CTAButton from "./CTAButton";

// 서비스 준비 중 모드 (환경변수로 관리)
const COMING_SOON_MODE = process.env.NEXT_PUBLIC_COMING_SOON === "true";

export default function LandingHeader() {
  const handleLoginClick = (e: React.MouseEvent) => {
    if (COMING_SOON_MODE) {
      e.preventDefault();
      toast.info("곧 출시 예정입니다! 조금만 기다려주세요.", {
        duration: 3000,
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gw-black border-b border-gw-gray-200 dark:border-gw-gray-800">
      <nav
        className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center"
        role="navigation"
        aria-label="메인 네비게이션"
      >
        <Link href="/" className="text-xl font-bold text-gw-green" aria-label="Green Wire 홈">
          Green Wire
        </Link>
        <div className="flex items-center gap-4">
          <a
            href={COMING_SOON_MODE ? "#" : "/login"}
            onClick={handleLoginClick}
            className="cursor-pointer text-sm text-gw-gray-600 dark:text-gw-gray-400 hover:text-gw-black dark:hover:text-white transition-colors"
          >
            로그인
          </a>
          <CTAButton
            href="/register"
            location="header"
            className="px-4 py-2 bg-gw-green hover:bg-gw-green-light text-white rounded-lg text-sm font-medium transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md"
            ariaLabel="무료로 시작하기"
          >
            무료로 받아보기
          </CTAButton>
        </div>
      </nav>
    </header>
  );
}
