
import React from 'react';
import { Link } from 'react-router-dom';
import { GoArrowDown } from "react-icons/go";
import  './style/Header.css'
import { useState, useEffect } from "react";

/*

import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {!menuOpen ? (
        <div className="ensemble">
        
          <a href="/" className="ti">BioBites</a>

          <div className="liens-desktop">
            <Link to="/banner" className="lien">Accueil</Link>
            <a href="#section1" className="lien">Restaurants</a>
            <a href="#section2" className="lien">Comment ça marche</a>
            <a href="#section3" className="lien">Contact</a>
          </div>

          <div className="but">
            <Link to="/connecter"><button className="but1">Se connecter</button></Link>
            <Link to="/inscription"><button className="but2">S'inscrire</button></Link>
          </div>

          <div className="menu-toggle" onClick={() => setMenuOpen(true)}>
            ☰
          </div>
        </div>
      ) : (
        <div className="ensemble mobile-menu">
        
          <div className="menu-toggle" onClick={() => setMenuOpen(false)}>
            ✕
          </div>

          
          <div className="mobile-links">
            <Link to="/banner" className="lien">Accueil</Link>
            <a href="#section1" className="lien">Restaurants</a>
            <a href="#section2" className="lien">Comment ça marche</a>
            <a href="#section3" className="lien">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;*/


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {!menuOpen ? (
        /* --- Header normal --- */
        <div className="ensemble">
          {/* Logo */}
          <a href="/" className="ti">BioBites</a>

          {/* Liens visibles sur grand écran */}
          <div className="liens-desktop">
            <Link to="/banner" className="lien">Accueil</Link>
            <a href="#section1" className="lien">Restaurants</a>
            <a href="#section2" className="lien">Comment ça marche</a>
            <a href="#section3" className="lien">Contact</a>
          </div>

          {/* Boutons */}
          <div className="but">
            <Link to="/connecter"><button className="but1">Se connecter</button></Link>
            <Link to="/inscription"><button className="but2">S'inscrire</button></Link>
          </div>

          {/* Hamburger (visible seulement sur petit écran) */}
          <div className="menu-toggle" onClick={() => setMenuOpen(true)}>
            ☰
          </div>
        </div>
      ) : (
        /* --- Menu mobile ouvert --- */
        <div className="ensemble mobile-menu">
          {/* Hamburger visible (pour fermer le menu) */}
         

          {/* Liens affichés horizontalement */}
          <div className="mobile-links">
            <Link to="/banner" className="lien">Accueil</Link>
            <a href="#section1" className="lien">Restaurants</a>
            <a href="#section2" className="lien">Comment ça marche</a>
            <a href="#section3" className="lien">Contact</a>
          </div>

 <div className="menu-toggle  mb-2" onClick={() => setMenuOpen(false)}>
             ×
          </div>

        </div>
      )}
    </header>
  );
}

export default Header;

