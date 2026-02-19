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
  /* Estilo Glassmorphism idêntico à referência: fundo cinza escuro semi-transparente, borda dourada fina */
  const base =
    'w-full max-w-sm rounded-xl border border-[#D4AF37] bg-[rgba(30,30,30,0.7)] backdrop-blur-sm ' +
    'shadow-lg transition-all duration-300 hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] active:scale-[0.99]';

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
