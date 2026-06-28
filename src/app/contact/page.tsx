"use client";

import React, { FormEvent } from 'react';

export default function ContactPage() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Logique de soumission ici
  };

  return (
    <main className="contact-page">
      <div className="contact-container">
        
        {/* EN-TÊTE DE LA PAGE */}
        <div className="contact-header">
          <div className="section-badge">CONTACT</div>
          <h1 className="contact-title">
            Parlons de votre <span className="text-italic-blue">projet.</span>
          </h1>
          <p className="contact-subtitle">
            Une idée, un besoin, une question ? Nous vous répondons sous 24h.
          </p>
        </div>

        {/* CONTENU PRINCIPAL EN DEUX COLONNES */}
        <div className="contact-content">
          
          {/* COLONNE GAUCHE : INFOS DE CONTACT */}
          <div className="contact-info-side">
            <div className="info-blocks">
              
              {/* BLOCK EMAIL */}
              <div className="info-block">
                <div className="info-icon-box">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="info-text">
                  <span className="info-label">EMAIL</span>
                  <a href="mailto:supportondigital@gmail.com" className="info-value">supportondigital@gmail.com</a>
                </div>
              </div>

              {/* BLOCK TÉLÉPHONE */}
              <div className="info-block">
                <div className="info-icon-box">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="info-text">
                  <span className="info-label">TÉLÉPHONE</span>
                  <span className="info-value">+229 01 00 00 00 00</span>
                </div>
              </div>

              {/* BLOCK LOCALISATION */}
              <div className="info-block">
                <div className="info-icon-box">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="info-text">
                  <span className="info-label">LOCALISATION</span>
                  <span className="info-value">Cotonou, Bénin</span>
                </div>
              </div>

            </div>

            {/* RÉSEAUX SOCIAUX SOUCHÉS */}
            <div className="contact-socials">
              <a href="#" className="contact-social-btn"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#" className="contact-social-btn"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="contact-social-btn"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="contact-social-btn"><i className="fa-brands fa-x-twitter"></i></a>
            </div>
          </div>

          {/* COLONNE DROITE : LE FORMULAIRE DE CONTACT */}
          <div className="contact-form-side">
            <form onSubmit={handleSubmit} className="contact-form">
              
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <div className="input-wrapper">
                    <i className="fa-solid fa-user input-icon"></i>
                    <input type="text" id="name" placeholder="" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <div className="input-wrapper">
                    <i className="fa-solid fa-envelope input-icon"></i>
                    <input type="email" id="email" placeholder="" required />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">Téléphone</label>
                <div className="input-wrapper">
                  <i className="fa-solid fa-phone input-icon"></i>
                  <input type="tel" id="phone" placeholder="" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  placeholder="Parlez-nous de votre projet..." 
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-submit-contact">
                <i className="fa-solid fa-paper-plane"></i> Envoyer
              </button>

            </form>
          </div>

        </div>

      </div>
    </main>
  );
}