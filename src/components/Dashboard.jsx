import React from 'react';
import './Dashboard.css';

export default function Dashboard({ userName, totalXP, onBack }) {
    const mascots = [
        { name: "Gueux", xpRequired: 0, img: "/assets/mascotte-gueux.png" },
        { name: "Palefrenier", xpRequired: 50, img: "/assets/mascotte-palefrenier.png" },
        { name: "Fou du Roi", xpRequired: 100, img: "/assets/mascotte-fou.png" },
        { name: "Chevalier", xpRequired: 150, img: "/assets/mascotte-chevalier.png" },
        { name: "Roi", xpRequired: 200, img: "/assets/mascotte-roi.png" }
    ];

    return (
        <div className="screen-content dashboard-container">
            <header style={{ position: 'relative', width: '100%' }}>
                <button onClick={onBack} className="back-btn">✖️</button>
                <h1 className="main-title">PROFIL</h1>
                <h2 className="subtitle" style={{textTransform: 'capitalize'}}>{userName} - {totalXP} XP</h2>
            </header>
            
            <div className="mascot-grid">
                {mascots.map((m, i) => {
                    const isUnlocked = totalXP >= m.xpRequired;
                    return (
                        <div key={i} className={`mascot-card ${isUnlocked ? 'unlocked' : 'locked'}`}>
                            <img src={m.img} alt={m.name} />
                            <h3>{m.name}</h3>
                            <p>{m.xpRequired} XP</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}