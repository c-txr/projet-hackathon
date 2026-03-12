import { useEffect } from 'react';
import './LandingPage.css'

export default function LandingPage({ onNext }) {

    useEffect(() => {
    // 1. On lance un chrono de 3000ms (3 secondes)
    const timer = setTimeout(() => {
      onNext(); // 2. Une fois le temps écoulé, on appelle la "télécommande"
    }, 3000);
    return () => clearTimeout(timer);
    }, [onNext]); // <-- On ferme bien le useEffect ici !

  return (
    <div className="iphone-frame">
        <div className="screen-content">
          <img src="/assets/mascotte-reading.gif" alt="Wiki Logo" className="logo-gif" />
          <h1 className="app-title">Wiki Learn</h1>
        </div>
        <div className="loader">
          <span />
          <span />
          <span />
        </div>
      </div>
  );
}