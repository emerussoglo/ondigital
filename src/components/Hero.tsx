"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        {/* BLOC GAUCHE : TEXTE & ACTIONS */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            3 CRÉNEAUX DISPONIBLES CE MOIS-CI
          </div>
          
          <h1 className="hero-title">
            La visibilité devient <br />
            <span className="text-gradient">simplicité.</span>
          </h1>
          
          <p className="hero-description">
            <strong>OnDigital</strong> — agence basée à <strong>Cotonou, Bénin</strong>, spécialisée en <strong>marketing digital</strong>, <strong>création de sites web</strong> et <strong>graphisme</strong>.
          </p>
          
          <div className="hero-actions">
            <Link href="/contact" className="btn-hero-primary">
              Planifier un appel gratuit
            </Link>
            <Link href="/services" className="btn-hero-secondary">
              Découvrir nos services
            </Link>
          </div>
          
          {/* STATISTIQUES */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">+50</span>
              <span className="stat-label">Projets livrés</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">+30</span>
              <span className="stat-label">Clients satisfaits</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5★</span>
              <span className="stat-label">Note moyenne</span>
            </div>
          </div>
        </div>

        {/* BLOC DROITE : BENTO GRID VISUELS */}
        <div className="hero-visual-grid">
          {/* Colonne Gauche de la grille */}
          <div className="grid-col">
            <div className="grid-card size-laptop">
              <Image src="/img/hero-web1.jpeg" alt="Création E-commerce Next.js" width={320} height={200} priority />
            </div>
            <div className="grid-card size-logo">
              <Image src="/img/hero-web2.jpeg" alt="Design Identité Visuelle" width={320} height={200} priority />
            </div>
            <div className="grid-card size-banner">
              <Image src="/img/hero-market2.jpeg" alt="Marketing Louer Event" width={320} height={160} priority />
            </div>
          </div>
          
          {/* Colonne Droite de la grille */}
          <div className="grid-col mt-translate">
            <div className="grid-card size-mockups">
              <Image src="/img/hero-graphic1.jpeg" alt="Applications mobiles" width={320} height={240} priority />
            </div>
            <div className="grid-card size-feed">
              <Image src="/img/hero-markt1.jpeg" alt="Social Media Grid" width={320} height={220} priority />
            </div>
            <div className="grid-card size-video">
              <Image src="/img/hero-video1.jpeg" alt="Production Vidéo" width={320} height={180} priority />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}