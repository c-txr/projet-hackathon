import { useState } from 'react'
import LandingPage from './components/LandingPage'
import Accueil from './components/Accueil'
import PseudoChoice from './components/PseudoChoice'
import ThemeChoice from './components/ThemeChoice'
import WikiLesson from './components/WikiLesson'
import quizData from '/src/data/data.json'
import Quiz from '/src/components/Quiz'


function App(){
  const [step, setStep] = useState(1);
  const [userName, setUserName] = useState(""); /* pour stocker le pseudo */
  const [category, setCategory] = useState('histoire'); /* rien n'est choisi par défaut */
  const [finalScore, setFinalScore] = useState(0);

  return (
    <div className='App'>
      <div className='phone-frame'>
      {/* 1ère page: la loading page*/}
      {step === 1 && (
        <LandingPage onNext={() => setStep(2)} />
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
      <ThemeChoice onSelect={(t) => { 
        setCategory(t); 
        setStep(5); 
      }} />
    )}
    {/* 5ème page: le cours via l'API*/}
    {step === 5 && (
      <WikiLesson theme={category} onReady={() => 
      setStep(6)
      } />
    )}
    {/*6ème page: le quiz*/}
    {step === 6 && (
      <Quiz questions={quizData[category].questions} onFinish={(s) => 
      { setFinalScore(s); 
      setStep(7); 
      }} />
      )}
    
    {step === 5 && <div className="result">Score final : {finalScore}</div>}
    </div>
  </div>
)
}
export default App

/*
<Quiz questions={quizData.histoire.questions} />
    <Quiz questions={quizData.science.questions}/>*/