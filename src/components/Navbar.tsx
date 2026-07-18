"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Tableau pour générer les liens dynamiquement et appliquer l'index d'animation facilement
  const menuLinks = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/realisations", label: "Réalisations" },
    { href: "/equipe", label: "Équipe" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* LOGO */}
        <Link href="/" className="navbar-logo">
          <img src="/img/logo.png" alt="ondigital" />
        </Link>

        {/* MENU DESKTOP */}
        <nav className="nav-desktop">
          {menuLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`nav-link ${pathname === link.href ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
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
          {menuLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-mobile-link ${pathname === link.href ? "active" : ""}`}
              onClick={toggleMenu}
              style={{ "--i": index } as React.CSSProperties} /* index pour le décalage */
            >
              {link.label}
            </Link>
          ))}
          
          <Link 
            href="/devis" 
            className="btn-cta mobile-cta" 
            onClick={toggleMenu}
            style={{ "--i": menuLinks.length } as React.CSSProperties} /* Le CTA arrive en dernier */
          >
            <i className="fa-regular fa-circle-check"></i> Devis gratuit
          </Link> 
        </nav>
      </div>
    </header>
  );
}