"use client";

import { toast } from "sonner";
import { trackCTAClick } from "@/lib/analytics";

// 서비스 준비 중 모드 (환경변수로 관리)
const COMING_SOON_MODE = process.env.NEXT_PUBLIC_COMING_SOON === "true";

interface CTAButtonProps {
  href: string;
  location: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export default function CTAButton({
  href,
  location,
  children,
  className = "",
  ariaLabel,
}: CTAButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    trackCTAClick(location);

    if (COMING_SOON_MODE) {
      e.preventDefault();
      toast.info("곧 출시 예정입니다! 조금만 기다려주세요.", {
        duration: 3000,
      });
    }
  };

  return (
    <a
      href={COMING_SOON_MODE ? "#" : href}
      onClick={handleClick}
      className={`cursor-pointer ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
