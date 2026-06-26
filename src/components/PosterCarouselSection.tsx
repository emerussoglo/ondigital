"use client";

import React, { useRef } from 'react';

interface PosterProject {
  id: number;
  title: string;
  categoryLabel: string;
  image: string;
  description: string;
}

export default function PosterCarouselSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const posters: PosterProject[] = [
    {
      id: 6,
      title: "Affiche Publicitaire - LM-Nails",
      categoryLabel: "GRAPHISME / PRINT",
      image: "/img/affiche-lm-nails.jpeg",
      description: "Valorisation des services (Nail Art, Extensions) et intégration des réseaux sociaux pour maximiser la visibilité locale."
    },
    {
      id: 7,
      title: "Visuel Promotionnel - Formation IA",
      categoryLabel: "GRAPHISME / MARKETING",
      image: "/img/affiche-formation-ia.jpeg",
      description: "Conception d'une affiche de conversion combinant l'imagerie Tech/IA avec des accroches claires."
    },
    {
      id: 8,
      title: "Affiche Catalogue - Nice's Collection",
      categoryLabel: "GRAPHISME / BRANDING",
      image: "/img/affiche-nices-collection.jpeg",
      description: "Design de support sous forme de mini-catalogue avec des bulles de produits pour une lecture fluide."
    },
    {
      id: 9,
      title: "Logo & Charte - Crown Studio",
      categoryLabel: "IDENTITÉ VISUELLE",
      image: "/img/affiche.jpeg",
      description: "Création complète d'un univers de marque moderne et épuré adaptable sur tous supports."
    }
  ];

  // Fonction pour faire défiler le carrousel avec les boutons
  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      // On se déplace de la largeur d'une carte (environ 340px)
      const scrollAmount = direction === 'left' ? -340 : 340;
      carouselRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="posters-section reveal-section">
      <div className="posters-container">
        
        {/* EN-TÊTE DE LA SECTION AVEC LES FLÈCHES DE NAVIGATION */}
        <div className="posters-header">
          <div className="header-text-side">
            <div className="section-badge">GRAPHISME</div>
            <h2 className="section-title">
              Nos affiches & <span className="text-italic-blue">visuels.</span>
            </h2>
          </div>
          
          {/* Les flèches de direction */}
          <div className="carousel-actions-nav">
            <button className="nav-arrow-btn" onClick={() => scroll('left')} aria-label="Précédent">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="nav-arrow-btn" onClick={() => scroll('right')} aria-label="Suivant">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* CONTENEUR DU CAROUSEL DEFILANT */}
        <div className="posters-carousel-wrapper" ref={carouselRef}>
          {posters.map((poster) => (
            <div className="poster-card" key={poster.id}>
              
              {/* Image ajustée pour les affiches verticales (contain pour ne rien couper) */}
              <div className="poster-image-box">
                <img src={poster.image} alt={poster.title} className="poster-img" />
              </div>
              
              {/* Contenu textuel discret */}
              <div className="poster-info">
                <span className="poster-cat-badge">{poster.categoryLabel}</span>
                <h3 className="poster-card-title">{poster.title}</h3>
                <p className="poster-card-desc">{poster.description}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}