'use client';
import { useState, useEffect, useCallback } from 'react';
import FadeUp from './FadeUp';

const testimonials = [
  {
    quote: '"AURUM is unlike anything I have ever encountered. It does not simply sit on the skin — it becomes part of you, like a second soul."',
    author: 'Isabelle Fontaine',
    title: 'Editor, Vogue Paris',
  },
  {
    quote: '"The Lumière collection is an act of poetry. Each bottle is a meditation, each spray a verse. True haute parfumerie at its finest."',
    author: 'Marcus Weil',
    title: 'Fragrance Critic, Basenotes',
  },
  {
    quote: '"I wore Encens Profond to a gallery opening and received no fewer than seven compliments before I reached the champagne table."',
    author: 'Sophia Andersson',
    title: 'Creative Director',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const goSlide = useCallback((n: number) => setCurrent(n), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials">
      <FadeUp>
        <p className="section-eyebrow" style={{ textAlign: 'center' }}>What They Say</p>
        <h2 className="section-title" style={{ textAlign: 'center' }}><em>Voices</em> of Devotion</h2>
        <div className="gold-divider center"></div>
      </FadeUp>
      <FadeUp className="testimonials-wrap">
        {testimonials.map((t, i) => (
          <div key={i} className={`testimonial-slide ${i === current ? 'active' : ''}`}>
            <div className="testimonial-stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="testimonial-quote">{t.quote}</p>
            <p className="testimonial-author">{t.author}</p>
            <p className="testimonial-title">{t.title}</p>
          </div>
        ))}
        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <button key={i} className={`dot ${i === current ? 'active' : ''}`} onClick={() => goSlide(i)}></button>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
