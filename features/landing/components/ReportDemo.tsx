"use client";

import { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  FileText,
  ChevronDown,
} from "lucide-react";

interface DemoReport {
  symbol: string;
  company: string;
  analyzedCount: number;
  sentiment: {
    positive: number;
    neutral: number;
    negative: number;
  };
  summary: string;
  keyFindings: string[];
  date: string;
}

// 실제 리포트 구조에 맞춘 NVIDIA 샘플 데이터
const SAMPLE_REPORT: DemoReport = {
  symbol: "NVDA",
  company: "NVIDIA Corp",
  analyzedCount: 20,
  sentiment: {
    positive: 14,
    neutral: 4,
    negative: 2,
  },
  summary:
    "NVIDIA가 3분기 실적 발표에서 데이터센터 부문 매출이 전년 대비 279% 증가한 145억 달러를 기록했습니다. AI 칩 수요 급증이 실적을 견인했으며, 젠슨 황 CEO는 'AI 혁명이 본격화되고 있다'고 밝혔습니다.",
  keyFindings: [
    "데이터센터 매출 145억 달러로 사상 최고치 경신",
    "H100 GPU 수요 급증으로 공급 부족 지속",
    "차세대 Blackwell 아키텍처 2024년 출시 예정",
  ],
  date: "2024.11.28",
};

// 추가 섹션 목록 (흐리게 표시될 내용)
const MORE_SECTIONS = [
  "시장 반응 분석",
  "주가 영향 예측",
  "경쟁사 분석",
  "리스크 요인",
  "투자 권고",
  "결론",
];

export function ReportDemo() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full">
      {/* 리포트 카드 - 항상 표시 */}
      <div className="bg-white dark:bg-gw-gray-900 border border-gw-gray-200 dark:border-gw-gray-700 rounded-xl shadow-md overflow-hidden">
        {/* 헤더 */}
        <div className="px-5 py-4 border-b border-gw-gray-100 dark:border-gw-gray-800">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-gw-green" />
              <span className="text-lg font-bold text-gw-black dark:text-white">
                {SAMPLE_REPORT.symbol}
              </span>
              <span className="text-sm text-gw-gray-500">
                {SAMPLE_REPORT.company}
              </span>
            </div>
            <span className="text-xs text-gw-gray-400">
              {SAMPLE_REPORT.date}
            </span>
          </div>
          <p className="text-xs text-gw-gray-500">
            {SAMPLE_REPORT.analyzedCount}개 뉴스 분석 완료
          </p>
        </div>

        {/* 감성 분석 결과 - 항상 표시 */}
        <div className="px-5 py-4 border-b border-gw-gray-100 dark:border-gw-gray-800">
          <p className="text-xs font-medium text-gw-gray-500 mb-3">
            감성 분석 결과
          </p>
          <div className="grid grid-cols-3 gap-3" role="group" aria-label="감성 분석 결과">
            <div className="text-center p-3 bg-gw-green/10 rounded-lg">
              <div className="flex items-center justify-center gap-1 mb-1">
                <TrendingUp className="w-3.5 h-3.5 text-gw-green" aria-hidden="true" />
                <span className="text-lg font-bold text-gw-green">
                  {SAMPLE_REPORT.sentiment.positive}
                </span>
              </div>
              <span className="text-xs text-gw-gray-500">긍정</span>
            </div>
            <div className="text-center p-3 bg-gw-gray-100 dark:bg-gw-gray-800 rounded-lg">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Minus className="w-3.5 h-3.5 text-gw-gray-500" aria-hidden="true" />
                <span className="text-lg font-bold text-gw-gray-600 dark:text-gw-gray-400">
                  {SAMPLE_REPORT.sentiment.neutral}
                </span>
              </div>
              <span className="text-xs text-gw-gray-500">중립</span>
            </div>
            <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <div className="flex items-center justify-center gap-1 mb-1">
                <TrendingDown className="w-3.5 h-3.5 text-red-500" aria-hidden="true" />
                <span className="text-lg font-bold text-red-500">
                  {SAMPLE_REPORT.sentiment.negative}
                </span>
              </div>
              <span className="text-xs text-gw-gray-500">부정</span>
            </div>
          </div>
        </div>

        {/* 핵심 요약 - 항상 표시 (요약만) */}
        <div className="px-5 py-4 border-b border-gw-gray-100 dark:border-gw-gray-800">
          <p className="text-xs font-medium text-gw-gray-500 mb-3">핵심 요약</p>
          <p className="text-sm text-gw-gray-700 dark:text-gw-gray-300 leading-relaxed">
            {SAMPLE_REPORT.summary}
          </p>
        </div>

        {/* 주요 발견사항 - 펼쳤을 때만 표시 */}
        <div
          id="report-key-findings"
          className="grid transition-[grid-template-rows] duration-300 ease-out"
          style={{ gridTemplateRows: isExpanded ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div className="px-5 py-4 border-b border-gw-gray-100 dark:border-gw-gray-800">
              <p className="text-xs font-medium text-gw-gray-500 mb-3">
                주요 발견사항
              </p>
              <ul className="space-y-2" role="list">
                {SAMPLE_REPORT.keyFindings.map((finding, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm text-gw-black dark:text-white"
                  >
                    <span className="text-gw-green font-medium shrink-0" aria-hidden="true">
                      {i + 1}.
                    </span>
                    <span>{finding}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 더 많은 섹션 안내 (흐리게) */}
        <div className="px-5 py-3 bg-gw-gray-50 dark:bg-gw-gray-800/50" aria-hidden="true">
          <p className="text-xs text-gw-gray-400 dark:text-gw-gray-500 text-center">
            <span className="font-medium">+</span> {MORE_SECTIONS.join(" · ")}
          </p>
        </div>

        {/* 더보기/접기 버튼 */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-controls="report-key-findings"
          className="cursor-pointer w-full px-5 py-3 bg-gw-green/5 dark:bg-gw-green/10 hover:bg-gw-green/10 dark:hover:bg-gw-green/20 transition-colors flex items-center justify-center gap-2"
        >
          <span className="text-xs font-medium text-gw-green">
            {isExpanded ? "접기" : "주요 발견사항 보기"}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-gw-green transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
}
