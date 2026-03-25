'use client';
import { useCallback } from 'react';

interface RippleButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function RippleButton({ children, className = '', onClick }: RippleButtonProps) {
  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const size = Math.max(rect.width, rect.height) * 2;
    ripple.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - rect.left - size / 2}px;top:${e.clientY - rect.top - size / 2}px`;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
    onClick?.();
  }, [onClick]);

  return (
    <button className={`ripple-btn ${className}`} onClick={handleClick}>
      {children}
    </button>
  );
}
