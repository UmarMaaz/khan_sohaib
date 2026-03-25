'use client';
import { useEffect, useState, useRef } from 'react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const spanRefs = useRef<HTMLSpanElement[]>([]);
  const { cartItems, toggleCart } = useCart();
  const { theme, toggleTheme } = useTheme();
  
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <a href="#" className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="LUMIÈRE" style={{ height: '48px', width: 'auto' }} />
        </a>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#collection">Fragrances</a></li>
          <li><a href="#story">Story</a></li>
        </ul>
        <div className="nav-icons">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>
          <a href="#"><i className="far fa-heart"></i></a>
          <button onClick={toggleCart} style={{ background: 'none', border: 'none', color: 'var(--cream)', cursor: 'pointer', fontSize: '1.2rem', position: 'relative' }}>
            <i className="fas fa-bag-shopping"></i>
            {itemCount > 0 && (
              <span style={{ position: 'absolute', top: -8, right: -12, background: 'var(--gold)', color: 'var(--black)', fontSize: '0.7rem', padding: '2px 6px', borderRadius: '50%', fontWeight: 'bold' }}>
                {itemCount}
              </span>
            )}
          </button>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          <span style={menuOpen ? { transform: 'rotate(45deg) translate(4px,4px)' } : {}} ref={el => { if (el) spanRefs.current[0] = el; }}></span>
          <span style={menuOpen ? { opacity: 0 } : {}} ref={el => { if (el) spanRefs.current[1] = el; }}></span>
          <span style={menuOpen ? { transform: 'rotate(-45deg) translate(4px,-4px)' } : {}} ref={el => { if (el) spanRefs.current[2] = el; }}></span>
        </button>
      </nav>

      <div
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        style={{ display: menuOpen ? 'flex' : 'none' }}
      >
        <a href="#hero" onClick={closeMenu}>Home</a>
        <a href="#collection" onClick={closeMenu}>Fragrances</a>
        <a href="#story" onClick={closeMenu}>Story</a>
        <a href="#sensory" onClick={closeMenu}>Notes</a>
      </div>
    </>
  );
}
