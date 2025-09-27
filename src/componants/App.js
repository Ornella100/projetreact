

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import des composants
import Banner from "./Banner";
import Connecter from "./Connecter";
import Inscription from "./Inscription";
import Cart from './Cart'
import Design from './Design'
import Vert from './Vert'
import Blanc from './Blanc'
import Footer from './Footer'



          

function App() {
  return (
        <Router>
      <Routes>
        {/* Page principale */}
        <Route 
          path="/" 
          element={
            <>
              <Banner />
            </>
          } 
        />

        
        <Route path="/connecter" element={<Connecter />} />

        
        <Route path="/inscription" element={<Inscription />} />

         <Route path="/banner" element={<Banner />} />
      </Routes>
    </Router>

  );
}

export default App;
