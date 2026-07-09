"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="about-section reveal-section">
      <div className="text-section">
     <div className="section-badge text-left">À PROPOS</div>

      </div>
     
      <div className="about-container">
        <div className="about-image-side reveal-section">
          <div className="about-image-wrapper">
            <img
              src="/img/about-agency.jpg"
              alt="Équipe OnDigital travaillant sur des projets digitaux"
              className="about-img"
            />
          </div>
        </div>

        {/* BLOC DROITE : TEXTES & MISSIONS */}
        <div className="about-content-side reveal-section">
          <h2 className="about-title">
            Le digital au service de votre croissance, avec une seule obsession
            : <span className="text-italic-blue">les résultats.</span>
          </h2>

          <p className="about-mission">
            Notre mission est de propulser les entreprises ambitieuses vers de
            nouveaux sommets grâce à des solutions sur mesure en{" "}
            <strong>sites web</strong>, <strong>marketing digital</strong>,{" "}
            <strong>design graphique</strong> et{" "}
            <strong>production vidéo</strong>.
          </p>

          <div className="about-pillars-grid">
            {/* Pilier 1 : Engagement */}
            <div className="pillar-item">
              <div className="pillar-icon-box">
                <i className="fa-solid fa-handshake-angle"></i>
              </div>
              <div className="pillar-texts">
                <h3 className="pillar-title">Notre engagement professionnel</h3>
                <p className="pillar-desc">
                  Devenir le partenaire incontournable pour les entreprises
                  prêtes à investir concrètement dans leur croissance.
                </p>
              </div>
            </div>

            {/* Pilier 2 : Valeurs */}
            <div className="pillar-item reveal-section">
              <div className="pillar-icon-box">
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="pillar-texts">
                <h3 className="pillar-title">Nos valeurs fondamentales</h3>
                <p className="pillar-desc">
                  Transparence totale, innovation continue, excellence technique
                  et engagement absolu pour des résultats exceptionnels.
                </p>
              </div>
            </div>
          </div>

          {/* BOUTON D'ACTION DIRECT */}
          <div className="about-action-btn-wrapper reveal-section">
            <Link href="/contact" className="about-contact-btn">
              Contacter notre équipe <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
