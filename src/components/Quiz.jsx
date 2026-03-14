import { useState } from 'react';
import './Quiz.css'
import Mascotte from './Mascotte';

const clicAudio = new Audio('/assets/clic.mp3');

export default function Quiz({ questions, category, title, onFinish, onQuit }) {

    /* La mémoire */
    const [index, setIndex] = useState(0); /* commence à la première question */
    const [score, setScore] = useState(0); /* commence à 0 pts */
    const [fini, setFini] = useState(false); /* jeu terminé ? */
    const [mood, setMood] = useState('neutre'); /*humeur de la mascotte, neutre par défaut*/
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showXP, setShowXP] = useState(false);
    
    const categoryAssets = {
    "histoire": "/assets/tudors-image.png",
    "science": "/assets/science.jpg",
    "culture": "/assets/leonardvinci.png"
};

    const progressWidth = ((index + 1) / questions.length) * 100;
    const currentQ = questions[index]; 

    const handleAnswer = (selectedIndex) => {
        setSelectedAnswer(selectedIndex);
        const isCorrect = selectedIndex === currentQ.correct;

        // On passe la récompense à 10 XP pour équilibrer le jeu
        const pointsGagnes = isCorrect ? 50 : 0;
        const scoreFinalCalculé = score + pointsGagnes;

        if (isCorrect) {
            new Audio('/assets/succes.mp3').play(); // 🎵 Son de victoire
            setMood('success');
            setScore(score + 50);
            setShowXP(true);
        } else {
            new Audio('/assets/erreur.mp3').play(); // 🎵 Son d'erreur (Minecraft)
            setMood('error');
        }

      setTimeout(() => {
            setSelectedAnswer(null); // On réinitialise le bouton
            setMood('idle');         // La mascotte se calme
            setShowXP(false);

            if (index + 1 < questions.length) {
                setIndex(index + 1);
            } else {
                new Audio('/assets/win31.mp3').play(); // 🎺 Son TADA Windows !
                onFinish(scoreFinalCalculé);
            }
        }, 1500);
    };
    const handleFinalStep = () => {
        onFinish(score);
    };
   
    return (
        <div className='screen-content'>  
            <header style={{ position: 'relative', width: '100%' }}>
             {/* Le bouton quitter en haut à gauche */}
            <button 
                   onClick={() => {
                        clicAudio.play(); // Le son part instantanément car il est en mémoire
                        
                        // On laisse 400ms pour que le "tic" finisse de sonner
                        setTimeout(() => {
                            onQuit();
                        }, 400);
                    }}
                    style={{ 
                        position: 'absolute', 
                        left: '0', 
                        top: '0', 
                        background: 'none', 
                        border: 'none', 
                        fontSize: '1.5rem', 
                        cursor: 'pointer',
                        zIndex: 50 /* <-- On force le bouton à passer devant tout le reste */
                    }}
                >
                    ✖️
                </button>
                <h1 className="main-title">WIKI LEARN</h1>
                <h2 className="subtitle" style={{textTransform: 'capitalize'}}
                >{category} : {title}</h2>
            </header>
            {/*<Mascotte mood={mood}/>*/}
            <div className="visual-container">
                <img loading="lazy" src={categoryAssets[category]} alt="Portraits Tudors" className="main-img" />
                
                <img 
                    src={
                        mood === 'success' ? "/assets/mascotte-cheerleader.png":
                        mood === 'error' ? "/assets/cheerleader-sad.png":
                        "/assets/teaching.png"
                    } 
                    
                    alt="Wiki Mascotte" 
                    className={`mascot ${mood}`}
            
                    />
            </div> 
            <h2 className="question">{currentQ.question}</h2>

            <div className="answers-container">
            {currentQ.options.map((option, i) =>  {
                let buttonClass = "";
                if (selectedAnswer !== null){
                    if (i === currentQ.correct){
                        buttonClass = "correct"; /* bouton en vert */
                    } else if (i === selectedAnswer) {
                        buttonClass = "incorrect"; /* bouton en rouge */
                    }
                }
                return(
                    <button 
                        key={i}
                        className={`answer-btn ${buttonClass}`}
                        onClick={() => handleAnswer(i)}
                        disabled={selectedAnswer !== null}>
                            {option}
                        </button>

                );
            })}
            {showXP && <div className="xp-float">+50 XP !</div>}
            <div className="progress-container">
                <div className="progress-bar"
                style={{ width: `${progressWidth}%` }}
                ></div>
            </div>
        </div>
        </div>
    )
 }



       
     