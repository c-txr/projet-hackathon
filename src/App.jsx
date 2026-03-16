import { useState, useEffect } from 'react'
import LandingPage from './components/LandingPage'
import Accueil from './components/Accueil'
import PseudoChoice from './components/PseudoChoice'
import ThemeChoice from './components/ThemeChoice'
import WikiLesson from './components/WikiLesson'
import quizData from './data/data.json'
import Quiz from './components/Quiz'
import ResultPage from './components/ResultPage'
import Dashboard from './components/Dashboard'
import './StyleGlobal.css';

const startupSound = new Audio('/assets/startup.mp3');
const backgroundMusic = new Audio('/assets/bgm.mp3');
const clicAudio = new Audio('/assets/clic.mp3');

function App(){
  const startExperience = () => {
    // 1. On lance le démarrage du son PSP
    startupSound.play();
    startupSound.volume = 0.30;

    // 2. On configure la musique de fond 3DS
    backgroundMusic.loop = true; // Pour qu'elle tourne en boucle
    backgroundMusic.volume = 0.10; // Volume à 15% pour rester discret
    backgroundMusic.play();

    // 3. On passe à la page suivante
    setStep(3);
  };
  const [step, setStep] = useState(1); /* numéro de la page actuelle */
  /* --- LOGIQUE DES PARAMÈTRES (SON/MUSIQUE) --- */
  const [showSettings, setShowSettings] = useState(false); // Affiche ou cache le menu
  const [isMusicMuted, setIsMusicMuted] = useState(false);
  const [isSfxMuted, setIsSfxMuted] = useState(false);

  const handleReset = () => {
    // 1. On nettoie la mémoire du navigateur
    localStorage.removeItem("wikiLearn_pseudo");
    localStorage.removeItem("wikiLearn_xp_obj");
    
    // 2. On remet les compteurs à zéro dans l'application
    setUserName("");
    setUserXP({ histoire: 0, science: 0, culture: 0 });
    setFinalScore(0);
    
    // 3. On ferme la modale et on retourne à l'écran titre
    setShowSettings(false);
    setStep(1); 
  };
  const toggleMusic = () => {
    const newMuted = !isMusicMuted;
    setIsMusicMuted(newMuted);
    backgroundMusic.muted = newMuted; // Coupe la musique 3DS
  };

  const toggleSfx = () => {
    const newMuted = !isSfxMuted;
    setIsSfxMuted(newMuted);
    startupSound.muted = newMuted; // Coupe le démarrage PSP
    clicAudio.muted = newMuted;    // Coupe les clics d'interface
  };
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem("wikiLearn_pseudo") || "";
  });

  const [userXP, setUserXP] = useState(() => {
    const savedXP = localStorage.getItem("wikiLearn_xp_obj");
    return savedXP ? JSON.parse(savedXP) : { histoire: 0, science: 0, culture: 0 };
  });

  useEffect(() => {
    localStorage.setItem("wikiLearn_pseudo", userName);
  }, [userName]);

  useEffect(() => {
    localStorage.setItem("wikiLearn_xp_obj", JSON.stringify(userXP));
  }, [userXP]);
  
  const [category, setCategory] = useState('histoire'); /* retient le thème choisi */
  const [finalScore, setFinalScore] = useState(0); /* enregistre les pts gagnés à la fin du quiz*/

  return (
    <div className='App'>
      <div className='phone-frame'>
      {/* BOUTON PARAMÈTRES (ENGRENAGE) - Affiché menu (4), leçon (5) et quiz (6) */}
      { (step >= 4 && step <= 6) && (
        <button className="settings-btn" onClick={() => setShowSettings(true)}>
          ⚙️
        </button>
      )}

      {/* FENÊTRE MODALE DES PARAMÈTRES */}
      {showSettings && (
        <div className="settings-modal-overlay">
          <div className="settings-modal-content">
            <h2>Paramètres</h2>
            
            <button 
              className={`toggle-btn ${isMusicMuted ? 'muted' : 'active'}`} 
              onClick={toggleMusic}
            >
              {isMusicMuted ? "🔈 Musique : OFF" : "🔊 Musique : ON"}
            </button>
            
            <button 
              className={`toggle-btn ${isSfxMuted ? 'muted' : 'active'}`} 
              onClick={toggleSfx}
            >
              {isSfxMuted ? "🔈 Effets Sonores : OFF" : "🔊 Effets Sonores : ON"}
            </button>
            
            <button className="close-settings-btn" onClick={() => setShowSettings(false)}>
              Fermer ✖️
            </button>
          </div>
        </div>
      )}

      {/* 1ère page: la loading page*/}
      {step === 1 && (                 /* si step 1 --> affiche LandingPage*/
        <LandingPage onNext={() => setStep(2)} /> /* passe à la page suivante*/
      )}

    {/* 2ème page: l'accueil'*/}
    {step === 2 && (
     <Accueil onNext={startExperience} />
    )}

    {/* 3ème page: l'utilisateur choisit son pseudo*/}
    {step === 3 && (
      <PseudoChoice onNext={(name) => {
        setUserName(name);
        setStep(4);
      }} />
    )}

    {/* 4ème page: l'utilisateur choisit son thème*/}
    {step === 4 && (
      <ThemeChoice
        pseudo={userName}
        onSelect={(t) => { 
        setCategory(t); 
        setStep(5); 
      }} 
      onOpenProfile={() => {
        new Audio('/assets/clic.mp3').play(); // 👆 Le clic UI de la PSP
        setStep(8);
      }}
      />
    )}

    {/* 5ème page: le cours via l'API*/}
    {step === 5 && (
      <WikiLesson theme={category} onReady={() => 
      {if (!isSfxMuted) clicAudio.play(); // 👆 Joue le clic seulement si le SFX est activé  
      setStep(6)
      }} />
    )}

    {/*6ème page: le quiz*/}
    {step === 6 && (
      <Quiz questions={quizData[category].questions}
      category={category}
      title={quizData[category].title}
      onFinish={(s) => { 
        setFinalScore(s);
        setUserXP((prev) => ({
        ...prev,
        [category]: prev[category] + s
        })); 
        setStep(7); 
      }}
      onQuit={() => setStep(4)}
      />
      )}
    
    {step === 7 && (
  <ResultPage 
    score={finalScore} 
    category={category}
    onRestart={() => setStep(4)} // Optionnel: pour recommencer le jeu
    onQuit={() => setStep(4)}
  />
)}
{/* 8ème page: le dashboard profil */}
    {step === 8 && (
      <Dashboard 
        userName={userName} 
        userXP={userXP} 
        onBack={() => setStep(4)} 
      />
    )}
    </div>
  </div>
)
}

export default App

