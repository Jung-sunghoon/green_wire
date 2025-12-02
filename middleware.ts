import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 서비스 준비 중 모드 (환경변수로 관리)
const COMING_SOON_MODE = process.env.NEXT_PUBLIC_COMING_SOON === "true";

// Coming Soon 모드에서 허용할 경로
const ALLOWED_PATHS = [
  "/",           // 랜딩 페이지
];

// 정적 파일 및 API 경로 (항상 허용)
const STATIC_PATHS = [
  "/_next",
  "/api",
  "/favicon",
  "/icons",
  "/manifest.json",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Coming Soon 모드가 아니면 모든 경로 허용
  if (!COMING_SOON_MODE) {
    return NextResponse.next();
  }

  // 정적 파일은 항상 허용
  if (STATIC_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // 허용된 경로는 통과
  if (ALLOWED_PATHS.includes(pathname)) {
    return NextResponse.next();
  }

  // 그 외 경로는 랜딩 페이지로 리다이렉트
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    /*
     * 페이지 경로만 매칭 (정적 파일 제외):
     * - _next (모든 Next.js 내부 경로)
     * - 정적 파일 확장자 (.css, .js, .png 등)
     * - api 경로
     * - favicon, icons 등
     */
    "/((?!_next|api|favicon|icons|manifest|.*\\..*).*)",
  ],
};
