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
  tiktok: string,
  email: string;
}

export default function EquipePage() {
  const members: Member[] = [
    {
      name: "DEFODJI Thomas",
      role: "Graphiste designer",
      badge: "GRAPHISME",
      image: "/img/thomas.jpeg",
      description: "Expert en création visuelle et identité de marque. Maîtrise avancée de Photoshop et Canva pour des designs percutants.",
      linkedin: "https://www.linkedin.com/in/thomas-defodji-7b7b133a5/",
      facebook: "https://www.facebook.com/profile.php?id=61580999084062",
      twitter: "#",
      tiktok: "#",
      email: "mailto:thomasdefodji793@gmail.com"
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
      tiktok: "https://www.tiktok.com/@eme_lux",
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
      tiktok: "https://www.tiktok.com/@yayijovis",
      email: "mailto:yayijovisleprince@gmail.com"
    },
    {
      name: "TODAN Carlos",
      role: "Graphiste designer",
      badge: "GRAPHISME",
      image: "/img/carlos.jpeg",
      description: "Identités visuelles et supports graphiques pour des marques qui marquent.",
      linkedin: "https://www.linkedin.com/in/carlos-todan-aa86463b2",
      facebook: "https://www.facebook.com/carlos.todan",
      twitter: "#",
      tiktok: "#",
      email: "mailto:carlostodan@gmail.com"
    },
    {
  name: "MOUTOUAMA Thérance",
  role: "Monteur Vidéo",
  badge: "VIDÉO",
  image: "/img/Pro-therx.png",
  description: "Spécialiste du storytelling visuel et du montage dynamique. Transforme vos idées en vidéos percutantes (Reels, TikTok, Shorts).",
  linkedin: "https://www.linkedin.com/in/thérance-moutouama-81707a3b2",
  facebook: "https://www.facebook.com/theranxe",
  twitter: "https://www.tiktok.com/@the_ranxe",
  tiktok: "",
  email: "mailto:therance@ondigital.bj"
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
                 <a href={member.tiktok} className="member-social-btn" target="_blank" rel="noopener noreferrer">
  <i className="fa-brands fa-tiktok"></i>
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