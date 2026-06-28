"use client";

import React from 'react';

interface Member {
  name: string;
  role: string;
  badge: string;
  image: string;
  description: string;
  linkedin: string;
  facebook: string;
  twitter: string;
  email: string;
}

export default function EquipePage() {
  const members: Member[] = [
    {
      name: "DEFODJI Thomas",
      role: "Marketing Digital",
      badge: "MARKETING",
      image: "/img/thomas.jpeg",
      description: "10 ans en stratégie digitale et acquisition. Pilote la performance des campagnes.",
      linkedin: "#",
      facebook: "https://www.facebook.com/profile.php?id=61580999084062",
      twitter: "#",
      email: "mailto:thomas@ondigital.bj"
    },
    {
      name: "SOGLO Emérus",
      role: "Développeur web",
      badge: "DÉVELOPPEMENT WEB",
      image: "/img/emerus.jpeg",
      description: "Spécialiste des sites rapides, sécurisés et orientés conversion.",
      linkedin: "https://www.linkedin.com/in/em%C3%A9rus-soglo-396aba3b9/",
      facebook: "https://www.facebook.com/eme.lux.8609",
      twitter: "#",
      email: "mailto:emerussoglo@gmail.com"
    },
    {
      name: "YAYI Jovis",
      role: "Développeur web",
      badge: "DÉVELOPPEMENT WEB",
      image: "/img/jovis.jpeg",
      description: "Spécialiste des sites rapides, sécurisés et orientés conversion.",
      linkedin: "https://www.linkedin.com/in/jovisleprinceyayi/",
      facebook: "https://www.facebook.com/jovis.yayi.2025",
      twitter: "#",
      email: "mailto:yayijovisleprince@gmail.com"
    },
    {
      name: "TODAN Carlos",
      role: "Graphiste designer",
      badge: "GRAPHISME",
      image: "/img/carlos.jpeg",
      description: "Identités visuelles et supports graphiques pour des marques qui marquent.",
      linkedin: "#",
      facebook: "https://www.facebook.com/carlos.todan",
      twitter: "#",
      email: "mailto:carlos@ondigital.bj"
    }
  ];

  return (
    <main className="team-page">
      <div className="team-container">
        
        {/* EN-TÊTE DE LA SECTION */}
        <div className="team-header">
          <div className="section-badge">NOTRE ÉQUIPE</div>
          <h1 className="team-title">
            Des talents <span className="text-italic-blue">complémentaires.</span>
          </h1>
          <p className="team-subtitle">
            Marketing, développement et création : trois expertises réunies sous un même toit, à Cotonou, pour faire grandir votre activité.
          </p>
        </div>

        {/* GRILLE DES MEMBRES */}
        <div className="team-grid">
          {members.map((member, index) => (
            <div className="member-card" key={index}>
              
              {/* CONTENEUR IMAGE AVEC GRADIENT ET BADGE */}
              <div className="member-image-wrapper">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="member-img"
                />
                <div className="member-overlay-gradient"></div>
                <span className="member-badge-role">{member.badge}</span>
                
                <div className="member-meta-overlay">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                </div>
              </div>

              {/* DESCRIPTION ET RÉSEAUX SOCIAUX EN BAS */}
              <div className="member-info-bottom">
                <p className="member-desc">{member.description}</p>
                
                <div className="member-socials">
                  <a href={member.linkedin} className="member-social-btn">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href={member.facebook} className="member-social-btn">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href={member.twitter} className="member-social-btn">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href={member.email} className="member-social-btn">
                    <i className="fa-solid fa-envelope"></i>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}