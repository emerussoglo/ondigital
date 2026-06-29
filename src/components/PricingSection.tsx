"use client";

import React from 'react';
import Link from 'next/link';

interface PricingPlan {
  title: string;
  price: string;
  period: string;
  badge?: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  popular: boolean;
}

export default function PricingSection() {
  const plans: PricingPlan[] = [
    {
      title: "Marketing Digital",
      price: "50 000",
      period: "/ mois",
      description: "Idéal pour booster votre visibilité locale et attirer des clients qualifiés régulièrement.",
      features: [
        "Gestion de 2 réseaux sociaux",
        "3 publications par semaine",
        "Campagnes Meta Ads / Google Ads (budget inclus)",
        "Rapport de performance mensuel",
        "Optimisation SEO locale (Google My Business)"
      ],
      ctaText: "Lancer mon acquisition",
      ctaLink: "/contact",
      popular: false
    },
    {
      title: "Création Web",
      price: "130 000",
      period: "unique",
      badge: "PLUS POPULAIRE",
      description: "Un site internet sur mesure, ultra-rapide et optimisé pour convertir vos visiteurs en clients.",
      features: [
        "Design personnalisé & 100% responsive",
        "Optimisation SEO pour Google",
        "Formulaire de contact / Devis en ligne",
        "Lien WhatsApp & réseaux sociaux",
        "Hébergement & Domaine offerts 1 an",
        "Formation à la gestion du site"
      ],
      ctaText: "Créer mon site web",
      ctaLink: "/contact",
      popular: true
    },
    {
  title: "Design & Production Vidéo",
  price: "60 000",
  period: "unique",
  description: "Le pack ultime pour booster votre image : une identité visuelle forte et des vidéos percutantes pour vos réseaux.",
  features: [
    "Conception de Logo moderne (3 propositions)",
    "Charte graphique (palettes & typographies)",
    "Supports Print (Affiches, Flyers & Visuels)",
    "Montage Vidéo pro (Reels, TikTok ou Shorts)",
    "Intégration d'effets visuels et audio",
    "Templates réseaux sociaux & Fichiers sources HD"
  ],
  ctaText: "Commander mon pack",
  ctaLink: "/contact",
  popular: false
}
  ];

  return (
    <section className="pricing-section reveal-section">
      <div className="pricing-container">
        
        {/* EN-TÊTE DE LA SECTION */}
        <div className="pricing-header ">
          <div className="section-badge">TARIFS</div>
          <h2 className="pricing-main-title">
            Des tarifs <span className="text-italic-blue">clairs</span>, adaptés à vos besoins.
          </h2>
          <p className="pricing-subtitle">
            Aucun frais caché. Choisissez la formule qui correspond au stade de développement de votre entreprise.
          </p>
        </div>

        {/* GRILLE DES FORFAITS */}
        <div className="pricing-grid reveal-section">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card ${plan.popular ? 'popular-card' : ''}`}
            >
              {plan.popular && plan.badge && (
                <span className="popular-badge">{plan.badge}</span>
              )}
              
              <div className="card-top reveal-section">
                <h3 className="plan-title">{plan.title}</h3>
                <p className="plan-desc">{plan.description}</p>
                <div className="plan-price-block">
                à partir de   <span className="price-amount"> { plan.price}</span>
                  <span className="price-currency">FCFA</span>
                  <span className="price-period">{plan.period}</span>
                </div>
              </div>

              <div className="card-separator"></div>

              {/* LISTE DES CARACTÉRISTIQUES */}
              <ul className="plan-features-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <i className="fa-solid fa-circle-check feature-icon"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* BOUTON D'ACTION */}
              <div className="card-bottom reveal-section">
                <Link 
                  href={plan.ctaLink} 
                  className={`pricing-cta-btn ${plan.popular ? 'btn-blue' : 'btn-outline'}`}
                >
                  {plan.ctaText}
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}