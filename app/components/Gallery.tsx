'use client';
import { useRef, useCallback, useEffect } from 'react';
import FadeUp from './FadeUp';

const images = [
  { src: 'https://images.unsplash.com/photo-1547887538-047f814f80b4?w=600&q=80', alt: 'Rose fields at dawn', label: 'Grasse, France' },
  { src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80', alt: 'Perfume atelier', label: 'The Atelier' },
  { src: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=600&q=80', alt: 'Luxury perfume display', label: 'Maison Lumière' },
  { src: 'https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?w=600&q=80', alt: 'Ingredients and botanicals', label: 'Raw Materials' },
  { src: 'https://images.unsplash.com/photo-1601049541271-a1a01c0ac5dc?w=600&q=80', alt: 'Gold perfume bottle', label: 'AURUM Collection' },
];

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    const track = trackRef.current;
    if (!track) return;
    dragState.current = { isDown: true, startX: e.pageX - track.offsetLeft, scrollLeft: track.scrollLeft };
    track.classList.add('grabbing');
  }, []);

  const onMouseUp = useCallback(() => {
    dragState.current.isDown = false;
    trackRef.current?.classList.remove('grabbing');
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragState.current.isDown || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = dragState.current.scrollLeft - (x - dragState.current.startX) * 1.5;
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const handleLeave = () => { dragState.current.isDown = false; track.classList.remove('grabbing'); };
    track.addEventListener('mouseleave', handleLeave);
    return () => track.removeEventListener('mouseleave', handleLeave);
  }, []);

  return (
    <section id="gallery">
      <FadeUp className="gallery-header">
        <p className="section-eyebrow">Visual Experience</p>
        <h2 className="section-title">The World of<br /><em>Lumière</em></h2>
      </FadeUp>
      <div
        className="gallery-track"
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {images.map((img) => (
          <div className="gallery-item" key={img.label}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.src} alt={img.alt} />
            <div className="gallery-item-overlay"><span>{img.label}</span></div>
          </div>
        ))}
      </div>
    </section>
  );
}
