"use client";

import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: 'web' | 'marketing' | 'graphisme';
  categoryLabel: string;
  image: string;
  description: string;
  link?: string; // Optionnel (uniquement pour les sites web)
}

export default function RealisationsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('tous');

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce ModaShop",
      category: "web",
      categoryLabel: "SITES WEB",
      image: "/img/hero-video1.jpeg", 
      description: "Plateforme e-commerce complète de matériel informatique pour le marché béninois avec gestion de paniers et notifications.",
      link: "https://espanadeal.bj"
    },
    {
      id: 2,
      title: "App mobile fintech",
      category: "web",
      categoryLabel: "SITES WEB",
      image: "/img/web1.jpeg",
      description: "Système de gestion d'officine et tableau de bord de suivi des commandes de pharmacie en temps réel.",
      link: "#"
    },
    {
      id: 3,
      title: "Campagne Instagram",
      category: "marketing",
      categoryLabel: "MARKETING",
      image: "/img/web3.jpeg",
      description: "Création de contenu, ligne éditoriale et stratégie d'acquisition sur les réseaux sociaux pour booster l'engagement visuel."
    },
    {
      id: 4,
      title: "Vidéo promotionnelle",
      category: "marketing",
      categoryLabel: "MARKETING",
      image: "/img/hero-video1.jpeg",
      description: "Production d'une vidéo courte et dynamique optimisée pour les campagnes publicitaires Ads."
    }, 
    {
      id: 5,
      title: "Logo Crown Studio",
      category: "graphisme",
      categoryLabel: "GRAPHISME",
      image: "/img/affiche.jpeg",
      description: "Charte graphique complète, logo et supports de communication pour le Centre Sèwèdo pour le bien-être humain."
    },
    {
  id: 6,
  title: "Affiche Publicitaire - LM-Nails",
  category: "graphisme",
  categoryLabel: "GRAPHISME / PRINT",
  image: "/img/affiche-lm-nails.jpeg",
  description: "Création d'un visuel publicitaire pour un salon de manucure et esthétique. Valorisation des services (Nail Art, Extensions) et intégration optimisée des réseaux sociaux pour maximiser la visibilité locale."
},
{
  id: 7,
  title: "Visuel Promotionnel - Formation Création de Sites IA",
  category: "graphisme",
  categoryLabel: "GRAPHISME / MARKETING",
  image: "/img/affiche-formation-ia.jpeg",
  description: "Conception d'une affiche de conversion pour une formation en ligne. Graphisme dynamique combinant l'imagerie Tech/IA avec des accroches claires et des badges de confiance pour stimuler les inscriptions."
},
{
  id: 8,
  title: "Affiche Catalogue - Nice's Collection",
  category: "graphisme",
  categoryLabel: "GRAPHISME / BRANDING",
  image: "/img/affiche-nices-collection.jpeg",
  description: "Design de support de communication pour une marque de parfums et cosmétiques. Mise en page élégante sous forme de mini-catalogue avec des bulles de produits pour une lecture fluide et attrayante."
}
  ];

  // Logique de filtrage des projets
  const filteredProjects = activeCategory === 'tous'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <main className="portfolio-page">
      <div className="portfolio-container">
        
        {/* EN-TÊTE DE LA PAGE */}
        <div className="portfolio-header">
          <div className="section-badge">RÉALISATIONS</div>
          <h1 className="portfolio-title">
            Nos derniers <span className="text-italic-blue">projets.</span>
          </h1>
          <p className="portfolio-subtitle">
            Un aperçu de ce que nous créons pour nos clients.
          </p>
        </div>

        {/* BARRE DE FILTRES RESPONSIVE (D'après image_04fc26.png) */}
        <div className="portfolio-filters">
          <button 
            className={`filter-btn ${activeCategory === 'tous' ? 'active' : ''}`}
            onClick={() => setActiveCategory('tous')}
          >
            Tous <i className="fa-solid fa-border-all"></i>
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'web' ? 'active' : ''}`}
            onClick={() => setActiveCategory('web')}
          >
            Sites web <i className="fa-solid fa-globe"></i>
          </button>
          <button  
            className={`filter-btn ${activeCategory === 'marketing' ? 'active' : ''}`}
            onClick={() => setActiveCategory('marketing')}
          >
            Marketing <i className="fa-solid fa-bullhorn"></i>
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'graphisme' ? 'active' : ''}`}
            onClick={() => setActiveCategory('graphisme')}
          >
            Graphisme <i className="fa-solid fa-palette"></i>
          </button>
        </div>

        {/* GRILLE DES PROJETS FILTRÉS */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div 
              className="project-card" 
              key={project.id}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image-box">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-hover-overlay">
                  <span className="view-project-btn">
                    <i className="fa-solid fa-expand"></i> Voir le projet
                  </span>
                </div>
              </div>
              <div className="project-info">
                <span className="project-cat-badge">{project.categoryLabel}</span>
                <h3 className="project-card-title">{project.title}</h3>
                {/* 🟢 AJOUT : Description visible directement sur la carte */}
                <p className="project-card-desc">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* MODALE DE MISE EN ÉVIDENCE (LIGHTBOX ÉPURÉE) */}
{selectedProject && (
  <div className="lightbox-overlay" onClick={() => setSelectedProject(null)}>
    <div className="lightbox-content solo-image" onClick={(e) => e.stopPropagation()}>
      
      <button className="lightbox-close-btn" onClick={() => setSelectedProject(null)}>
        <i className="fa-solid fa-xmark"></i>
      </button>

      {/* L'image prend toute la place */}
      <div className="lightbox-image-side">
        <img src={selectedProject.image} alt={selectedProject.title} />
      </div>

      {/* Uniquement le bouton si c'est un site web */}
      {selectedProject.category === 'web' && selectedProject.link && (
        <div className="lightbox-floating-action">
          <a 
            href={selectedProject.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="lightbox-action-btn"
          >
            Visiter le site web <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div> 
      )}

    </div>
  </div>
)}

      </div>
    </main>
  );
}