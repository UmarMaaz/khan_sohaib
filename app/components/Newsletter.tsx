'use client';
import FadeUp from './FadeUp';

export default function Newsletter() {
  return (
    <section id="newsletter">
      <FadeUp className="newsletter-card">
        <p className="section-eyebrow">Stay in Touch</p>
        <h2 className="section-title">First to <em>Experience</em></h2>
        <div className="gold-divider center"></div>
        <p style={{ fontSize: '0.75rem', color: 'var(--cream-dim)', lineHeight: 1.9, marginBottom: '0.5rem' }}>
          Be the first to experience our new releases, exclusive events, and private exhibitions.
        </p>
        <div className="newsletter-form">
          <input type="email" className="newsletter-input" placeholder="Your email address" />
          <button className="newsletter-btn ripple-btn">Subscribe</button>
        </div>
        <p className="newsletter-note">By subscribing you agree to our privacy policy. We respect your inbox.</p>
      </FadeUp>
    </section>
  );
}
