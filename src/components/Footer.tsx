import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        {/* LOGO DE L'AGENCE */}
        <div className="footer-logo-wrapper">
          <Link href="/">
            <Image 
              src="/img/logo.png" 
              alt="OnDigital" 
              width={130} 
              height={32} 
              className="footer-logo"
              priority
            />
          </Link>
        </div>

        {/* LIENS DE NAVIGATION */}
        <nav className="footer-nav">
          <Link href="/" className="footer-link">Accueil</Link>
          <Link href="/services" className="footer-link">Services</Link>
          <Link href="/realisations" className="footer-link">Réalisations</Link>
          <Link href="/equipe" className="footer-link">Équipe</Link>
          <Link href="/contact" className="footer-link">Contact</Link>
        </nav>

        {/* ICÔNES DES RÉSEAUX SOCIAUX */}
        <div className="footer-socials">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>

        {/* COPYRIGHT DROITS RÉSERVÉS */}
        <div className="footer-copyright">
          <p>© 2026 OnDigital — Tous droits réservés</p>
        </div>

      </div>
    </footer>
  );
}