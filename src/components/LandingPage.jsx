import { useEffect } from 'react';
import './LandingPage.css'

export default function LandingPage({ onNext }) {

    useEffect(() => {
    // on lance un chrono de 3000ms (3 secondes)
    const timer = setTimeout(() => {
      onNext(); // une fois le temps écoulé, on passe à l'étape suivante //
    }, 3000);
    return () => clearTimeout(timer);
    }, [onNext]); 
    
  return (
      <div className="screen-content">
          <img src="/assets/mascotte-reading.gif" alt="Wiki Logo" className="logo-gif" />
          <h1 className="app-title">Wiki Learn</h1>
        <div className="loader">
          <span />
          <span />
          <span />
        </div>
      </div>
  );
}