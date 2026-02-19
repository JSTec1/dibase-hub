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
  const base =
    'w-full max-w-sm rounded-2xl border border-dibase-gold-muted bg-[rgba(10,10,10,0.45)] backdrop-blur-md shadow-xl transition-all duration-300 hover:border-dibase-gold/80 hover:bg-[rgba(20,18,15,0.6)] active:scale-[0.98]';

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
