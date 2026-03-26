'use client';
import FadeUp from './FadeUp';

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <FadeUp className="footer-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="LUMIÈRE" style={{ height: '80px', width: 'auto', marginBottom: '0.5rem' }} />
          <p className="footer-logo-text">Fragrances</p>
          <p>Crafting extraordinary fragrances<br />in the pursuit of olfactory perfection<br />since 1921.</p>
          <div className="footer-social">
            <a href="https://www.instagram.com/khansohaib7695?igsh=NWM1MjRma21oZ3F1" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://tiktok.com/@khan.sohaib7695" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a>
            <a href="https://www.facebook.com/profile.php?id=61585072781048&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          </div>
        </FadeUp>
        <FadeUp className="footer-col" delay={0.1}>
          <h4>Navigation</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#collection">Fragrances</a></li>
            <li><a href="#story">Our Story</a></li>
            <li><a href="#sensory">Notes</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </FadeUp>
        <FadeUp className="footer-col" delay={0.2}>
          <h4>Maison</h4>
          <ul>
            <li><a href="#">AURUM</a></li>
            <li><a href="#">Nuit de Soie</a></li>
            <li><a href="#">Lumière Rose</a></li>
            <li><a href="#">Encens Profond</a></li>
            <li><a href="#">Vétiver Blanc</a></li>
          </ul>
        </FadeUp>
        <FadeUp className="footer-col" delay={0.3}>
          <h4>Contact</h4>
          <ul>
            <li>Kohat Cantt</li>
            <li>Pakistan</li>
            <li>info@khansohaib.com</li>
            <li>+92 323 592 1798</li>
          </ul>
        </FadeUp>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Khan Sohaib. All rights reserved.</p>
        <p>Privacy Policy · Terms of Use · Cookie Preferences</p>
      </div>
    </footer>
  );
}
