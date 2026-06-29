"use client";

import React, { useState, useEffect } from 'react';

type ServiceType = 'web' | 'marketing' | 'design_video';

export default function DevisPage() {
  const [service, setService] = useState<ServiceType>('web');
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // --- ÉTATS POUR LES OPTIONS ---
  // Options Web
  const [webPages, setWebPages] = useState<number>(1);
  const [webType, setWebType] = useState<'vitrine' | 'ecommerce'>('vitrine');
  const [webHosting, setWebHosting] = useState<boolean>(false);

  // Options Marketing
  const [mktChannels, setMktChannels] = useState<{ [key: string]: boolean }>({ facebook: true, instagram: false, tiktok: false });
  const [mktDuration, setMktDuration] = useState<number>(1); // en mois

  // Options Design & Vidéo
  const [designPosters, setDesignPosters] = useState<number>(0);
  const [designVideos, setDesignVideos] = useState<number>(0);
  const [hasLogo, setHasLogo] = useState<boolean>(false);

  // --- LOGIQUE DE CALCUL DU PRIX ---
  useEffect(() => {
    let price = 0;

    if (service === 'web') {
      // Base: Vitrine 100k, E-commerce 250k
      price += webType === 'vitrine' ? 100000 : 250000;
      // 15k par page supplémentaire (la première est incluse dans la base)
      if (webPages > 1) price += (webPages - 1) * 15000;
      // Option hébergement + maintenance
      if (webHosting) price += 35000;
    } 
    
    else if (service === 'marketing') {
      // 40k par canal sélectionné
      const activeChannels = Object.values(mktChannels).filter(Boolean).length;
      price += activeChannels * 40000;
      // Multiplié par le nombre de mois
      price = price * mktDuration;
    } 
    
    else if (service === 'design_video') {
      if (hasLogo) price += 30000; // Option Logo
      price += designPosters * 10000; // 10k par affiche
      price += designVideos * 25000;  // 25k par montage vidéo
    }

    setTotalPrice(price);
  }, [service, webPages, webType, webHosting, mktChannels, mktDuration, designPosters, designVideos, hasLogo]);

  const handleChannelChange = (channel: string) => {
    setMktChannels(prev => ({ ...prev, [channel]: !prev[channel] }));
  };

  return (
    <main className="devis-page">
      <div className="devis-container">
        
        {/* EN-TÊTE */}
        <div className="devis-header">
          <div className="section-badge">DEVIS EN LIGNE</div>
          <h1 className="devis-title">Configurez votre <span className="text-italic-blue">projet.</span></h1>
          <p className="devis-subtitle">Estimez le coût de vos prestations en quelques clics de manière détaillée.</p>
        </div>

        <div className="devis-layout">
          
          {/* FORMULAIRE DE CONFIGURATION (GAUCHE) */}
          <div className="devis-form-side">
            
            {/* ETAPE 1 : CHOIX DU SERVICE */}
            <div className="form-step-box">
              <label className="step-label">1. Choisissez le service principal</label>
              <div className="service-selector-grid">
                <button 
                  className={`service-opt-btn ${service === 'web' ? 'active' : ''}`}
                  onClick={() => setService('web')}
                >
                  <i className="fa-solid fa-globe"></i> Sites Web
                </button>
                <button 
                  className={`service-opt-btn ${service === 'marketing' ? 'active' : ''}`}
                  onClick={() => setService('marketing')}
                >
                  <i className="fa-solid fa-bullhorn"></i> Marketing Digital
                </button>
                <button 
                  className={`service-opt-btn ${service === 'design_video' ? 'active' : ''}`}
                  onClick={() => setService('design_video')}
                >
                  <i className="fa-solid fa-photo-film"></i> Design & Vidéo
                </button>
              </div>
            </div>

            {/* ETAPE 2 : OPTIONS DÉTAILLÉES SELON LE SERVICE */}
            <div className="form-step-box">
              <label className="step-label">2. Personnalisez vos options</label>

              {/* CONFIGURATION SITES WEB */}
              {service === 'web' && (
                <div className="options-wrapper animated-fade">
                  <div className="option-field">
                    <span className="field-title">Type de plateforme</span>
                    <div className="option-radio-group">
                      <label className="radio-tile">
                        <input type="radio" name="webType" checked={webType === 'vitrine'} onChange={() => setWebType('vitrine')} />
                        <span className="tile-text">Site Vitrine / Pro</span>
                      </label>
                      <label className="radio-tile">
                        <input type="radio" name="webType" checked={webType === 'ecommerce'} onChange={() => setWebType('ecommerce')} />
                        <span className="tile-text">Boutique E-commerce</span>
                      </label>
                    </div>
                  </div>

                  <div className="option-field">
                    <span className="field-title">Nombre de pages souhaité ({webPages})</span>
                    <input 
                      type="range" min="1" max="15" value={webPages} 
                      onChange={(e) => setWebPages(Number(e.target.value))} 
                      className="opt-range" 
                    />
                  </div>

                  <div className="option-field">
                    <label className="opt-checkbox-label">
                      <input type="checkbox" checked={webHosting} onChange={() => setWebHosting(!webHosting)} />
                      <span className="checkbox-text">Inclure Hébergement, Domaine & Maintenance (1 an)</span>
                    </label>
                  </div>
                </div>
              )}

              {/* CONFIGURATION MARKETING */}
              {service === 'marketing' && (
                <div className="options-wrapper animated-fade">
                  <div className="option-field">
                    <span className="field-title">Réseaux sociaux à gérer</span>
                    <div className="checkbox-grid">
                      <label className="opt-checkbox-label">
                        <input type="checkbox" checked={mktChannels.facebook} onChange={() => handleChannelChange('facebook')} />
                        <span className="checkbox-text">Facebook Ads & Page</span>
                      </label>
                      <label className="opt-checkbox-label">
                        <input type="checkbox" checked={mktChannels.instagram} onChange={() => handleChannelChange('instagram')} />
                        <span className="checkbox-text">Instagram Business</span>
                      </label>
                      <label className="opt-checkbox-label">
                        <input type="checkbox" checked={mktChannels.tiktok} onChange={() => handleChannelChange('tiktok')} />
                        <span className="checkbox-text">TikTok Business</span>
                      </label>
                    </div>
                  </div>

                  <div className="option-field">
                    <span className="field-title">Durée de la campagne : <strong>{mktDuration} mois</strong></span>
                    <input 
                      type="range" min="1" max="6" value={mktDuration} 
                      onChange={(e) => setMktDuration(Number(e.target.value))} 
                      className="opt-range" 
                    />
                  </div>
                </div>
              )}

              {/* CONFIGURATION DESIGN & VIDÉO */}
              {service === 'design_video' && (
                <div className="options-wrapper animated-fade">
                  <div className="option-field">
                    <label className="opt-checkbox-label">
                      <input type="checkbox" checked={hasLogo} onChange={() => setHasLogo(!hasLogo)} />
                      <span className="checkbox-text">Création ou refonte complète de Logo & Charte graphique</span>
                    </label>
                  </div>

                  <div className="option-field counter-field">
                    <span className="field-title">Nombre d'affiches publicitaires / visuels</span>
                    <div className="counter-actions">
                      <button onClick={() => setDesignPosters(Math.max(0, designPosters - 1))} className="count-btn">-</button>
                      <span className="count-val">{designPosters}</span>
                      <button onClick={() => setDesignPosters(designPosters + 1)} className="count-btn">+</button>
                    </div>
                  </div>

                  <div className="option-field counter-field">
                    <span className="field-title">Nombre de vidéos / Reels à monter</span>
                    <div className="counter-actions">
                      <button onClick={() => setDesignVideos(Math.max(0, designVideos - 1))} className="count-btn">-</button>
                      <span className="count-val">{designVideos}</span>
                      <button onClick={() => setDesignVideos(designVideos + 1)} className="count-btn">+</button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* TABLEAU DE VISUALISATION DU PRIX (DROITE) */}
          <div className="devis-price-side">
            <div className="price-sticky-box">
              <h3 className="summary-title">Estimation du Devis</h3>
              
              <div className="summary-details">
                <div className="summary-row">
                  <span>Service sélectionné</span>
                  <span className="bold-text">
                    {service === 'web' && 'Développement Web'}
                    {service === 'marketing' && 'Stratégie Marketing'}
                    {service === 'design_video' && 'Design & Vidéo'}
                  </span>
                </div>
                <div className="summary-divider"></div>
                <p className="summary-notice">Ce montant est une estimation basée sur vos choix. Les prix sont affichés en FCFA.</p>
              </div>

              <div className="total-price-block">
                <span className="total-label">TARIF ESTIMATIF</span>
                <h2 className="total-amount">{totalPrice.toLocaleString('fr-FR')} <span>FCFA</span></h2>
              </div>

              <button className="submit-devis-btn" onClick={() => window.location.href = `/contact?service=${service}&price=${totalPrice}`}>
                Valider et finaliser le projet <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}