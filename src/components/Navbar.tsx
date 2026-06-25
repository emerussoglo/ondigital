"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* LOGO */}
        <Link href="/" className="navbar-logo">
          {/* Remplace "/img/logo.png" par le chemin exact de ton logo si nécessaire */}
          {/* <Image 
            src="/img/logo.png" 
            alt="OnDigital" 
            width={140} 
            height={35} 
            priority
          /> */}
          <img src="/img/logo.png" alt="ondigital" />
        </Link>

        {/* MENU DESKTOP */}
        <nav className="nav-desktop">
          <Link href="/" className="nav-link active">Accueil</Link>
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/realisations" className="nav-link">Réalisations</Link>
          <Link href="/equipe" className="nav-link">Équipe</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>

        {/* CTA DESKTOP */}
        <div className="nav-cta-desktop">
          <Link href="/contact" className="btn-cta">
            <i className="fa-regular fa-circle-check"></i> Devis gratuit
          </Link>
        </div>

        {/* BURGER MENU MOBILE */}
        <button className="burger-menu" onClick={toggleMenu} aria-label="Toggle menu">
          <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </div>

      {/* RIDEAU / OVERLAY MOBILE (Affiche le menu de ta 2ème capture) */}
      <div className={`nav-mobile-overlay ${isOpen ? "open" : ""}`}>
        <div className="nav-mobile-header">
          {/* <Image 
            src="/img/logo.png" 
            alt="OnDigital" 
            width={140} 
            height={35} 
          /> */}
          <img src="/img/logo.png" alt="ondigital" />
          <button className="close-menu" onClick={toggleMenu}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <nav className="nav-mobile-links">
          <Link href="/" className="nav-mobile-link" onClick={toggleMenu}>Accueil</Link>
          <Link href="/services" className="nav-mobile-link" onClick={toggleMenu}>Services</Link>
          <Link href="/realisations" className="nav-mobile-link" onClick={toggleMenu}>Réalisations</Link>
          <Link href="/equipe" className="nav-mobile-link" onClick={toggleMenu}>Équipe</Link>
          <Link href="/contact" className="nav-mobile-link" onClick={toggleMenu}>Contact</Link>
          
          <Link href="/contact" className="btn-cta mobile-cta" onClick={toggleMenu}>
            <i className="fa-regular fa-circle-check"></i> Devis gratuit
          </Link>
        </nav>
      </div>
    </header>
  );
}