"use client";

import React, { useRef } from 'react';

interface PosterProject {
  id: number;
  title: string;
  image: string;
}

export default function PosterCarouselSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const posters: PosterProject[] = [
    { id: 13, title: "Affiche Publicitaire", image: "/img/affiche-9.jpeg" }, 
    { id: 11, title: "Affiche Publicitaire", image: "/img/affiche-6.jpeg" }, 
    { id: 4, title: "Affiche Publicitaire", image: "/img/affiche-3.jpeg" }, 
    { id: 1, title: "Affiche Publicitaire", image: "/img/affiche-1.jpeg" }, 
    { id: 5, title: "Affiche Publicitaire", image: "/img/affiche-4.jpeg" }, 
    { id: 14, title: "Affiche Publicitaire", image: "/img/affiche-10.jpeg" }, 
    { id: 6, title: "Affiche Publicitaire - LM-Nails", image: "/img/affiche-lm-nails.jpeg" }, 
    { id: 7, title: "Birthday", image: "/img/affiche-15.jpeg" },
    { id: 2, title: "Affiche Publicitaire", image: "/img/affiche-2.jpeg" }, 
    { id: 8, title: "Affiche Catalogue - Nice's Collection", image: "/img/affiche-nices-collection.jpeg" },
    { id: 9, title: "Logo & Charte - Crown Studio", image: "/img/affiche.jpeg" },
    { id: 10, title: "Affiche Publicitaire", image: "/img/affiche-5.jpeg" }, 
    { id: 12, title: "Affiche Publicitaire", image: "/img/affiche-7.jpeg" }, 
    { id: 19, title: "Affiche Publicitaire", image: "/img/affiche-1.jpeg" }, 
    { id: 3, title: "Affiche Publicitaire", image: "/img/affiche-8.jpeg" }, 
    { id: 15, title: "Affiche Publicitaire", image: "/img/affiche-11.jpeg" }, 
    { id: 16, title: "Affiche Publicitaire", image: "/img/affiche-12.jpeg" }, 
    { id: 17, title: "Affiche Publicitaire", image: "/img/affiche-13.jpeg" }, 
    { id: 18, title: "Affiche Publicitaire", image: "/img/affiche-14.jpeg" }, 
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft } = carouselRef.current;
      const scrollAmount = direction === 'left' ? -330 : 330; // Correspond à la largeur de la carte + gap
      carouselRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="posters-section reveal-section">
      <div className="posters-container">
        
        {/* EN-TÊTE DE LA SECTION ÉPURÉE */}
        <div className="posters-header">
          <div className="header-text-side">
            <div className="section-badge">GRAPHISME</div>
            <h2 className="section-title">
              Nos affiches & <span className="text-italic-blue">visuels.</span>
            </h2>
          </div>
        </div>

        {/* CONTENEUR DU CAROUSEL (IMAGE SEULE + DRAG & SWIPE NATIF) */}
        <div className="posters-carousel-wrapper" ref={carouselRef}>
          {posters.map((poster) => (
            <div className="poster-card" key={poster.id}>
              <div className="poster-image-box">
                <img src={poster.image} alt={poster.title} className="poster-img" draggable="false" />
              </div>
            </div>
          ))}
        </div>

        {/* FLÈCHES DE DIRECTION SYSTÉMATIQUEMENT EN BAS ET CENTRÉES */}
        <div className="carousel-bottom-nav">
          <button className="nav-arrow-btn" onClick={() => scroll('left')} aria-label="Précédent">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="nav-arrow-btn" onClick={() => scroll('right')} aria-label="Suivant">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>

      </div>
    </section>
  );
}