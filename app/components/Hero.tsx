'use client';
import { useEffect, useRef, useState } from 'react';

const images = ['/image.png', '/image2.png'];

export default function Hero() {
  const bottleRef = useRef<HTMLDivElement>(null);
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!bottleRef.current) return;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx * 12;
      const dy = (e.clientY - cy) / cy * 8;
      bottleRef.current.style.filter = `drop-shadow(${dx}px ${dy + 30}px 60px rgba(197,160,40,0.3)) brightness(1.05)`;
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-eyebrow">Haute Parfumerie — Est. 1921</p>
          <h1 className="hero-heading">
            Unveil the<br />
            <em>Essence</em><br />
            of Elegance
          </h1>
          <p className="hero-sub">
            Discover our new collection of timeless fragrances, crafted from the world&apos;s rarest ingredients.
          </p>
          <div className="hero-btns">
            <a href="#collection" className="btn btn-outline">Explore Collection</a>
            <a href="#collection" className="btn btn-solid ripple-btn">Shop Now</a>
          </div>
        </div>

        <div className="hero-bottle-wrap">
          <div className="orbit-ring"><div className="orbit-particle"></div></div>
          <div className="orbit-ring"><div className="orbit-particle"></div></div>
          <div className="bottle-glow"></div>
          
          <div 
            className="bottle-img-wrap" 
            ref={bottleRef} 
            style={{ position: 'relative', width: '280px', height: '380px' }}
          >
            {images.map((src, idx) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img 
                key={src}
                src={src} 
                alt="Lumière signature perfume bottle" 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  opacity: currentImg === idx ? 1 : 0,
                  transition: 'opacity 1.5s ease-in-out',
                  transform: 'scale(1.6)',
                }}
              />
            ))}
            <div className="bottle-shimmer"></div>
          </div>

        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
