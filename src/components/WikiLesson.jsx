import { useState, useEffect } from 'react';
import './WikiLesson.css';

export default function WikiLesson({ theme, onReady }) {
    const [lesson, setLesson] = useState(null); /* stocker les infos de wikipedia */
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const wikiTitles = {
            histoire: "Période_Tudor",
            science: "Système_solaire",
            culture: "Eugène_Delacroix"
        };

       /* on récupère le bon titre ou on utilise le thème par défaut */
        const title = wikiTitles[theme] || theme;

        /* On lance l'appel à l'API */
        setLoading(true);
        fetch(`https://fr.wikipedia.org/api/rest_v1/page/summary/${title}`)
            .then(response => response.json())
            .then(data => {
                console.log("données reçues de wiki:", data);
                setLesson(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Erreur API:", error);
                setLoading(false);
            });
    }, [theme]); // le useEffect se relance si le thème change

    /* écran de chargement */
    if (loading) return <div className="loading">Chargement du savoir... 🧠</div>;



  return (
    <div className="screen-content">
        <header className="course-header">
          <h1 className="main-title">WIKI LEARN</h1>
          <h2 className="subtitle">Apprends-en plus sur: {lesson?.title}</h2>
        </header>
        <main className="course-content">
             {lesson?.thumbnail && (
                <img src={lesson.thumbnail.source} width="100" alt="illustration" />
            )}
          <p>{lesson?.extract || "Oups, aucun résumé trouvé..."}</p>
        </main>
        <footer className="course-footer">
          <img src="/assets/mascotte-reading.gif" alt="Wiki Reading" className="mini-mascot" />
          <button className="btn-quiz" onClick={onReady}>Passer au quiz </button>
        </footer>
    </div>
  );
}