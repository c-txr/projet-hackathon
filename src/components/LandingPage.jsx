import { useEffect } from 'react';


export default function LandingPage({ onNext }) {

    useEffect(() => {
    // 1. On lance un chrono de 3000ms (3 secondes)
    const timer = setTimeout(() => {
      onNext(); // 2. Une fois le temps écoulé, on appelle la "télécommande"
    }, 3000);
    return () => clearTimeout(timer);
    }, [onNext]); // <-- On ferme bien le useEffect ici !

  return (
    <div className="screen landing">
      {/* HTML classique ici ici (mascotte, titre...) */}
      <h1>Wiki Learn</h1>
      <button onClick={onNext}>Démarrer</button>
    </div>
  );
}