import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './Composants/Acceuil/acceuil';
import LoginSignup from './Composants/LoginSignup/LoginSignup';
import NavBar from './Composants/NavBar/NavBar';
//import NavBar from './Composants/NavBar/NavBar';

const BrowsingRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Accueil/>} />
        <Route path="/Connexion" element={<LoginSignup/>} />
      </Routes>
    </Router>
  );
};

export default BrowsingRoutes;