'use client';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="preloader" className={hidden ? 'hidden' : ''}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.png" alt="LUMIÈRE" className="preloader-logo" style={{ height: '120px', width: 'auto' }} />
      <p className="preloader-text">Fragrances</p>
      <div className="preloader-line"></div>
    </div>
  );
}
