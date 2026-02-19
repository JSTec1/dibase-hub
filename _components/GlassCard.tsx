'use client';

import { type ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  as?: 'button' | 'a' | 'div';
  href?: string;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className = '',
  as: Component = 'div',
  href,
  onClick,
}: GlassCardProps) {
  /* Mobile: premium card – vidro reforçado, borda dourada sutil, mais alto. Desktop: estilo atual. */
  const base =
    'w-full max-w-sm rounded-2xl transition-all duration-300 active:scale-[0.99] ' +
    'border border-[rgba(212,175,55,0.3)] bg-[rgba(255,255,255,0.05)] backdrop-blur-[12px] ' +
    'sm:border-white/[0.08] sm:bg-[rgba(20,20,20,0.8)] sm:backdrop-blur-lg ' +
    'hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] shadow-lg';

  const combined = `${base} ${className}`.trim();

  if (Component === 'a' && href) {
    return (
      <a
        href={href}
        target={href.startsWith('#') ? undefined : '_blank'}
        rel={href.startsWith('#') ? undefined : 'noopener noreferrer'}
        className={combined}
      >
        {children}
      </a>
    );
  }

  if (Component === 'button') {
    return (
      <button type="button" onClick={onClick} className={combined}>
        {children}
      </button>
    );
  }

  return <div className={combined}>{children}</div>;
}
