import './Accueil.css';

export default function Accueil({ onNext }) {
    return(
        <div className="screen-content">
            <div className="speech-bubble">
                <p>Apprends &amp; <br /> </p><p>progresse<br /> </p><p>en t’amusant sur<br /></p><p> Wiki Learn !</p>
            </div>
            <div className="character-area">
                <img src="/assets/mascotte-accueil.gif" alt="Wiki Character" className="main-image" />
            </div>
            <button className="btn-primary" onClick={onNext}>Continuer !</button>
      </div>
    );
}