'use client';
import FadeUp from './FadeUp';
import RippleButton from './RippleButton';
import { useCart } from '../context/CartContext';

type Fragrance = {
  img: string;
  alt: string;
  family: string;
  name: string;
  available: boolean;
  imageStyle?: React.CSSProperties;
  price?: number;
};

const fragrances: Fragrance[] = [
  {
    img: '/chanel.png',
    alt: 'Chanel fragrance',
    family: 'Floral · Aldehydic',
    name: 'Chanel',
    available: true,
    imageStyle: { transform: 'scale(1.1)', transformOrigin: 'top center', objectFit: 'contain' },
    price: 2500,
  },
  {
    img: '/aventus.png',
    alt: 'Creed Aventus',
    family: 'Fruity · Woody',
    name: 'Aventus',
    available: true,
    imageStyle: { transform: 'scale(1.5)', objectFit: 'contain' },
    price: 2500,
  },
  {
    img: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&q=80',
    alt: 'Coming Soon Silhouette',
    family: 'Future Release',
    name: 'Coming Soon',
    available: false,
  },
  {
    img: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&q=80',
    alt: 'Coming Soon Silhouette',
    family: 'Future Release',
    name: 'Coming Soon',
    available: false,
  },
];

export default function Collection() {
  const { addToCart } = useCart();

  return (
    <section id="collection">
      <FadeUp className="collection-header">
        <p className="section-eyebrow">Our Maison</p>
        <h2 className="section-title">The <em>Collection</em></h2>
        <div className="gold-divider center"></div>
      </FadeUp>
      <div className="collection-grid">
        {fragrances.map((f, i) => (
          <FadeUp key={i} delay={i * 0.1}>
            <div className="perf-card">
              <div className="card-img-wrap" style={{ overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={f.img}
                  alt={f.alt}
                  style={f.available ? (f.imageStyle || { transform: 'scale(1.6)', objectFit: 'contain' }) : { filter: 'grayscale(50%) blur(15px) brightness(0.6)', transform: 'scale(1.2)' }}
                />
                <div className="card-overlay"></div>
              </div>
              <div className="card-body">
                <p className="card-family" style={!f.available ? { color: 'var(--cream-dim)' } : {}}>{f.family}</p>
                <h3 className="card-name" style={!f.available ? { color: 'var(--cream-dim)' } : {}}>{f.name}</h3>
                {f.available ? (
                  <RippleButton 
                    className="card-btn"
                    onClick={() => addToCart({ id: f.name, name: f.name, price: f.price || 0, quantity: 1, img: f.img })}
                  >
                    Add to Cart — {f.price} PKR
                  </RippleButton>
                ) : (
                  <button className="card-btn" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
