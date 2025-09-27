
import React from 'react';
import { Link } from 'react-router-dom';
import { GoArrowDown } from "react-icons/go";
import banniere from './style/Banniere.css'

function Header() {
  return (
 <header className="header"> <div className="ensemble">
     <a href="...." className="ti">BioBites</a> 
<div className="li">
  < Link to="/banner" className='lien'>Accueil</Link>
<a href="#section1" className='lien'>Restaurants</a> 
<a href="#section2" className='lien'>Comment ça marche</a>
 <a href="#section3" className='lien'>Contact</a> </div> 
 <div className="but">
   <Link to="/connecter"><button className="but1">Se connecter</button></Link>
    <Link to="/inscription" ><button className="but2">S'inscrire</button></Link>
     </div>
     </div>
     </header>
  );
}

export default Header;
