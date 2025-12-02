"use client";

import Link from "next/link";
import { toast } from "sonner";

// 서비스 준비 중 모드 (환경변수로 관리)
const COMING_SOON_MODE = process.env.NEXT_PUBLIC_COMING_SOON === "true";

export default function LandingFooter() {
  const handleComingSoonClick = (e: React.MouseEvent) => {
    if (COMING_SOON_MODE) {
      e.preventDefault();
      toast.info("곧 출시 예정입니다! 조금만 기다려주세요.", {
        duration: 3000,
      });
    }
  };

  return (
    <footer className="py-12 border-t border-gw-gray-200 dark:border-gw-gray-800 bg-white dark:bg-gw-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo */}
          <div>
            <Link href="/" className="text-xl font-bold text-gw-green">
              Green Wire
            </Link>
            <p className="mt-4 text-sm text-gw-gray-500">
              미국주식 뉴스, AI로 쉽게
            </p>
          </div>

          {/* 제품 */}
          <div>
            <h4 className="font-semibold mb-4 text-gw-black dark:text-white">제품</h4>
            <ul className="space-y-2 text-sm text-gw-gray-600 dark:text-gw-gray-400">
              <li>
                <a
                  href="#"
                  onClick={handleComingSoonClick}
                  className="cursor-pointer hover:text-gw-green transition-colors"
                >
                  기능
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={handleComingSoonClick}
                  className="cursor-pointer hover:text-gw-green transition-colors"
                >
                  요금제
                </a>
              </li>
            </ul>
          </div>

          {/* 회사 */}
          <div>
            <h4 className="font-semibold mb-4 text-gw-black dark:text-white">회사</h4>
            <ul className="space-y-2 text-sm text-gw-gray-600 dark:text-gw-gray-400">
              <li>
                <a
                  href="#"
                  onClick={handleComingSoonClick}
                  className="cursor-pointer hover:text-gw-green transition-colors"
                >
                  소개
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={handleComingSoonClick}
                  className="cursor-pointer hover:text-gw-green transition-colors"
                >
                  블로그
                </a>
              </li>
            </ul>
          </div>

          {/* 법적 고지 */}
          <div>
            <h4 className="font-semibold mb-4 text-gw-black dark:text-white">법적 고지</h4>
            <ul className="space-y-2 text-sm text-gw-gray-600 dark:text-gw-gray-400">
              <li>
                <a
                  href="#"
                  onClick={handleComingSoonClick}
                  className="cursor-pointer hover:text-gw-green transition-colors"
                >
                  이용약관
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={handleComingSoonClick}
                  className="cursor-pointer hover:text-gw-green transition-colors"
                >
                  개인정보처리방침
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gw-gray-200 dark:border-gw-gray-800 text-center text-sm text-gw-gray-500">
          © 2025 Green Wire. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
