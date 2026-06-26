"use client";

import React, { useState } from 'react';

interface Article {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string; // Le résumé court visible au début
  fullContent: string[]; // Les paragraphes cachés qui vont se dérouler
}

export default function BlogPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const articles: Article[] = [
    {
      id: 1,
      title: "Pourquoi votre entreprise à Cotonou a absolument besoin d’un site web en 2026",
      category: "SITES WEB",
      date: "24 Juin 2026",
      readTime: "3 min",
      excerpt: "Aujourd'hui, ne pas avoir de site internet équivaut à être invisible pour la majorité de vos clients potentiels au Bénin. Découvrez pourquoi la transition numérique n'est plus une option.",
      fullContent: [
        "Plus de 80% des consommateurs effectuent une recherche en ligne avant d'acheter un produit ou de solliciter un service à Cotonou. Si vous n'apparaissez pas sur Google, vous offrez gracieusement ces clients à vos concurrents directs.",
        "Un site web bien conçu et optimisé en SEO agit comme un commercial disponible 24h/24 et 7j/7. Il présente vos services, asseoit votre crédibilité et permet de capter des prospects qualifiés même pendant votre sommeil.",
        "Chez OnDigital, nous créons des sites Next.js ultra-rapides qui s'adaptent parfaitement aux connexions mobiles locales, garantissant une expérience fluide et un taux de conversion maximal pour votre activité."
      ]
    },
    {
      id: 2,
      title: "5 erreurs fatales qui ruinent vos campagnes publicitaires Meta Ads",
      category: "MARKETING",
      date: "18 Juin 2026",
      readTime: "4 min",
      excerpt: "Vous dépensez de l'argent sur Facebook et Instagram mais les résultats ne suivent pas ? Le problème vient sûrement d'un de ces facteurs clés.",
      fullContent: [
        "La première erreur est un ciblage trop large ou mal défini. Diffuser une publicité pour un produit de niche à l'ensemble de la population réduit drastiquement l'efficacité de votre budget.",
        "Ensuite, le visuel (créative) joue un rôle crucial. Une affiche surchargée de texte ou de mauvaise qualité sera immédiatement ignorée par les utilisateurs qui font défiler leur fil d'actualité.",
        "Enfin, l'absence d'un appel à l'action (CTA) clair ou une page de destination trop lente font fuir les rares personnes intéressées. Optimisez vos visuels et testez vos tunnels de vente pour maximiser votre retour sur investissement."
      ]
    },
    {
      id: 3,
      title: "L'impact psychologique des couleurs sur l'identité visuelle de votre marque",
      category: "GRAPHISME",
      date: "10 Juin 2026",
      readTime: "3 min",
      excerpt: "Le choix des couleurs de votre logo et de votre charte graphique n'est pas qu'une question d'esthétique. Il dicte inconsciemment la perception de votre entreprise.",
      fullContent: [
        "Le bleu, par exemple, inspire la confiance, la sécurité et le professionnalisme. C'est pourquoi de nombreuses institutions financières et agences technologiques l'adoptent comme couleur principale.",
        "Le rouge capte l'attention, stimule l'excitation et l'urgence (souvent utilisé pour les promotions ou l'alimentation), tandis que le vert renvoie directement à la santé, la nature et l'éco-responsabilité.",
        "Avant de concevoir votre logo, analysez les valeurs fondamentales de votre marque et le message que vous souhaitez ancrer dans l'esprit de vos clients au Bénin pour choisir une palette cohérente."
      ]
    }
  ];

  const toggleArticle = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null); // On referme s'il était déjà ouvert
    } else {
      setExpandedId(id); // On ouvre le nouveau
    }
  };

  return (
    <main className="blog-page">
      <div className="blog-container">
        
        {/* EN-TÊTE DE LA PAGE */}
        <div className="blog-header">
          <div className="section-badge">NOTRE BLOG</div>
          <h1 className="blog-title">
            Conseils, guides & <span className="text-italic-blue">stratégies.</span>
          </h1>
          <p className="blog-subtitle">
            Des explications claires et directes pour propulser votre business.
          </p>
        </div>

        {/* LISTE DES ARTICLES */}
        <div className="blog-grid">
          {articles.map((article) => {
            const isExpanded = expandedId === article.id;
            return (
              <article 
                className={`blog-card ${isExpanded ? 'is-open' : ''}`} 
                key={article.id}
              >
                <div className="blog-card-meta">
                  <span className="blog-cat">{article.category}</span>
                  <span className="blog-date">{article.date} • {article.readTime} de lecture</span>
                </div>

                <h2 className="blog-card-title">{article.title}</h2>
                <p className="blog-card-excerpt">{article.excerpt}</p>

                {/* ZONE DÉROULANTE (Suite de l'article) */}
                <div className={`blog-expandable-content ${isExpanded ? 'expanded' : ''}`}>
                  <div className="inner-content">
                    {article.fullContent.map((paragraph, index) => (
                      <p key={index} className="blog-full-p">{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* BOUTON LIRE LA SUITE / REFERMER */}
                <button 
                  className="blog-read-more-btn"
                  onClick={() => toggleArticle(article.id)}
                >
                  {isExpanded ? (
                    <>Lire moins <i className="fa-solid fa-chevron-up"></i></>
                  ) : (
                    <>Lire la suite <i className="fa-solid fa-chevron-down"></i></>
                  )}
                </button>
              </article>
            );
          })}
        </div>

      </div>
    </main>
  );
}