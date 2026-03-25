'use client';
import FadeUp from './FadeUp';

const notes = [
  {
    icon: 'fa-solid fa-sun',
    type: 'Top Notes',
    name: 'The First Impression',
    desc: 'Bergamot, Saffron, Pink Pepper, Mandarin — the luminous opening that greets the world.',
  },
  {
    icon: 'fa-solid fa-spa',
    type: 'Heart Notes',
    name: 'The Soul',
    desc: 'Rose Absolute, Jasmine Sambac, Iris — the emotional core that defines the character.',
  },
  {
    icon: 'fa-solid fa-leaf',
    type: 'Base Notes',
    name: 'The Memory',
    desc: 'Aged Oud, Ambergris, Sandalwood, Vanilla — the lasting resonance that lingers long after.',
  },
];

export default function SensoryNotes() {
  return (
    <section id="sensory">
      <FadeUp style={{ textAlign: 'center' }}>
        <p className="section-eyebrow">Olfactory Pyramid</p>
        <h2 className="section-title">The Art of<br /><em>Composition</em></h2>
        <div className="gold-divider center"></div>
      </FadeUp>
      <div className="notes-grid">
        {notes.map((note, i) => (
          <FadeUp key={note.type} className="note-card" delay={i * 0.15}>
            <div className="note-icon"><i className={note.icon}></i></div>
            <p className="note-type">{note.type}</p>
            <h3 className="note-name">{note.name}</h3>
            <p className="note-desc">{note.desc}</p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
