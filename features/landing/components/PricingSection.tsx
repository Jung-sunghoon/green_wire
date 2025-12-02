import Link from "next/link";
import { Check } from "lucide-react";

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period: string;
  discount?: string;
  features: string[];
  recommended?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "무료",
    description: "체험해보고 싶다면",
    price: "₩0",
    period: "/월",
    features: [
      "관심 종목 10개",
      "리포트 구독 1개",
      "주 1회 리포트 발송",
      "뉴스 감성 분석",
    ],
  },
  {
    name: "베이직",
    description: "대부분의 투자자에게 추천",
    price: "₩12,900",
    period: "/월",
    features: [
      "관심 종목 30개",
      "리포트 구독 5개",
      "매일 리포트 발송",
      "재무/기술 분석 포함",
    ],
    recommended: true,
  },
  {
    name: "프로",
    description: "다종목 투자자를 위한",
    price: "₩29,900",
    period: "/월",
    features: [
      "관심 종목 무제한",
      "리포트 구독 15개",
      "매일 리포트 발송",
      "실적/AI 종합의견 포함",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-gw-gray-50 dark:bg-gw-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gw-black dark:text-white">
            심플한 요금제
          </h2>
          <p className="text-lg text-gw-gray-600 dark:text-gw-gray-400">
            무료로 시작하고, 필요할 때 업그레이드
          </p>
        </div>

        {/* 요금제 카드 */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-6 md:p-8 rounded-2xl bg-white dark:bg-gw-gray-800 transition-all ${
                plan.recommended
                  ? "border-2 border-gw-green ring-1 ring-gw-green/20"
                  : "border border-gw-gray-200 dark:border-gw-gray-700"
              }`}
            >
              {plan.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gw-green text-white text-xs font-bold rounded-full whitespace-nowrap">
                  가장 인기
                </span>
              )}

              <p className="text-sm text-gw-gray-500 mb-1">
                {plan.description}
              </p>
              <h3 className="text-xl font-bold mb-4 text-gw-black dark:text-white">
                {plan.name}
              </h3>

              <p className="mb-1">
                <span className="text-3xl md:text-4xl font-bold text-gw-black dark:text-white">
                  {plan.price}
                </span>
                <span className="text-sm text-gw-gray-500">
                  {plan.period}
                </span>
              </p>

              {plan.discount && (
                <p className="text-xs text-gw-green font-medium mb-6">
                  {plan.discount}
                </p>
              )}
              {!plan.discount && <div className="mb-6" />}

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gw-gray-600 dark:text-gw-gray-400">
                    <Check className="w-5 h-5 text-gw-green shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 단일 CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <Link
            href="/register"
            className="inline-block px-10 py-4 bg-gw-green hover:bg-gw-green-light text-white font-semibold rounded-xl text-lg transition-colors"
          >
            무료로 시작하기
          </Link>
          <p className="mt-4 text-sm text-gw-gray-500">
            신용카드 없이 시작 · 언제든 업그레이드
          </p>
        </div>
      </div>
    </section>
  );
}
