import Link from "next/link";
import { Clock } from "lucide-react";

// 환경변수로 on/off 제어 (기본값: false)
const SHOW_URGENCY_CTA = process.env.NEXT_PUBLIC_SHOW_URGENCY_CTA === "true";

interface UrgencyCTAProps {
  enabled?: boolean;
}

export default function UrgencyCTA({ enabled = SHOW_URGENCY_CTA }: UrgencyCTAProps) {
  if (!enabled) return null;

  return (
    <section className="py-8 px-6 bg-amber-50 dark:bg-amber-900/20 border-y border-amber-200 dark:border-amber-800">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          <span className="text-sm font-bold text-amber-800 dark:text-amber-300">
            기간 한정
          </span>
        </div>
        <p className="text-lg font-bold text-amber-900 dark:text-amber-200 mb-2">
          지금 가입하면 첫 달 50% 할인
        </p>
        <p className="text-sm text-amber-700 dark:text-amber-400 mb-4">
          베타 사용자 100명 한정 혜택
        </p>
        <Link
          href="/register"
          className="inline-block px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors"
        >
          할인 받고 시작하기
        </Link>
      </div>
    </section>
  );
}
