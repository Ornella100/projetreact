

 import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import logo from './images/ban1.jpeg'
import  './style/Banniere.css'
import {restaurants} from './restaurants.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import loca from './images/loca.png'
import ajout from './images/ajout.png'
import { LuMapPin } from "react-icons/lu";
import { GoArrowDown } from "react-icons/go";
import Connecter from './Connecter';
import Inscription from './Inscription'
import Cart from './Cart'
import Blanc from './Blanc'
import { Link } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
import Design from './Design'
import Vert from './Vert'



const containerStyle = { width: '100%', height: '350px', borderRadius: '10px' }
const infoStyle = { width: '35%', }

const cities = [...new Set(restaurants.map(r => r.city))]


const cityCenters = {}
cities.forEach(city => {
  const r = restaurants.find(r => r.city === city)
  cityCenters[city] = { lat: r.lat, lng: r.lng }
})

function Banner() {
   const [selectedCity, setSelectedCity] = useState('Cotonou')
  const [selectedRestaurant, setSelectedRestaurant] = useState(null)

  const restaurantsByCity = restaurants.filter(r => r.city === selectedCity)
  return (
    <div>
<div style={{backgroundColor:' #FAFAFA',}}> 
  <Header />
  <div className='body'>
    <div className='conteneur'>
    <img src={logo} alt='bio' className='le-logo'   />
<div className="textes">
     <span className="phrase">Découvrez les meilleurs</span>
  <span className="phrase1"> restaurants bio </span>
   <span className="phrase2">près de chez vous</span> 
   <span className="phrase3">Connectez-vous aux restaurants bio authentiques de Cotonou, Lokossa et partout au Bénin. Commandez, payez et savourez une cuisine saine et </span> 
   <span className="phrase4"> locale.</span>
   <div className="but">
    <button className="but3">🍴 Découvrir les restaurants</button>
    <button className="but4">▷ Comment sa marche</button> 
    </div>
   <a href="#section1" >< GoArrowDown className='fleche'/></a>
   </div>
    </div> 

<div id="section1">
  <h2 className='fw-bold text-center mt-5' >Trouver votre restaurant bio</h2>
  <p className='fs-5 text-muted m-auto text-center w-50 mb-4'>Explorez notre carte interactive et decouvrez les restaurants bio authentiques dans votre ville</p>
</div>
    <div style={{ padding: '10px' }}>
      {/* Boutons villes */}
      <div  style={{ marginBottom: '20px',textAlign:'center', gap: '10px',display:'flex',justifyContent:'center', }}>
        {cities.map(city => {
          const count = restaurants.filter(r => r.city === city).length
          return (
            <button
            className="city-button"
              key={city}
              onClick={() => {
                setSelectedCity(city)
                setSelectedRestaurant(null)
                
              }}
              style={{
                padding: '8px 16px',
                cursor: 'pointer',
                backgroundColor: selectedCity === city ? '#4CAF50' : 'white',
                color: selectedCity === city ? 'white' : 'black',
                border: 'none',
                borderRadius: '20px',
                fontWeight: '600'
              }}
            >
              {city} ({count})
            </button>
          )
        })}
      </div>

      {/* Titre */}
      <div   style={{ marginBottom: '20px', fontSize: '20px', color: '#666', justifyContent:'center',display:'flex',}}>
        <img src={loca} className='img' alt="images d'ajout"/>{''}
 { restaurantsByCity.length === 1 ? (
    <div className='titre'>
      {restaurantsByCity.length} restaurant bio disponible à{" "}
      <span className="text-success">{selectedCity}</span>
    </div>
  ) : (
    <div className='titre'>
      {restaurantsByCity.length} restaurants bio disponibles à{" "}
      <span className="text-success">{selectedCity}</span>
    </div>
  )      
}
  </div>


<div className="row g-5 mb-5">
<div className="col-6">
      <div style={{ display: 'flex', alignItems: 'flex-start', }} >


        
        <LoadScript googleMapsApiKey="AIzaSyCxap5J1Fi2x5RtJMswp0fbq80Q8WL978U">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={cityCenters[selectedCity]}
            zoom={13}
          >
            {restaurantsByCity.map(r => (
              <Marker
                key={r.id}
                position={{ lat: r.lat, lng: r.lng }}
                onClick={() => setSelectedRestaurant(r)}
              />
            ))}

            {selectedRestaurant && (
              <InfoWindow
                position={{ lat: selectedRestaurant.lat, lng: selectedRestaurant.lng }}
                onCloseClick={() => setSelectedRestaurant(null)}
              >
                <div>
                  <strong>{selectedRestaurant.name}</strong><br/>
                  {selectedRestaurant.address}
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
        </div>
        </div>
        <div className='col-6'>
        {/* Liste des restaurants */}
<div className='overflow-scroll' style={{ maxHeight: '370px',}}>
        <div style={infoStyle}>
          {restaurantsByCity.map(r => (
            <div
              key={r.id}
              onClick={() => setSelectedRestaurant(r)}
              className='cat'
            >
              
              <div className='d-flex text-start g-0'>
              <img
                src={r.image}
                alt={r.name}
                className='w-25'
                style={{ height:'auto', objectFit: 'cover', borderRadius: '8px' ,marginRight:'15px',}}
              />
            
              <div className='d-inline '>
                <h6 style={{marginBottom:'5px',fontWeight:'bold',color:'black'}}>{r.name}</h6>
                <p style={{  fontSize: '14px',marginLeft:'0px'}}>{r.description}
                  <div className=" d-flex  "  style={{marginTop:'5px'}}>
                 <LuMapPin className='mt-1' /><strong style={{fontSize: '14px',}}> {r.kilo}</strong>
                 </div>
                </p>
                </div>
                
                </div>
                <div>
                <p style={{ fontSize: '15px',marginLeft:'30px' ,fontWeight:'bold',marginBottom:'32px' }} >
                  ⭐ {r.rating} </p>
                <p style={{ fontSize: '12px', color: '#666' }} className='me-3'>
                  ⏱ {r.deliveryTime} </p>
              </div>
            </div>
            
          ))}

          
          <div style={{ textAlign: 'center', marginTop: '10px' ,display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center' ,background:'white',width:'598px',height:'130px',  border: '1px solid transparent' ,gap:'0px'}}>
            <img src={ajout} alt='ajouter ' style={{width:'50px',}} className='mt-5'/>
            <p> Plus de restaurants disponibles à  {selectedCity}</p>
            <p style={{ color: '#4CAF50',  cursor: 'pointer',fontWeight:'bold', }} >
              Voir tous les {restaurantsByCity.length} restaurants →
            </p>
          </div>
        </div>
      </div>
      </div>
    
    </div>
    </div>
     </div>
    </div> 
    <Cart />
     <Design />
     <Vert />
     <Blanc />
     <Footer/>
    </div> 
     )
}
export default Banner 