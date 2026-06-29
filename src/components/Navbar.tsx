"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // <--- AJOUT ICI

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // <--- RÉCUPÈRE L'URL ACTUELLE (ex: "/" ou "/services")

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* LOGO */}
        <Link href="/" className="navbar-logo">
          <img src="/img/logo.png" alt="ondigital" />
        </Link>

        {/* MENU DESKTOP */}
        <nav className="nav-desktop">
          <Link href="/" className={`nav-link ${pathname === "/" ? "active" : ""}`}>Accueil</Link>
          <Link href="/services" className={`nav-link ${pathname === "/services" ? "active" : ""}`}>Services</Link>
          <Link href="/realisations" className={`nav-link ${pathname === "/realisations" ? "active" : ""}`}>Réalisations</Link>
          <Link href="/equipe" className={`nav-link ${pathname === "/equipe" ? "active" : ""}`}>Équipe</Link>
          <Link href="/blog" className={`nav-link ${pathname === "/blog" ? "active" : ""}`}>Blog</Link>
          <Link href="/contact" className={`nav-link ${pathname === "/contact" ? "active" : ""}`}>Contact</Link>
        </nav>

        {/* CTA DESKTOP */}
        <div className="nav-cta-desktop">
          <Link href="/devis" className="btn-cta">
            <i className="fa-regular fa-circle-check"></i> Devis gratuit
          </Link>
        </div>

        {/* BURGER MENU MOBILE */}
        <button className="burger-menu" onClick={toggleMenu} aria-label="Toggle menu">
          <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </div>

      {/* RIDEAU / OVERLAY MOBILE */}
      <div className={`nav-mobile-overlay ${isOpen ? "open" : ""}`}>
        <div className="nav-mobile-header">
          <img src="/img/logo.png" alt="ondigital" />
          <button className="close-menu" onClick={toggleMenu}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <nav className="nav-mobile-links">
          <Link href="/" className={`nav-mobile-link ${pathname === "/" ? "active" : ""}`} onClick={toggleMenu}>Accueil</Link>
          <Link href="/services" className={`nav-mobile-link ${pathname === "/services" ? "active" : ""}`} onClick={toggleMenu}>Services</Link>
          <Link href="/realisations" className={`nav-mobile-link ${pathname === "/realisations" ? "active" : ""}`} onClick={toggleMenu}>Réalisations</Link>
          <Link href="/equipe" className={`nav-mobile-link ${pathname === "/equipe" ? "active" : ""}`} onClick={toggleMenu}>Équipe</Link>
          <Link href="/blog" className={`nav-mobile-link ${pathname === "/blog" ? "active" : ""}`} onClick={toggleMenu}>Blog</Link>
          <Link href="/contact" className={`nav-mobile-link ${pathname === "/contact" ? "active" : ""}`} onClick={toggleMenu}>Contact</Link>
          
          <Link href="/devis" className="btn-cta mobile-cta" onClick={toggleMenu}>
            <i className="fa-regular fa-circle-check"></i> Devis gratuit
          </Link> 
        </nav>
      </div>
    </header>
  );
}