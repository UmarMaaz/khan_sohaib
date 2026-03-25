'use client';
import { useState } from 'react';
import FadeUp from './FadeUp';

export default function Signature() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <section id="signature">
        <FadeUp>
          <div className="sig-badge">✦ Limited Edition 2024 ✦</div>
          <p className="section-eyebrow" style={{ textAlign: 'center' }}>Flagship Fragrance</p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>AURUM</h2>
          <div className="gold-divider center"></div>
        </FadeUp>
        <FadeUp className="sig-bottle-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&q=80" alt="AURUM signature fragrance bottle" />
          <div className="sig-shimmer"></div>
        </FadeUp>
        <FadeUp>
          <p className="sig-desc">
            A rare composition of Bulgarian rose absolute, aged oud from Southeast Asia, and the warmth of Tahitian vanilla. AURUM is not merely a fragrance — it is a memory waiting to be written.
          </p>
        </FadeUp>
        <FadeUp>
          <div className="notes-row">
            <div className="note-pill">Top: Bergamot · Saffron</div>
            <div className="note-pill">Heart: Rose · Jasmine</div>
            <div className="note-pill">Base: Oud · Amber · Vanilla</div>
          </div>
        </FadeUp>
        <FadeUp>
          <button className="btn btn-outline ripple-btn" onClick={openModal}>Discover the Scent</button>
        </FadeUp>
      </section>

      {/* MODAL */}
      <div className={`modal-overlay ${modalOpen ? 'active' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
        <div className="modal">
          <button className="modal-close" onClick={closeModal}>
            <i className="fas fa-times"></i>
          </button>
          <p className="section-eyebrow">The Story of</p>
          <h3>AURUM</h3>
          <div className="gold-divider"></div>
          <p>Conceived during a golden sunset over the Moroccan Sahara, AURUM was born from the vision of our master perfumer Éléonore Vidal. The name — Latin for gold — speaks to both the liquid amber hue of the formulation and the priceless rarity of its ingredients.</p>
          <br />
          <p>The opening is a radiant burst of Calabrian bergamot, laced with the intoxicating warmth of Kashmir saffron. As the heart unfolds, Bulgarian rose absolute — harvested at dawn — entwines with night-blooming jasmine to create an unforgettable floral accord. The base, a meditation in time, lingers for hours: an ancient oud, ambergris, and a whisper of Madagascar vanilla.</p>
          <br />
          <p style={{ color: 'var(--gold)', fontSize: '0.7rem', letterSpacing: '0.15em' }}>50ml · 100ml · 200ml — from €195</p>
        </div>
      </div>
    </>
  );
}
