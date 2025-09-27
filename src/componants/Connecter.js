
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/connecter.css'; 
import Inscription from './Inscription';
import { Link } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
import fonte from './font/Pacifico-Regular.ttf'

export default function Connecter() {
  return (
    <div style={{marginTop:'50px'}}>
        <Header />
    <div className="bg-light min-vh-100 d-flex flex-column"  id="section5" >
      

      {/* Formulaire */}
      <div className="flex-grow-1 d-flex justify-content-center align-items-center py-5">
        <div className="login-box bg-white p-4 rounded shadow-sm">
          <div className="text-center">
            <div className=" fs-2" style={{ fontWeight:'800 ', color:' #27ae60' , fontFamily: 'Pacifico  ', fontSize:'1.5em',}}>BioBites</div>
            <h1 className="fs-3 fw-semibold mt-2">Se connecter</h1>
            <p className="text-muted mt-1">
              Accédez à votre compte pour commander
            </p>
          </div>

          <form className="mt-4">
            <div className="mb-3">
              <label className="form-label">Email *</label>
              <input
                type="email"
                className="form-control"
                placeholder="votre@email.com"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Mot de passe *</label>
              <input
                type="password"
                className="form-control"
                placeholder="********"
              />
            </div>

            <button type="submit" className="btn w-100" style={{backgroundColor:'green'}}>
              Se connecter
            </button>
          </form>

          <div className="text-center mt-3 text-muted">
            Pas encore de compte ?{" "}
            <Link to="/inscription"  className=" text-decoration-none cursor-pointer" style={{color:'green'}}> Créer un compte</Link>
              
            
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </div>
  );
}
