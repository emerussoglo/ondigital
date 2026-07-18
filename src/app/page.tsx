"use client";
import React, { useState, useEffect, useRef } from 'react';
import Hero from '@/components/Hero';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PosterCarouselSection from '@/components/PosterCarouselSection';
import WebProjectsSection from '@/components/WebProjectsSection';
import AboutSection from '@/components/AboutSection';
import Link from 'next/link';

export default function Page() {

    // 1. AJOUTE CET ÉTAT TOUT EN HAUT DU COMPOSANT
const [isLoading, setIsLoading] = useState(true);

  const [showScrollTop, setShowScrollTop] = useState(false);


  // Gestion de l'effet d'apparition au défilement (Reveal Effect)
useEffect(() => {
  // 🟢 AJOUT : Si la page charge encore, on ne fait rien
  if (isLoading) return; 

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    }
  );

  const sections = document.querySelectorAll('.reveal-section');
  sections.forEach((section) => observer.observe(section));

  return () => {
    sections.forEach((section) => observer.unobserve(section));
  };
}, [isLoading]); // 🟢 CORRECTION : On ajoute isLoading ici pour recalculer les positions dès que le loader part
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


// 2. AJOUTE CE USEEFFECT POUR MASQUER LE LOADER UNE FOIS LE COMPOSANT MONTÉ
useEffect(() => {
  // Un léger délai de 800ms pour laisser l'animation s'exprimer proprement
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 900);

  return () => clearTimeout(timer);
}, []);

 if (isLoading) {
  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
}

 return (
    <>
      {/* Section principale d'accueil */}
      <Hero />
      <AboutSection/>
       
      {/* SECTION NOS SERVICES */}
      <section className="services-section reveal-section">
        <div className="services-container reveal-section">
          
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
          <div className="services-grid reveal-section">
            
            {/* CARTE 1 : MARKETING DIGITAL */}
            <div className="service-card ">
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

            {/* CARTE 3 : GRAPHISME & VIDÉO */}
<div className="service-card">
  <div className="service-icon-wrapper">
    <i className="fa-solid fa-photo-film"></i> {/* Icône mise à jour pour représenter le design + la vidéo */}
  </div>
  
  <h3 className="service-card-title">Design & Vidéo</h3>
  
  <p className="service-card-desc">
    Identité visuelle, affiches percutantes et montage vidéo professionnel pour captiver votre audience sur les réseaux sociaux.
  </p>
  
  <ul className="service-list">
    <li><i className="fa-solid fa-circle-check"></i> Logo & identité de marque</li>
    <li><i className="fa-solid fa-circle-check"></i> Affiches publicitaires & Flyers</li>
    <li><i className="fa-solid fa-circle-check"></i> Montage vidéo (Reels, TikTok, Shorts)</li>
    <li><i className="fa-solid fa-circle-check"></i> Graphismes & visuels réseaux sociaux</li>
  </ul>
</div>

          </div>

          {/* BOUTON DE BAS DE SECTION */}
          <div className="services-footer-action reveal-section">
            <Link href="/services" className="btn-services-all">
              Voir tous nos services <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

        </div>
      </section>

      {/* C'est ici qu'on va empiler les prochaines sections à la suite */}

      {/* SECTION PROCESSUS */}
      <section className="process-section reveal-section">
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
            <div className="process-card reveal-section">
              <div className="process-number">
                01<span className="number-dot">.</span>
              </div>
              <h3 className="process-card-title">Appel stratégique</h3>
              <p className="process-card-desc">
                30 minutes pour comprendre vos objectifs, votre secteur et vos clients.
              </p>
            </div>

            {/* ÉTAPE 2 */}
            <div className="process-card reveal-section">
              <div className="process-number">
                02<span className="number-dot">.</span>
              </div>
              <h3 className="process-card-title">Création</h3>
              <p className="process-card-desc">
                Design, textes, structure : on s'occupe de tout. Vous validez à chaque étape.
              </p>
            </div>

            {/* ÉTAPE 3 */}
            <div className="process-card reveal-section">
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

<WebProjectsSection />
<PosterCarouselSection />

      {/* SECTION FAQ */}
      <section className="faq-section reveal-section">
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
      <section className="cta-section reveal-section">
  <div className="cta-container">
    <div className="cta-banner">
      
      {/* 🟢 LES FILTRES SVG SONT DISCRÈTEMENT PLACÉS ICI */}
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
        <filter width="300%" x="-100%" height="300%" y="-100%" id="unopaq">
          <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 9 0" />
        </filter>
        <filter width="300%" x="-100%" height="300%" y="-100%" id="unopaq2">
          <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 3 0" />
        </filter>
        <filter width="300%" x="-100%" height="300%" y="-100%" id="unopaq3">
          <feColorMatrix values="1 0 0 0.2 0  0 1 0 0.2 0  0 0 1 0.2 0  0 0 0 2 0" />
        </filter>
      </svg>
      
      <h2 className="cta-title">
        Prêt à <span className="text-italic-white">propulser </span> votre activité ?
      </h2>
      
      {/* 🟢 BLOC BOUTON EFFECT INTÉGRÉ ICI */}
      <div className="cta-action reveal-section">
        <div className="uiverse-button-wrapper">
          
          {/* Le vrai lien Next.js cliquable qui reçoit l'interaction */}
          <Link href="/contact" className="real-button-link">
            Réserver un appel stratégique
          </Link>
          
          {/* Les couches visuelles de lueurs animées */}
          <div className="button-visual-container">
            <div className="spin spin-blur"></div>
            <div className="spin spin-intense"></div>
            <div className="button-border">
              <div className="spin spin-inside"></div>
              {/* Gardien de la dimension/taille du bouton */}
              <div className="button-fake-text">
                Réserver un appel stratégique
              </div>
            </div>
          </div>

        </div>
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