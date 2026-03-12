import { useState } from 'react';
import './PseudoChoice.css';

export default function PseudoChoice({ onNext }) {
  const [pseudo, setPseudo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    if (pseudo.trim().length > 2) {
      onNext(pseudo); // On envoie le pseudo au parent (App.jsx)
    } else {
      alert("Choisis un pseudo d'au moins 3 caractères !");
    }
  };
   return (
        <div className="screen-content">
          <div className="header-image">
            <img src="/assets/mascotte.png" alt="Wiki Character" className="char-img" />
          </div>
          <form className="selection-card" onSubmit={handleSubmit}>
            <h2 className="form-title">Choisis ton pseudo:</h2>
            <input type="text" className="pseudo-input" placeholder="Entrez votre pseudo" required minLength={3} value={pseudo} onChange={(e) => setPseudo(e.target.value)} />
            <button type='submit' className="btn-validate">Valider</button>
          </form>
        </div>    
    );
    }