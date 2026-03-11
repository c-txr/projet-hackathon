import { useState } from 'react';
import './Quiz.css'

export default function Quiz({ questions, onFinish }) {
    /* La mémoire */
    const [index, setIndex] = useState(0); /* commence à la première question */
    const [score, setScore] = useState(0); /* commence à 0 pts */
    const [fini, setFini] = useState(false); /* jeu terminé ? */

    const currentQ = questions[index]; 

    const handleAnswer = (selectedIndex) => {
        if (selectedIndex === currentQ.correct) {
            setScore(score +  50 ); /* si réponse correcte, + 50 pts */
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
        <div>  
            <h2>{currentQ.question}</h2>
            {currentQ.options.map((option, i) => (
                <button key={i} onClick={() => handleAnswer(i)}>
                    {option}
                </button>
            ))}
        </div>
    )
 }
