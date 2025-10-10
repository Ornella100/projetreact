import React, { useState } from 'react';
import './style/Blanc.css'
 import {FaFacebookF, FaTwitter,FaInstagram, FaLinkedinIn }  from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import Footer from './Footer'
const Blanc = () => {
  return (
    <div className='mb-5' id="section3">
     <h2 className='text-center mt-5'>Contactez-nous</h2>
    <p className='fs-5 text-muted m-auto text-center w-50 mb-4'>
      Une question ? Une suggestion ? Notre équipe est là pour vous aider à découvrir la meilleure cuisine bio du Bénin
    </p>
    <div className="contact-container">
      
      <div className="left-column">
        <h2 className="section-title">Nos coordonnées</h2>

        <div className="info-card">
          <div className="icon"><LuMapPin/></div>
          <div className="info-card-content">
            <h4>Adresse</h4>
            <p>Quartier Fidjrossè, Rue des Cocotiers<br/>Cotonou, Bénin</p>
          </div>
        </div>

        <div className="info-card">
          <div className="icon"><FiPhone/></div>
          <div className="info-card-content">
            <h4>Téléphone</h4>
            <p>+229 XX XX XX XX<br/>Lundi – Vendredi : 8h – 18h</p>
          </div>
        </div>

        <div className="info-card">
          <div className="icon">✉️</div>
          <div className="info-card-content">
            <h4>Email</h4>
            <p>contact@biobites.bj<br/>support@biobites.bj</p>
          </div>
        </div>

        
      </div>

      
      <div className="contact-form">
        <h2 className="form-title">Envoyez-nous un message</h2>

        <form>
          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="name">Nom complet *</label>
              <input
                type="text"
                id="name"
                name="name"
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                className="input-field"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Sélectionnez un sujet</label>
            <select id="subject" name="subject" className="input-field">
              <option value="">Sélectionnez un sujet</option>
              <option value="general">Question générale</option>
              <option value="commande">Problème de commande</option>
              <option value="partenariat">Partenariat restaurants</option>
              <option value="support">Support technique</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message * (max 500 caractères)</label>
            <textarea
              id="message"
              name="message"
              maxLength={500}
              className="input-field textarea-field"
            />
          </div>

          <button type="submit" className="submit-button">
            Envoyer le message
          </button>
        </form>
 <div className="suivez-nous">
          <h4>Suivez-nous</h4>
          <div className="social-wrapper">
            <div className="social-icon"> <FaFacebookF/></div>
            <div   className="social-icon"><FaTwitter/></div>
            <div className="social-icon"><FaInstagram/></div>
            <div className="social-icon">< FaLinkedinIn/></div>
          </div>
        </div>

      </div>
    </div>
    
    </div>
  );
};

export default Blanc;
