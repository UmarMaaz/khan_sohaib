'use client';
import FadeUp from './FadeUp';

export default function Story() {
  return (
    <section id="story">
      <div className="story-grid">
        <FadeUp className="story-text">
          <p className="section-eyebrow">Our Story</p>
          <h2 className="section-title">The Genesis of a<br /><em>New Legacy</em></h2>
          <div className="gold-divider"></div>
          <p>Founded in the historic city of Kohat, Pakistan, Khan Sohaib represents the dawn of a new era in olfactory craftsmanship. Born from the visionary passion of a devoted student, this maison transforms youthful ambition into timeless luxury.</p>
          <p>Every fragrance is a deeply personal journey. By meticulously selecting the finest essences, Sohaib blends raw authenticity with modern elegance, creating bold, mesmerizing scents that resonate with power and grace.</p>
          <div className="story-stat">
            <div>
              <div className="stat-num">2024</div>
              <div className="stat-label">Year Established</div>
            </div>
            <div>
              <div className="stat-num">1</div>
              <div className="stat-label">Visionary Founder</div>
            </div>
            <div>
              <div className="stat-num">100%</div>
              <div className="stat-label">Artisanal Passion</div>
            </div>
          </div>
        </FadeUp>
        <FadeUp className="story-img-wrap" delay={0.2}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/about.png" alt="Perfume craftsmanship atelier" />
        </FadeUp>
      </div>
    </section>
  );
}
