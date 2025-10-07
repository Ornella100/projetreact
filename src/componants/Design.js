import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import cercle from './images/cercle2.jpg';
import cercle1 from './images/cercle1.jpg';
import port from './images/port.png';
import livraison from './images/livraison.jpg';
import avis from './images/avis.jpg';
import entre from './images/ent.jpg';

import { RiSecurePaymentLine, RiLeafLine } from "react-icons/ri";
import { LuMapPin } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa6";
import { FiPhone, FiTruck } from "react-icons/fi";

function Design() {
  return (
    <div className='body'>
      {/* ==== STYLES INTÉGRÉS ==== */}
      <style>{`
        .body {
          text-align: center;
          padding: 40px 20px;
          background-color: #f8f9fa;
        }

        .body h2 {
          font-weight: bold;
          color: #2e7d32;
          margin-bottom: 15px;
        }

        .body p {
          color: #555;
          margin-bottom: 40px;
        }

        .grid-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          justify-items: center;
          margin-bottom: 40px;
        }

        .card {
          background: #fff;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: transform 0.3s ease;
          width: 100%;
          max-width: 320px;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        .card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .card-content {
          padding: 20px;
        }

        .card-icon {
          margin-bottom: 10px;
        }

        .card h3 {
          font-size: 1.2rem;
          color: #333;
          margin-bottom: 10px;
        }

        .card p {
          color: #666;
          font-size: 0.95rem;
        }

        /* ✅ Responsive design */
        @media screen and (max-width: 992px) {
          .grid-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media screen and (max-width: 600px) {
          .grid-container {
            grid-template-columns: 1fr;
          }

          .card {
            max-width: 90%;
          }

          .body h2 {
            font-size: 1.5rem;
          }

          .body p {
            font-size: 1rem;
          }
        }
      `}</style>

      <h2>Pourquoi choisir BioBites ?</h2>
      <p style={{ fontSize: '20px' }}>
        Une plateforme complète pour découvrir, commander et déguster la meilleure cuisine bio du Bénin
      </p>

      {/* Première ligne de cartes */}
      <div className="grid-container">
        <div className="card">
          <img src={cercle} alt="Restaurants 100% Bio" />
          <div className="card-content">
            <div className="card-icon"><RiLeafLine size={24} color="#4CAF50" /></div>
            <h3>Restaurants 100% Bio</h3>
            <p>Tous nos partenaires sont certifiés bio et utilisent uniquement des ingrédients naturels et locaux</p>
          </div>
        </div>

        <div className="card">
          <img src={cercle1} alt="Géolocalisation précise" />
          <div className="card-content">
            <div className="card-icon"><LuMapPin size={24} color="#4CAF50" /></div>
            <h3>Géolocalisation Précise</h3>
            <p>Trouvez instantanément les restaurants bio les plus proches de votre position à Cotonou, Lokossa et partout au Bénin</p>
          </div>
        </div>

        <div className="card">
          <img src={port} alt="Paiement Sécurisé" />
          <div className="card-content">
            <div className="card-icon"><RiSecurePaymentLine size={24} color="#4CAF50" /></div>
            <h3>Paiement Sécurisé</h3>
            <p>Transactions 100% sécurisées avec plusieurs méthodes de paiement adaptées au marché béninois</p>
          </div>
        </div>
      </div>

      {/* Deuxième ligne de cartes */}
      <div className="grid-container">
        <div className="card">
          <img src={livraison} alt="Livraison & Retrait" />
          <div className="card-content">
            <div className="card-icon"><FiTruck size={24} color="#4CAF50" /></div>
            <h3>Livraison & Retrait</h3>
            <p>Choisissez entre la livraison à domicile ou le retrait en restaurant selon vos préférences</p>
          </div>
        </div>

        <div className="card">
          <img src={avis} alt="Avis Vérifiés" />
          <div className="card-content">
            <div className="card-icon"><FaRegStar size={24} color="#4CAF50" /></div>
            <h3>Avis Vérifiés</h3>
            <p>Consultez les avis authentiques des clients pour faire le meilleur choix de restaurant bio</p>
          </div>
        </div>

        <div className="card">
          <img src={entre} alt="Support Client 24/7" />
          <div className="card-content">
            <div className="card-icon"><FiPhone size={24} color="#4CAF50" /></div>
            <h3>Support Client 24/7</h3>
            <p>Notre équipe est disponible pour vous accompagner à tout moment dans vos commandes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
