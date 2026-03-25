'use client';
import { useEffect, useRef, useCallback, useState } from 'react';

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  const animateRing = useCallback(() => {
    ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
    ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;
    if (ringRef.current) {
      ringRef.current.style.left = ringPos.current.x + 'px';
      ringRef.current.style.top = ringPos.current.y + 'px';
    }
    requestAnimationFrame(animateRing);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    const animId = requestAnimationFrame(animateRing);

    // Hover detection
    const hoverTargets = document.querySelectorAll('a,button,.perf-card,.gallery-item,.dot');
    const onEnter = () => ringRef.current?.classList.add('hovering');
    const onLeave = () => ringRef.current?.classList.remove('hovering');
    hoverTargets.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
      hoverTargets.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, [animateRing, mounted]);

  if (!mounted) return null;

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
    </>
  );
}

