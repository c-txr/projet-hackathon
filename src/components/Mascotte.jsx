import './Mascotte.css';

export default function Mascotte({ mood = "idle" }) {
  
  // On définit l'image selon l'humeur demandée
  const images = {
    idle: "/assets/mascotte-neutre.png",
    success: "/assets/mascotte-cheerleader.png",
    error: "/assets/cheerleader-sad.png",
    bravo: "/assets/mascotte-win.gif" // Optionnel pour la fin du quiz
  };

  return (
    <div className='screen-content'>
        <div className={`mascotte-container ${mood}`}>
            <img 
            src={images[mood] || images.idle} 
            alt="Mascotte Wiki" 
            className="mascotte-img"
        />
        </div>
    </div>
  );
}