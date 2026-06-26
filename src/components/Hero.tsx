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
              Planifier un appel <i className="fa-regular fa-calendar-check"></i>
            </Link>
            <Link href="/services" className="btn-hero-secondary">
              Découvrir nos services <i className="fa-solid fa-compass"></i>
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

        {/* BLOC DROITE : BENTO GRID VISUELS DÉFILANTS */}
        <div className="hero-visual-grid">
          
          {/* Colonne Gauche : Défile de Haut en Bas */}
          <div className="grid-col scroll-down">
            <div className="grid-col-track">
              {/* Groupe Initial */}
              <div className="grid-card"><Image src="/img/hero-web1.jpeg" alt="Web 1" width={290} height={180} priority /></div>
              <div className="grid-card"><Image src="/img/hero-web2.jpeg" alt="Web 2" width={280} height={170} priority /></div>
              <div className="grid-card"><Image src="/img/hero-market2.jpeg" alt="Market 2" width={290} height={180} priority /></div>
              {/* Doublon pour l'effet infini */}
              <div className="grid-card"><Image src="/img/hero-web1.jpeg" alt="Web 1" width={290} height={180} priority /></div>
              <div className="grid-card"><Image src="/img/hero-web2.jpeg" alt="Web 2" width={280} height={170} priority /></div>
              <div className="grid-card"><Image src="/img/hero-market2.jpeg" alt="Market 2" width={290} height={180} priority /></div>
            </div>
          </div>
          
          {/* Colonne Droite : Défile de Bas en Haut */}
          <div className="grid-col scroll-up">
            <div className="grid-col-track">
              {/* Groupe Initial */}
              <div className="grid-card"><Image src="/img/hero-graphic1.jpeg" alt="Graphic 1" width={290} height={200} priority /></div>
              <div className="grid-card"><Image src="/img/hero-markt1.jpeg" alt="Market 1" width={320} height={240} priority /></div>
              <div className="grid-card"><Image src="/img/hero-video1.jpeg" alt="Video 1" width={280} height={170} priority /></div>
              {/* Doublon pour l'effet infini */}
              <div className="grid-card"><Image src="/img/hero-graphic1.jpeg" alt="Graphic 1" width={290} height={200} priority /></div>
              <div className="grid-card"><Image src="/img/hero-markt1.jpeg" alt="Market 1" width={320} height={240} priority /></div>
              <div className="grid-card"><Image src="/img/hero-video1.jpeg" alt="Video 1" width={280} height={170} priority /></div>
            </div>
          </div>

        </div>


        {/* BLOC : VISIBLE UNIQUEMENT SUR TÉLÉPHONE (2 BANDES OPPOSÉES) */}
        <div className="hero-mobile-slider">
          
          {/* Bande 1 : Défile vers la GAUCHE */}
          <div className="mobile-slider-track scroll-left">
            <div className="grid-card"><Image src="/img/hero-web1.jpeg" alt="Web 1" width={200} height={130} priority /></div>
            <div className="grid-card"><Image src="/img/hero-web2.jpeg" alt="Web 2" width={200} height={130} priority /></div>
            <div className="grid-card"><Image src="/img/hero-market2.jpeg" alt="Market 2" width={200} height={130} priority /></div>
            {/* Doublon Bande 1 */}
            <div className="grid-card"><Image src="/img/hero-web1.jpeg" alt="Web 1" width={200} height={130} priority /></div>
            <div className="grid-card"><Image src="/img/hero-web2.jpeg" alt="Web 2" width={200} height={130} priority /></div>
            <div className="grid-card"><Image src="/img/hero-market2.jpeg" alt="Market 2" width={200} height={130} priority /></div>
          </div>

          {/* Bande 2 : Défile vers la DROITE */}
          <div className="mobile-slider-track scroll-right">
            <div className="grid-card"><Image src="/img/hero-graphic1.jpeg" alt="Graphic 1" width={200} height={130} priority /></div>
            <div className="grid-card"><Image src="/img/hero-markt1.jpeg" alt="Market 1" width={200} height={130} priority /></div>
            <div className="grid-card"><Image src="/img/hero-video1.jpeg" alt="Video 1" width={200} height={130} priority /></div>
            {/* Doublon Bande 2 */}
            <div className="grid-card"><Image src="/img/hero-graphic1.jpeg" alt="Graphic 1" width={200} height={130} priority /></div>
            <div className="grid-card"><Image src="/img/hero-markt1.jpeg" alt="Market 1" width={200} height={130} priority /></div>
            <div className="grid-card"><Image src="/img/hero-video1.jpeg" alt="Video 1" width={200} height={130} priority /></div>
          </div>

        </div>


      </div>
    </section>
  );
}