import React from 'react';
import './ResultPage.css';

const RESULTS_DATA = {
  histoire: {
    0: { badge: "Gueux", img: "/assets/mascotte-gueux.png", texte: "Miséricorde ! Ta besace de savoir est aussi vide que ton estomac. Tu erres dans les limbes de l'ignorance." },
    50: { badge: "Palefrenier", img: "/assets/mascotte-palefrenier.png", texte: "Holà, jeune page ! L’écurie du savoir est encore vaste et la paille haute, mais n’abandonne point ta quête." },
    100: { badge: "Fou du Roi", img: "/assets/mascotte-fou.png", texte: "Tes pirouettes d’esprit amusent la galerie, mais le chemin vers la sagesse est parsemé d’embûches." },
    150: { badge: "Chevalier du savoir", img: "/assets/mascotte-chevalier.png", texte: "Noble vassal, ton épée est affûtée et ton esprit prompt ! Tu connais les chroniques de tes ancêtres." },
    200: { badge: "Sa Majesté", img: "/assets/mascotte-majeste.png", texte: "Par la grâce des cieux, Sa Majesté déploie une érudition sans faille. Une maîtrise digne d'un trône." },
    250: { badge: "Le Roi du savoir", img: "/assets/mascotte-roi.png", texte: "Gloire à vous ! Vous régnez sans partage sur les annales du temps. Aucun secret ne vous résiste." }
  },
  culture: {
    0: { badge: "Artiste sans inspiration", img: "/assets/mascotte-perdu.png", texte: "Tu es perdu, tu ne sais pas trop quoi faire... C’est dans la pénombre que l’on trouve la lumière." },
    50: { badge: "Dessinateur amateur", img: "/assets/mascotte-dessinateur.png", texte: "Tes premiers traits sont posés, mais l'esquisse demande encore du travail. Ne range pas tes crayons !" },
    100: { badge: "Apprenti guitariste", img: "/assets/mascotte-guitariste.png", texte: "Quelques accords sonnent juste, mais tes doigts cherchent encore leur rythme. Accorde ta persévérance." },
    150: { badge: "Photographe amateur", img: "/assets/mascotte-photographe.png", texte: "Tu as l'œil pour capturer l'instant, mais la mise au point manque encore de précision." },
    200: { badge: "Peintre de renom", img: "/assets/mascotte-peintre.png", texte: "Ta palette est riche et ton coup de pinceau assuré. La marque des grands qui marquent leur époque." },
    250: { badge: "Star du cinéma", img: "/assets/mascotte-cinema.png", texte: "Sous les projecteurs ! Le public est debout pour saluer ton génie. Ton nom brille désormais au firmament." }
  },
  science: {
    0: { badge: "Cloué au sol", img: "/assets/mascotte-sol.png", texte: "Tu refuses de regarder le ciel, quel dommage... c’est dans le vide que naissent les plus grandes découvertes." },
    50: { badge: "Étoiles pleins les yeux", img: "/assets/mascotte-etoiles.png", texte: "Tu contemples l'immensité avec émerveillement, mais tes pieds touchent encore la terre ferme." },
    100: { badge: "Contrôleur Aérien", img: "/assets/mascotte-tour.png", texte: "Tu guides les autres depuis la tour, mais il est temps de prendre les commandes. Quitte l'atmosphère !" },
    150: { badge: "Pilote d’Elite", img: "/assets/mascotte-pilote.png", texte: "Tu fends les cieux avec assurance ! La frontière de l'espace demande un ultime effort de propulsion." },
    200: { badge: "Astronaute", img: "/assets/mascotte-astronaute.png", texte: "Félicitations, tu as franchi l'orbite ! En apesanteur, tu domines le savoir scientifique." },
    250: { badge: "Alien Omniscient", img: "/assets/mascotte-alien.png", texte: "Incroyable ! Ton intelligence dépasse les limites humaines. Tu ne fais qu'un avec le cosmos." }
  }
};

export default function Resultpage({ score, category, onRestart }) {
// On définit les variantes de contenu
const catKey = category.toLowerCase();
  const scoreKey = Math.round(score / 50) * 50; 
  const result = RESULTS_DATA[catKey][scoreKey];


  return (
    <div className="screen-content">
      <main className="ecran-blanc">
        
        <div className="header-text">
          <h1 className="titre-principal">WIKI LEARN</h1>
          {/* Titre dynamique selon la catégorie choisie */}
          <h2 className="sous-titre" style={{ textTransform: 'capitalize' }}>
            {category}
          </h2>
        </div>

        <div className="container-mascotte">
          {/* Badge XP flottant */}
          <div className="xp-badge-result">{score} XP</div>
          
          <img 
            src={result.img} 
            alt={result.badge} 
            className="mascotte-resultat-finale" 
          />
        </div>

        <footer className="felicitations-zone">
          <h3 className="badge-name-display">"{result.badge}"</h3>
          <p className="message">
            {result.texte}
          </p>
          
          {/* Bouton indispensable pour revenir au menu */}
          <button className="btn-primary" onClick={onRestart}>
             CONTINUER
          </button>
        </footer>

      </main>
    </div>
  );
}