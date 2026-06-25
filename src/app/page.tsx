"use client";
import React, { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Link from 'next/link';

export default function Page() {

  const [showScrollTop, setShowScrollTop] = useState(false);

  // Détecter le scroll pour afficher ou masquer le bouton
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction pour remonter en haut en douceur
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Section principale d'accueil */}
      <Hero />
      
      {/* SECTION NOS SERVICES */}
      <section className="services-section">
        <div className="services-container">
          
          {/* EN-TÊTE DE LA SECTION */}
          <div className="services-header">
            <div className="section-badge">NOS SERVICES</div>
            <h2 className="services-title">
              Trois expertises, <span className="text-italic-blue">une équipe.</span>
            </h2>
            <p className="services-subtitle">
              Tout ce dont votre activité a besoin pour rayonner en ligne.
            </p>
          </div>

          {/* GRILLE DES TROIS CARTES */}
          <div className="services-grid">
            
            {/* CARTE 1 : MARKETING DIGITAL */}
            <div className="service-card">
              <div className="service-icon-wrapper">
                <i className="fa-solid fa-bullhorn"></i>
              </div>
              <h3 className="service-card-title">Marketing digital</h3>
              <p className="service-card-desc">
                Publicité en ligne, SEO, réseaux sociaux et stratégie de contenu pour attirer vos clients là où ils sont.
              </p>
              <ul className="service-list">
                <li><i className="fa-solid fa-circle-check"></i> Publicité Meta & Google Ads</li>
                <li><i className="fa-solid fa-circle-check"></i> Référencement naturel (SEO)</li>
                <li><i className="fa-solid fa-circle-check"></i> Community management</li>
                <li><i className="fa-solid fa-circle-check"></i> Email marketing</li>
              </ul>
            </div>

            {/* CARTE 2 : CRÉATION DE SITES WEB */}
            <div className="service-card">
              <div className="service-icon-wrapper">
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <h3 className="service-card-title">Création de sites web</h3>
              <p className="service-card-desc">
                Sites vitrines, e-commerce et applications web modernes, rapides et conçus pour voter.
              </p>
              <ul className="service-list">
                <li><i className="fa-solid fa-circle-check"></i> Sites vitrines sur mesure</li>
                <li><i className="fa-solid fa-circle-check"></i> Boutiques e-commerce</li>
                <li><i className="fa-solid fa-circle-check"></i> Applications web</li>
                <li><i className="fa-solid fa-circle-check"></i> Maintenance & SEO</li>
              </ul>
            </div>

            {/* CARTE 3 : GRAPHISME */}
            <div className="service-card">
              <div className="service-icon-wrapper">
                <i className="fa-solid fa-palette"></i>
              </div>
              <h3 className="service-card-title">Graphisme</h3>
              <p className="service-card-desc">
                Identité visuelle, logos, flyers, supports print et visuels pour vos réseaux sociaux.
              </p>
              <ul className="service-list">
                <li><i className="fa-solid fa-circle-check"></i> Logo & identité visuelle</li>
                <li><i className="fa-solid fa-circle-check"></i> Flyers & affiches</li>
                <li><i className="fa-solid fa-circle-check"></i> Visuels réseaux sociaux</li>
                <li><i className="fa-solid fa-circle-check"></i> Charte graphique</li>
              </ul>
            </div>

          </div>

          {/* BOUTON DE BAS DE SECTION */}
          <div className="services-footer-action">
            <Link href="/services" className="btn-services-all">
              Voir tous nos services <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

        </div>
      </section>

      {/* C'est ici qu'on va empiler les prochaines sections à la suite */}

      {/* SECTION PROCESSUS */}
      <section className="process-section">
        <div className="process-container">
          
          {/* EN-TÊTE DE LA SECTION */}
          <div className="process-header">
            <div className="section-badge">PROCESSUS</div>
            <h2 className="process-title">
              Votre projet en <span className="text-italic-blue">3 étapes.</span>
            </h2>
          </div>

          {/* GRILLE DES TROIS ÉTAPES */}
          <div className="process-grid">
            
            {/* ÉTAPE 1 */}
            <div className="process-card">
              <div className="process-number">
                01<span className="number-dot">.</span>
              </div>
              <h3 className="process-card-title">Appel stratégique</h3>
              <p className="process-card-desc">
                30 minutes pour comprendre vos objectifs, votre secteur et vos clients.
              </p>
            </div>

            {/* ÉTAPE 2 */}
            <div className="process-card">
              <div className="process-number">
                02<span className="number-dot">.</span>
              </div>
              <h3 className="process-card-title">Création</h3>
              <p className="process-card-desc">
                Design, textes, structure : on s'occupe de tout. Vous validez à chaque étape.
              </p>
            </div>

            {/* ÉTAPE 3 */}
            <div className="process-card">
              <div className="process-number">
                03<span className="number-dot">.</span>
              </div>
              <h3 className="process-card-title">Lancement</h3>
              <p className="process-card-desc">
                Votre projet est livré en 3 à 6 semaines, optimisé et prêt à performer.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION FAQ */}
      <section className="faq-section">
        <div className="faq-container">
          
          {/* EN-TÊTE DE LA SECTION */}
          <div className="faq-header">
            <div className="section-badge">FAQ</div>
            <h2 className="faq-title">
              Questions <span className="text-italic-blue">fréquentes.</span>
            </h2>
          </div>

          {/* LISTE DES ACCORDÉONS */}
          <div className="faq-list">
            
            <details className="faq-item">
              <summary className="faq-question">
                En combien de temps livrez-vous un site web ?
                <i className="fa-solid fa-chevron-down faq-icon"></i>
              </summary>
              <div className="faq-answer">
                <p>Un site vitrine standard est généralement livré en 2 à 3 semaines. Pour des projets plus complexes, des plateformes e-commerce ou des applications web sur mesure, le délai varie entre 4 et 8 semaines selon le cahier des charges.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                Proposez-vous un suivi après la livraison ?
                <i className="fa-solid fa-chevron-down faq-icon"></i>
              </summary>
              <div className="faq-answer">
                <p>Oui, absolument. Nous incluons toujours une période de maintenance et d'assistance technique après le lancement pour veiller au bon fonctionnement de votre site, effectuer les mises à jour de sécurité et répondre à vos questions.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                Comment fonctionne le paiement ?
                <i className="fa-solid fa-chevron-down faq-icon"></i>
              </summary>
              <div className="faq-answer">
                <p>En général, notre processus standard fonctionne avec un acompte à la commande pour démarrer la phase de design, suivi d'un solde à la livraison ou selon des jalons intermédiaires définis ensemble avant le lancement du développement.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                Puis-je demander des modifications ?
                <i className="fa-solid fa-chevron-down faq-icon"></i>
              </summary>
              <div className="faq-answer">
                <p>Bien sûr ! Durant la phase de création et de maquettage, nous planifions des sessions de révision pour ajuster le design, la structure et les contenus afin que le résultat final corresponde parfaitement à vos attentes.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                Travaillez-vous avec des indépendants ?
                <i className="fa-solid fa-chevron-down faq-icon"></i>
              </summary>
              <div className="faq-answer">
                <p>Notre équipe interne centralise la majorité des compétences clés. Cependant, selon les besoins spécifiques de votre projet (illustrations complexes, shootings photo, etc.), nous pouvons collaborer avec des experts de confiance.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                Gérez-vous aussi les réseaux sociaux ?
                <i className="fa-solid fa-chevron-down faq-icon"></i>
              </summary>
              <div className="faq-answer">
                <p>Oui, notre pôle Marketing Digital s'occupe du community management, de la création de chartes graphiques adaptées aux réseaux, de la planification de contenus et de la gestion de vos campagnes publicitaires Meta & Google Ads.</p>
              </div>
            </details>

          </div>

        </div>
      </section>

 <PricingSection />

      {/* SECTION CTA - BANNIÈRE DE FIN */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-banner">
            
            <h2 className="cta-title">
              Prêt à <span className="text-italic-white">propulser </span> votre activité ?
            </h2>
            
            <div className="cta-action">
              <Link href="/contact" className="btn-cta-white">
                Réserver un appel stratégique
              </Link>
            </div>
            
            <p className="cta-note">
              Gratuit — Sans engagement
            </p>

          </div>
        </div>
      </section>


      <TestimonialsSection />


      {/* 6. BOUTON RETOUR EN HAUT FLOUTÉ / FIXE */}
      <button 
        className={`scroll-to-top-btn ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Retour en haut"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </>
  );
}