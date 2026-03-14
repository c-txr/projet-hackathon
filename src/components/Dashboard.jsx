import React from 'react';
import './Dashboard.css';

export default function Dashboard({ userName, userXP, onBack }) {
    // 1. Calcul du score total
    const totalScore = (userXP.histoire || 0) + (userXP.science || 0) + (userXP.culture || 0);

    // 2. Base de données
    const allMascots = {
        "histoire":[
        { name: "Gueux", xpRequired: 0, img: "/assets/mascotte-gueux.png" },
        { name: "Palefrenier", xpRequired: 50, img: "/assets/mascotte-palefrenier.png" },
        { name: "Fou du Roi", xpRequired: 100, img: "/assets/mascotte-fou.png" },
        { name: "Chevalier", xpRequired: 150, img: "/assets/mascotte-chevalier.png" },
        { name: "Princesse", xpRequired: 200, img: "/assets/mascotte-princesse.png" },
        { name: "Roi", xpRequired: 250, img: "/assets/mascotte-roi.png" }
        ],
         "science": [
            { name: "Cloué au sol", xpRequired: 0, img: "/assets/mascotte-sol.png" },
            { name: "Étoiles plein les yeux", xpRequired: 50, img: "/assets/mascotte-etoiles.png" },
            { name: "Contrôleur Aérien", xpRequired: 100, img: "/assets/mascotte-tour.png" },
            { name: "Pilote d'Elite", xpRequired: 150, img: "/assets/mascotte-pilote.png" },
            { name: "Astronaute", xpRequired: 200, img: "/assets/mascotte-astronaute.png" },
            { name: "Alien Omniscient", xpRequired: 250, img: "/assets/mascotte-alien.png" }
        ],
        "culture": [
            { name: "Artiste sans inspi", xpRequired: 0, img: "/assets/mascotte-perdu.png" },
            { name: "Dessinateur", xpRequired: 50, img: "/assets/mascotte-dessinateur.png" },
            { name: "Guitariste", xpRequired: 100, img: "/assets/mascotte-guitariste.png" },
            { name: "Photographe", xpRequired: 150, img: "/assets/mascotte-photographe.png" },
            { name: "Peintre de renom", xpRequired: 200, img: "/assets/mascotte-peintre.png" },
            { name: "Star du cinéma", xpRequired: 250, img: "/assets/mascotte-cinema.png" }
        ]
    };

    return (
        <div className="screen-content dashboard-container">
            <header style={{ position: 'relative', width: '100%' }}>
                <button onClick={onBack} className="back-btn">✖️</button>
                <h1 className="main-title">PROFIL</h1>
                <h2 className="subtitle" style={{textTransform: 'capitalize'}}>{userName} - {totalScore} XP Total</h2>
            </header>
            
           <div className="collection-scroll">
                {Object.keys(allMascots).map((categoryName, index) => (
                    <div key={index} className="category-section">
                        <h3 className="category-title" style={{textTransform: 'capitalize'}}>
                            {categoryName} ({userXP[categoryName] || 0} XP)
                        </h3>
                        <div className="mascot-grid">
                            {allMascots[categoryName].map((m, i) => {
                                // On vérifie si l'XP du tiroir spécifique est suffisante
                                const isUnlocked = (userXP[categoryName] || 0) >= m.xpRequired;
                                return (
                                    <div key={i} className={`mascot-card ${isUnlocked ? 'unlocked' : 'locked'}`}>
                                        <img src={m.img} alt={m.name} />
                                        <h4>{m.name}</h4>
                                        <p>{m.xpRequired} XP</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}