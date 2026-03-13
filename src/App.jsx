import { useState, useEffect } from 'react'
import LandingPage from './components/LandingPage'
import Accueil from './components/Accueil'
import PseudoChoice from './components/PseudoChoice'
import ThemeChoice from './components/ThemeChoice'
import WikiLesson from './components/WikiLesson'
import quizData from '/src/data/data.json'
import Quiz from '/src/components/Quiz'
import Resultpage from './components/ResultPage'
import Dashboard from './components/Dashboard'



function App(){
  const [step, setStep] = useState(1); /* numéro de la page actuelle */
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem("wikiLearn_pseudo") || "";
  });
  
  const [totalXP, setTotalXP] = useState(() => {
    return parseInt(localStorage.getItem("wikiLearn_xp")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("wikiLearn_pseudo", userName);
  }, [userName]);

  useEffect(() => {
    localStorage.setItem("wikiLearn_xp", totalXP);
  }, [totalXP]);
  const [category, setCategory] = useState('histoire'); /* retient le thème choisi */
  const [finalScore, setFinalScore] = useState(0); /* enregistre les pts gagnés à la fin du quiz*/

  return (
    <div className='App'>
      <div className='phone-frame'>

      {/* 1ère page: la loading page*/}
      {step === 1 && (                 /* si step 1 --> affiche LandingPage*/
        <LandingPage onNext={() => setStep(2)} /> /* passe à la page suivante*/
      )}

    {/* 2ème page: l'accueil'*/}
    {step === 2 && (
      <Accueil onNext={() => setStep(3)} />
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
      onOpenProfile={() => setStep(8)}
      />
    )}

    {/* 5ème page: le cours via l'API*/}
    {step === 5 && (
      <WikiLesson theme={category} onReady={() => 
      setStep(6)
      } />
    )}

    {/*6ème page: le quiz*/}
    {step === 6 && (
      <Quiz questions={quizData[category].questions}
      category={category}
      title={quizData[category].title}
      onFinish={(s) => { 
        setFinalScore(s);
        setTotalXP((prevXP) => prevXP + s);
        setStep(7); 
      }}
      onQuit={() => setStep(4)}
      />
      )}
    
    {step === 7 && (
  <Resultpage 
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
        totalXP={totalXP} 
        onBack={() => setStep(4)} 
      />
    )}
    </div>
  </div>
)
}

export default App

