"use client";

import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  stars: number;
  comment: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Afiwa Agbodjan",
      role: "Fondatrice",
      company: "WaxDesign",
      image: "/img/testimonials/user1.jpg", // À placer dans public/img/testimonials/
      stars: 5,
      comment: "L'équipe a su capter exactement l'essence de notre marque pour notre site e-commerce. Depuis le lancement, nos commandes en ligne ont doublé au Bénin !"
    },
    {
      id: 2,
      name: "Koffi Mensah",
      role: "Directeur Général",
      company: "SoneX",
      image: "/img/testimonials/user2.jpg",
      stars: 5,
      comment: "Un professionnalisme rare. Leur accompagnement sur nos campagnes publicitaires Meta Ads a transformé notre visibilité à Cotonou. Je recommande vivement."
    },
    {
      id: 3,
      name: "Chantal Dovonou",
      role: "Responsable Communication",
      company: "BioSante",
      image: "/img/testimonials/user3.jpg",
      stars: 5,
      comment: "Le travail sur notre identité graphique et nos supports réseaux sociaux est incroyable. Les retours de nos clients sont unanimes : c'est pro et épuré."
    },
    {
      id: 4,
      name: "Marc Alao",
      role: "Promoteur",
      company: "ImmoBénin",
      image: "/img/testimonials/user4.jpg",
      stars: 5,
      comment: "Un site internet rapide, fluide et qui génère des leads dès la première semaine. L'équipe technique maîtrise son sujet sur le bout des doigts."
    }
  ];

  // On double le tableau pour permettre un effet de défilement infini et fluide sans coupure visuelle
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        
        {/* EN-TÊTE */}
        <div className="testimonials-header">
          <div className="section-badge">TÉMOIGNAGES</div>
          <h2 className="testimonials-main-title">
            Ce que nos clients <span className="text-italic-blue">disent de nous.</span>
          </h2>
          <p className="testimonials-subtitle">
            La satisfaction de nos partenaires est notre plus belle réussite. Découvrez leurs retours d'expérience.
          </p>
        </div>

        {/* ZONE DU CARROUSEL INFINI */}
        <div className="testimonials-slider-wrapper">
          <div className="testimonials-track">
            {duplicatedTestimonials.map((item, index) => (
              <div className="testimonial-card" key={`${item.id}-${index}`}>
                
                {/* Étoiles de notation */}
                <div className="testimonial-stars">
                  {[...Array(item.stars)].map((_, idx) => (
                    <i key={idx} className="fa-solid fa-star"></i>
                  ))}
                </div>

                {/* Commentaire client */}
                <p className="testimonial-text">"{item.comment}"</p>

                {/* Infos profil de l'auteur */}
                <div className="testimonial-profile">
                  <div className="profile-img-box">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="profile-info">
                    <h4 className="profile-name">{item.name}</h4>
                    <p className="profile-role">
                      {item.role}, <span className="profile-company">{item.company}</span>
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}