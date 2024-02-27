import React from 'react'
import './styles.css'; // Importez le fichier CSS
import NOUV from '../assets/NOUV.png'
import sound from '../assets/starting-sound.mp3'
import pokeball from '../assets/pokeball.png'
import P from '../assets/P.png'
import K from '../assets/lettrek.png'
import D from '../assets/D_.png'
import L from '../assets/L.png'
import E from '../assets/lettree.png'
function play (){
    new Audio(sound).play()
}
const Accueil = () => {
  return (
    <div className="container">
      <nav>
        <img src={NOUV} alt="" className="logo" />
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="">Classements</a></li>
          <li><a href="">Inscription</a></li>
        </ul>
        
      </nav>

      <section className="site-container">
        <p>Bienvenue à</p>
        <h1><img src={P} className='poke'/><img src={pokeball} className='ppoke'/><img src={K} className='poke'/> <img src={E} className='poke'/> <img src={D} className='poke'/><img src={L} className='poke'/><img src={E} className='poke'/></h1>       
      </section>
      
      <div className="row">
        <button onClick={play} className="btn">Défi quotidien</button>
        <button onClick={play} className="btn">Connexion</button>    
      </div>
      <h1 className='droite'>Acceptez le défi et découvrez si vous avez les compétences nécessaires pour devenir un maître Pokémon !</h1>
    </div>
  );
};

export default Accueil;
