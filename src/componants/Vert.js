import React, { useState } from "react";
import heroImg from "./images/ima.jpg"; 
import './style/Vert.css'
import { RiLeafLine } from "react-icons/ri";
 function Vert() {
  const [email, setEmail] = useState("");

  const emailValide = (val) => /\S+@\S+\.\S+/.test(val);
  const isValid = emailValide(email);

  const boutonInscriptionStyle = {
    backgroundColor: isValid ? "#059669" : "white",
    color: isValid ? "white" : "#059669",
    padding: "10px 20px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <section style={{ backgroundColor: "#3c994cff", color: "white", padding: "20px" }}>
    <div className="vert-container">

        <div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
            Prêt à découvrir la cuisine bio authentique ?
          </h1>

          <p style={{ marginBottom: "30px", fontSize: "1.3rem" }}>
            Rejoignez des milliers de béninois qui ont déjà adopté une alimentation plus saine et plus respectueuse de l'environnement grâce à BioBites.
          </p>

        
          <div style={{ display: "flex", gap: "10px", marginBottom: "30px" }}>
            <button
              onClick={() => console.log("Bouton Télécharger cliqué")
              }
              className="télécharger"
            >
              Télécharger
            </button>
            <button
              onClick={() => console.log("Bouton Version Web cliqué")}
              className="version"
              
            >
              Version Web
            </button>
          </div>

          
          <div  
          style={{
          background: "#51a039ff",
          borderRadius: "10px",
          padding:'10px',
          height:'100px',
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          overflow: "hidden",}} >
          <div style={{ marginBottom: "8px", fontSize: "1rem", fontWeight: "500" }}>
            Rester informé des nouveautés
          </div>
          <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            <input
              type="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flex: 1,
                padding: "10px 15px",
                borderRadius: "6px",
                width:"150px",
                border: "none",
                color: "black",
              }}
            />
            <button
              style={boutonInscriptionStyle}
              onClick={() =>
                console.log(isValid ? "Inscription validée" : "Email invalide")
              }
            >
              {isValid ? "Inscription" : "S'inscrire"}
            </button>
          </div>
</div>
          
          
        </div>

        <div className="imo">
          <img
          className="float-end"
            src={heroImg}
            alt="Famille bio"
            style={{ width: "100%", borderRadius: "10px",height:"400px",objectFit:"cover"}} />

              <div className="photo " >
                <div className='row ' 
                style={{
                  display:'flex',
  gap: '2px',  
  border:' 1px solid #ddd',
   borderRadius: '10px',
   padding:'10px',
 height:'80px',
 width: '230px',
 whiteSpace:'nowrap',
  marginBottom: '5px',
  cursor: 'pointer',
 background:'white',
 justifyContent:'between',
  alignItems:'center',
    
                }}
                >
                  <div className='col-2 ' 
                   style={{
                            backgroundColor: '#c3f3c5ff',
                width:'40px',
                height:'40px',
                padding: "6px",
                borderRadius: "50px"
                
              }}
              > <RiLeafLine size={24} color="green" /> </div>
              <div className="col-8 " style={{color:'black',}}> <span  style={{fontWeight:'bold'}}>500+ Familles</span><br/><span className="petit">mangent bio avec nous</span> </div>
               
               </div>
          </div>
            

        </div>
      </div>
    </section>
  );
}
export default Vert