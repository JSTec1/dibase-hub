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
  /* Referência: retângulos arredondados, fundo cinza carvão, borda dourada fina */
  const base =
    'w-full max-w-sm rounded-xl border border-[#D4AF37] bg-[rgba(45,42,40,0.9)] backdrop-blur-sm shadow-md transition-all duration-200 hover:bg-[rgba(55,50,48,0.95)] active:scale-[0.99]';

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
