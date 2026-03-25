'use client';
import { useEffect, useRef, ReactNode } from 'react';

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

export default function FadeUp({ children, className = '', delay = 0, style = {} }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-up ${className}`}
      style={{ transitionDelay: delay ? `${delay}s` : undefined, ...style }}
    >
      {children}
    </div>
  );
}
