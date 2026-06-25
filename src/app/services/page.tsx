"use client";

import React from 'react';
import Link from 'next/link';

interface SubService {
  title: string;
  desc: string;
  iconClass: string;
}

interface ServiceCategory {
  title: string;
  subtitle: string;
  mainIconClass: string;
  items: SubService[];
}

export default function ServicesPage() {
  const servicesData: ServiceCategory[] = [
    {
      title: "Marketing digital",
      subtitle: "Faites-vous trouver et choisir par vos futurs clients.",
      mainIconClass: "fa-solid fa-bullhorn",
      items: [
        {
          title: "SEO & référencement",
          desc: "Apparaissez en premier sur Google quand vos clients cherchent vos services.",
          iconClass: "fa-solid fa-magnifying-glass"
        },
        {
          title: "Publicité en ligne",
          desc: "Campagnes Meta Ads, Google Ads et LinkedIn pilotées par la performance.",
          iconClass: "fa-solid fa-crosshairs"
        },
        {
          title: "Réseaux sociaux",
          desc: "Community management, création de contenu et stratégie éditoriale.",
          iconClass: "fa-solid fa-share-nodes"
        },
        {
          title: "Email marketing",
          desc: "Newsletters et automations qui convertissent vos abonnés en clients.",
          iconClass: "fa-solid fa-envelope-open-text"
        }
      ]
    },
    {
      title: "Création de sites web",
      subtitle: "Des sites rapides, modernes et orientés conversion.",
      mainIconClass: "fa-solid fa-laptop",
      items: [
        {
          title: "Sites vitrines",
          desc: "Site sur mesure, 100% responsive et optimisé pour Google.",
          iconClass: "fa-solid fa-globe"
        },
        {
          title: "E-commerce",
          desc: "Boutique complète : catalogue, paiement, livraison, suivi.",
          iconClass: "fa-solid fa-cart-shopping"
        },
        {
          title: "Applications web",
          desc: "Outils sur mesure pour digitaliser et automatiser vos processus.",
          iconClass: "fa-solid fa-mobile-screen-button"
        },
        {
          title: "Maintenance",
          desc: "Mises à jour, sécurité, sauvegardes et petites évolutions.",
          iconClass: "fa-solid fa-screwdriver-wrench"
        }
      ]
    },
    {
      title: "Graphisme",
      subtitle: "Une image de marque cohérente et professionnelle.",
      mainIconClass: "fa-solid fa-palette",
      items: [
        {
          title: "Logo & identité visuelle",
          desc: "Logo, palette, typographies et charte graphique complète.",
          iconClass: "fa-solid fa-paint-roller"
        },
        {
          title: "Flyers & affiches",
          desc: "Supports print pour vos événements, promotions et communications.",
          iconClass: "fa-solid fa-file-image"
        },
        {
          title: "Visuels réseaux sociaux",
          desc: "Templates et carrousels percutants pour vos publications.",
          iconClass: "fa-solid fa-square-check"
        },
        {
          title: "Vidéos & motion",
          desc: "Vidéos promotionnelles courtes pour vos campagnes.",
          iconClass: "fa-solid fa-video"
        }
      ]
    }
  ];

  return (
    <main className="services-page">
      <div className="services-main-container">
        
        {/* EN-TÊTE PRINCIPALE DE LA PAGE */}
        <div className="services-main-header">
          <div className="section-badge">SERVICES</div>
          <h1 className="services-main-title">
            Tout pour faire <span className="text-italic-blue">rayonner</span> votre marque.
          </h1>
          <p className="services-main-subtitle">
            Marketing, web et graphisme : trois pôles d'expertise, une équipe coordonnée.
          </p>
        </div>

        {/* BOUCLE SUR CHAQUE CATÉGORIE DE SERVICE */}
        <div className="services-categories-stack">
          {servicesData.map((category, catIndex) => (
            <div className="services-cat-block" key={catIndex}>
              
              {/* Entête de la catégorie (Icône + Titre + Sub) */}
              <div className="cat-header-block">
                <div className="cat-icon-badge">
                  <i className={category.mainIconClass}></i>
                </div>
                <h2 className="cat-title">{category.title}</h2>
                <p className="cat-subtitle">{category.subtitle}</p>
              </div>

              {/* Grille des sous-services (4 colonnes) */}
              <div className="sub-services-grid">
                {category.items.map((item, itemIndex) => (
                  <div className="sub-service-card" key={itemIndex}>
                    <div className="sub-card-icon-wrapper">
                      <i className={item.iconClass}></i>
                    </div>
                    <h3 className="sub-card-title">{item.title}</h3>
                    <p className="sub-card-desc">{item.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* ACTION DE FIN : DEMANDER UN DEVIS */}
        <div className="services-cta-wrapper">
          <Link href="/contact" className="btn-services-cta">
            Demander un devis gratuit
          </Link>
        </div>

      </div>
    </main>
  );
}