import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { LuUtensils } from "react-icons/lu";
import {  RiShoppingCartLine  } from 'react-icons/ri';
import { AiOutlineCreditCard } from "react-icons/ai";
import { FiTruck } from "react-icons/fi";
import { FiAlertCircle } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import  './style/Cart.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Cart(){
    return(
      <div id="section2">
    <h2 className='text-center mt-5'>Comment ça marche ?</h2>
    <p className='fs-5 text-muted m-auto text-center w-50 mb-4'>En 5 étapes simples, découvrez et savourez la meilleure cuisine bio authentique près de chez vous</p>
   <div className='p-5'>
    <div className="d-flex justify-content-between bg-white" style={{ gap: '20px' }}>
        <div className="flex-fill" style={{
 display:'flex',
 position:'relative',
 flexDirection:'column',
  gap: '8px',
    boxShadow:' 0 8px 16px rgba(0,0,0,0.1)',
   borderRadius: '10px',
   textAlign:'center',
   borderTop :'solid  2px white',
    width: '200px',
      height: '250px',
   padding:'5px',
  cursor:'pointer',
 background:'white',
  alignItems:'center',
  }}>
                <div 
                 style={{
                border:'solid transparent',
        borderRadius: '50px',
        backgroundColor: '#c3f3c5ff',
        opacity: 0.9,
        padding: '15px' ,
        width:'30%',
         height:'25%',
          display: 'flex',                     // centrer l'icône
    justifyContent: 'center',
    alignItems: 'center',
         }} >
        <IoSearch  color="#0bbe11ff" size={25}  />
 </div>  
                
        <p className='fw-bold'>Trouvez</p>
        <p>Utilisez notre carte interactive pour découvrir les restaurants bio près de chez vous à Cotonou, Lokossa ou ailleurs au Bénin</p>
             <FaArrowRight size={24}  className="aro"/>

        </div>

 

<div className='flex-fill'  style={{
 display:'flex',
 flexDirection:'column',
  gap: '8px',
   borderRadius: '10px',
   position:'relative',
   textAlign:'center',
     boxShadow:' 0 8px 16px rgba(0,0,0,0.1)',
   padding:'5px',
  width: '200px',
      height: '250px',
  cursor:'pointer',
 background:'white',
  alignItems:'center',
  }} >
        <div 
 style={{
                border:'solid transparent',
        borderRadius: '50px',
        backgroundColor: '#c3f3c5ff',
        opacity: 0.9,
        padding: '20px' ,
        position:'relative',
        width:'30%',
         height:'25%',
          display: 'flex',                     
    justifyContent: 'center',
    alignItems: 'center',
         }}>
< LuUtensils  color="#0bbe11ff" size={30}/>
        </div>
       <p className='fw-bold'>Choisissez</p>
        <p>Consultez les menus, les avis clients et toutes les informations détaillées sur chaque restaurant bio authentique</p>
         <FaArrowRight size={24}  className="aro"/>
        </div>

<div className='flex-fill'  style={{
 display:'flex',
 flexDirection:'column',
 position:'relative',
  gap: '8px',
   borderRadius: '10px',
   textAlign:'center',
   padding:'5px',
  width: '200px',
   boxShadow:' 0 8px 16px rgba(0,0,0,0.1)',
      height: '250px',
  cursor:'pointer',
 background:'white',
  alignItems:'center',
  }}>
         <div 
 style={{
                border:'solid transparent',
        borderRadius: '50px',
        backgroundColor: '#c3f3c5ff',
        opacity: 0.9,
        padding: '20px' ,
        width:'30%',
         height:'25%',
          display: 'flex',                     
    justifyContent: 'center',
    alignItems: 'center',
         }}>
  <  RiShoppingCartLine  color="#0bbe11ff"  size={30}/>
         </div>
        <p className='fw-bold'>Commandez</p>
        <p>Sélectionnez vos plats favoris, personnalisez votre commande et ajoutez-la à votre panier en quelques clics</p>
         <FaArrowRight size={24}  className="aro"/>
        </div>

<div className='flex-fill'  style={{
 display:'flex',
 flexDirection:'column',
  gap: '8px',
  position:'relative',
   borderRadius: '10px',
   textAlign:'center',
   padding:'5px',
 width: '200px',
  boxShadow:' 0 8px 16px rgba(0,0,0,0.1)',
height: '250px',
  cursor:'pointer',
 background:'white',
  alignItems:'center',
  }}>

         <div 
 style={{
                border:'solid transparent',
        borderRadius: '50px',
        backgroundColor: '#c3f3c5ff',
        opacity: 0.9,
        padding: '20px' ,
        width:'30%',
         height:'25%',
          display: 'flex',                     
    justifyContent: 'center',
    alignItems: 'center',
         }}>
                 <AiOutlineCreditCard color="#0bbe11ff"  size={30}/>
         </div>
        <p className='fw-bold'>Payez</p>
        <p>Réglez votre commande de manière sécurisée avec plusieurs options de paiement disponibles</p>
         <FaArrowRight size={24}  className="aro"/>
        </div>

<div className='flex-fill'  style={{
 display:'flex',
 flexDirection:'column',
  gap: '8px',
   borderRadius: '10px',
   textAlign:'center',
    boxShadow:' 0 8px 16px rgba(0,0,0,0.1)',
   padding:'5px',
    width: '200px',
      height: '250px',
   padding:'5px',
  cursor:'pointer',
 background:'white',
  alignItems:'center',
  }}>
        <div
style={{
                border:'solid transparent',
        borderRadius: '50px',
        backgroundColor: '#c3f3c5ff',
        opacity: 0.9,
        padding: '20px' ,
        width:'30%',
         height:'25%',
          display: 'flex',                     
    justifyContent: 'center',
    alignItems: 'center',
         }}>
          < FiTruck   color="#0bbe11ff" size={30}/>
         </div>
        <p className='fw-bold'>Récupérez</p>
        <p>Choisissez la livraison à domicile ou allez chercher votre repas directement au restaurant selon vos préférences</p>
        </div>
</div>
    </div>

 <div className="text-center mt-4">
          <div
            className="p-3"
            style={{
          backgroundColor: '#E8F5E9',
              borderRadius: '8px',              
              display: 'inline-block',
              marginBottom:'40px',
            }}
          >
               < FiAlertCircle  size={15} color="green" style={{marginBottom:'4px',}}/> {" "}
            <small style={{ color: '#158a19ff', fontWeight:'bold',fontSize:'1em', }}>
              BioBites prélève une petite commission sur chaque transaction pour maintenir la plateforme
            </small>
          </div>
        </div>

    </div>  
    )


}
export default Cart