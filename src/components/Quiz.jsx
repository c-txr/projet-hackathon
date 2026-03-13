import { useState } from 'react';
import './Quiz.css'
import Mascotte from './Mascotte';

export default function Quiz({ questions, onFinish }) {
    /* La mémoire */
    const [index, setIndex] = useState(0); /* commence à la première question */
    const [score, setScore] = useState(0); /* commence à 0 pts */
    const [fini, setFini] = useState(false); /* jeu terminé ? */
    const [mood, setMood] = useState('neutre'); /*humeur de la mascotte, neutre par défaut*/
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const progressWidth = ((index + 1) / questions.length) * 100;

    const currentQ = questions[index]; 

    const handleAnswer = (selectedIndex) => {
        setSelectedAnswer(selectedIndex);
        const isCorrect = selectedIndex === currentQ.correct;

        if (isCorrect) {
            setMood('success');
            setScore(score +  50 ); /* si réponse correcte, + 50 pts */
        } else {
            setMood('error');
        }

        if (index + 1 < questions.length){ /* vérif si il reste des questions */
            setIndex(index +1);
        } else {
            setFini(true);
        }
    };

    if (fini){
        return <div>Bravo ! Score: {score} / {questions.length}</div>
    }

    return (
        <div className='screen-content'>  
            <header>
                <h1 className="main-title">WIKI LEARN</h1>
                <h2 className="subtitle">Histoire: Les Tudors</h2>
            </header>
            {/*<Mascotte mood={mood}/>*/}
            <div className="visual-container">
                <img src="tudors-image.png" alt="Portraits Tudors" className="main-img"/>
                <img src="/assets/mascotte-cheerleader.png" alt="Wiki Mascotte" className="mascot"/>
            </div> 
            <h2 className="question">{currentQ.question}</h2>
            <div className="answers-container">
            {currentQ.options.map((option, i) =>  (
                <button className="answer-container answer-btn {buttonClass}"
                key={i} onClick={() => handleAnswer(i)}>
                    {option}
                </button>
            ))}
            <div class="progress-container">
                <div class="progress-bar"
                style={{ width: `${progressWidth}%` }}
                ></div>
            </div>
        </div>
        </div>
    )
 }



       
     