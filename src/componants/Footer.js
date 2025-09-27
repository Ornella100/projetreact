import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import "./style/Footer.css"; 
import fonte from './font/Pacifico-Regular.ttf'

const Footer = () => {
  return (
    <div>
      <hr className="m-0"/>
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <h2 className="logo" >BioBites</h2>
          <p style={{maxWidth:'500px',fontSize:'1em'}}>
            La plateforme qui vous connecte aux meilleurs restaurants bio
            authentiques près de chez vous. Mangez sain, mangez local, soutenez
            l'agriculture biologique.
          </p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Liens rapides</h4>
          <ul>
            <li><Link to='/banner'>Accueil</Link></li>
            <li><a href="#section1">Restaurants</a></li>
            <li><a href="#section2">Comment ça marche</a></li>
            <li><a href="#section3">Contact</a></li>
            <li><a href="#section4">Made with Readdy</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>+229 XX XX XX XX</li>
            <li>contact@biobites.bj</li>
            <li>Cotonou, Bénin</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 BioBites. Tous droits réservés.</p>
      </div>
    </footer>
 </div>
  );
};

export default Footer;
