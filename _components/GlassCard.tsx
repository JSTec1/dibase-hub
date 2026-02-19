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
    'w-full max-w-sm rounded-2xl border border-white/20 bg-[rgba(45,42,38,0.45)] backdrop-blur-md shadow-lg transition-all duration-300 hover:border-white/35 hover:bg-[rgba(55,50,45,0.55)] active:scale-[0.98]';

  const combined = `${base} ${className}`.trim();

  if (Component === 'a' && href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combined}>
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
