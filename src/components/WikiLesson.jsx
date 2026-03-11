export default function ArticleView({ theme, onReady }) {
  return (
    /* HTML ici */
    <div className="">
      {/* Ici tu pourras mettre ta logique Fetch Wikipedia plus tard */}
      <h2>Apprends-en plus sur : {theme}</h2>
      <div className="content">Le contenu Wikipedia ira ici...</div>
      <button onClick={onReady}>Je suis prêt pour le quiz !</button>
    </div>
  );
}