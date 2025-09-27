import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  inscription from'./style/inscription.css';
import connecter from './Connecter'
import { Link } from "react-router-dom";
import Footer from './Footer'
import Header from './Header'
import font from './font/Pacifico-Regular.ttf'
function Inscription () {
    return (
       
      <div style={{marginTop:'50px'}}>
         <Header id="top"/>
      <div className="bg-light min-vh-100 d-flex flex-column" id="section6">
        

      
        <div className="flex-grow-1 d-flex justify-content-center align-items-start py-5">
          {/* La boîte du formulaire */}
          <div className="register-box bg-white p-4 rounded shadow-sm">
            <div className="text-center">
              <div className=" fs-2"  style={{ fontWeight: '800', color:' #27ae60', fontFamily: 'Pacifico ', fontSize:'1.5em',textDecoration:' none'}}>BioBites</div>
              <h1 className="fs-3 fw-semibold mt-2">Créer un compte</h1>
              <p className="text-muted mt-1">
                Rejoignez la communauté bio du Bénin
              </p>
            </div>

            
            <form className="mt-4">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Prénom *</label>
                  <input type="text" className="form-control" placeholder="Votre prénom" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Nom *</label>
                  <input type="text" className="form-control" placeholder="Votre nom" />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Téléphone *</label>
                <input type="tel" className="form-control" placeholder="+229 XX XX XX XX" />
              </div>

              <div className="mb-3">
                <label className="form-label">Email *</label>
                <input type="email" className="form-control" placeholder="votre@email.com" />
              </div>

              <div className="mb-3">
                <label className="form-label">Mot de passe *</label>
                <input type="password" className="form-control" placeholder="********" />
              </div>

              <div className="mb-3">
                <label className="form-label">Confirmer le mot de passe *</label>
                <input type="password" className="form-control" placeholder="********" />
              </div>

              
              <button type="submit" className="btn  w-100" style={{background:'green'}}>
                Créer mon compte
              </button>
            </form>

            
            <div className="text-center mt-3 text-muted">
              Déjà un compte ?{" "}
            <Link to="/connecter"  className="text-success text-decoration-none cursor-pointer">Se connecter</Link>
                
              
            </div>

            
            <div className="mt-4 p-3 rounded bg-light-green">
              <p className="mb-2 fw-semibold">
                Avantages de l'inscription BioBites :
              </p>
              <ul className="mb-0 ps-3">
                <li>Commandes rapides et sécurisées</li>
                <li>Suivi en temps réel de vos livraisons</li>
                <li>Offres exclusives et programme de fidélité</li>
                <li>Historique de toutes vos commandes</li>
                <li>Restaurants favoris sauvegardés</li>
              </ul>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
      </div>
    );
  }

export default Inscription;
