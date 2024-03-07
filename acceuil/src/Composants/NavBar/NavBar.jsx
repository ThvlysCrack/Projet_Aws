import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
           <li><Link to="/Accueil">Accueil</Link></li>
           <li><Link to="/Classements">Classements</Link></li>
           <li><Link to="/Connexion">Connexion</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
