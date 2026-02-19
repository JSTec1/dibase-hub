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
  /* Efeito de vidro fiel à referência: blur visível, borda dourada fina, fundo escuro semi-transparente */
  const base =
    'w-full max-w-sm rounded-2xl border border-[#D4AF37] bg-[rgba(20,20,20,0.45)] backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-[#D4AF37] hover:bg-[rgba(30,28,25,0.55)] active:scale-[0.98]';

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
