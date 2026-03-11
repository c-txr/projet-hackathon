import { useState } from 'react'
import quizData from '/src/data/data.json'
import Quiz from '/src/components/Quiz'

function App(){
  const [category, setCategory] = useState(null) /* rien n'est choisi par défaut */
  
  return (
  <div>
    <Quiz questions={quizData.histoire.questions} />
    <Quiz questions={quizData.science.questions}/>
  </div>
)
}
export default App