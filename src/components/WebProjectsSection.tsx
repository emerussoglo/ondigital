"use client";

import React from 'react';

interface WebProject {
  id: number;
  title: string;
  categoryLabel: string;
  image: string;
  description: string;
  link: string;
}

export default function WebProjectsSection() {
  // Liste des projets de sites web (indépendante)
  const webProjects: WebProject[] = [
    {
      id: 1,
      title: "E-commerce ModaShop",
      categoryLabel: "SITES WEB",
      image: "/img/hero-video1.jpeg", 
      description: "Plateforme e-commerce complète de matériel informatique pour le marché béninois avec gestion de paniers et notifications.",
      link: "https://espanadeal.bj" // Redirection directe
    },
    {
      id: 2,
      title: "App mobile fintech",
      categoryLabel: "SITES WEB",
      image: "/img/web1.jpeg",
      description: "Système de gestion d'officine et tableau de bord de suivi des commandes de pharmacie en temps réel.",
      link: "#"
    }
  ];

  return (
    <section className="web-portfolio-section reveal-section">
      <div className="section-container">
        
        {/* EN-TÊTE DE LA SECTION */}
        <div className="section-header">
          <div className="section-badge">SITES WEB</div>
          <h2 className="section-title">
            Nos réalisations <span className="text-italic-blue">web.</span>
          </h2>
          <p className="section-subtitle">
            Des plateformes modernes, rapides et optimisées pour la conversion.
          </p>
        </div>

        {/* GRILLE DES SITES WEB */}
        <div className="web-portfolio-grid">
          {webProjects.map((project) => (
            <div className="web-project-card" key={project.id}>
              
              {/* Conteneur de l'image (sans aucun clic ni hover overlay de modale) */}
              <div className="web-project-image-box">
                <img src={project.image} alt={project.title} className="web-project-img" />
              </div>
              
              {/* Infos affichées directement */}
              <div className="web-project-info">
                <span className="web-project-cat-badge">{project.categoryLabel}</span>
                <h3 className="web-project-card-title">{project.title}</h3>
                <p className="web-project-card-desc">{project.description}</p>
                
                {/* Lien direct vers le site web */}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="web-project-link-btn"
                >
                  Visiter le site <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}