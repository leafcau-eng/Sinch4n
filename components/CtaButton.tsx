import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "sm";
  fullWidth?: boolean;
  external?: boolean;
  onClick?: () => void;
  className?: string;
};

const BASE = "inline-flex items-center justify-center gap-2 rounded-full font-mono uppercase tracking-wide transition-all";

const VARIANT = {
  primary: "bg-cyan-400 text-black font-bold hover:scale-105",
  secondary: "border border-cyan-400/40 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10",
  ghost: "border border-white/20 text-neutral-300 hover:border-white/40",
};

const SIZE = {
  md: "px-8 py-3 text-sm",
  sm: "px-4 py-2 text-[11px]",
};

export default function CtaButton({
  href,
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  external = true,
  onClick,
  className = "",
}: Props) {
  const cls = `${BASE} ${VARIANT[variant]} ${SIZE[size]} ${fullWidth ? "w-full" : ""} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} onClick={onClick} className={cls}>
      {children}
    </Link>
  );
}
