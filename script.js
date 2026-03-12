const zoneQuestion = document.getElementById('zone-question');
const tousLesBoutons = document.querySelectorAll('.btn-oval');

// Exemple : Remplir la question avec une animation
function afficherContenu(question, reponses) {
    // On ajoute une petite classe pour un effet de fondu si on veut
    zoneQuestion.style.opacity = 0;
    
    setTimeout(() => {
        zoneQuestion.innerText = question;
        zoneQuestion.style.opacity = 1;
        
        reponses.forEach((texte, index) => {
            if(tousLesBoutons[index]) {
                tousLesBoutons[index].innerText = texte;
            }
        });
    }, 200);
}

// Pour tester le rendu fluide au chargement :
// afficherContenu("Quel est le langage du Web ?", ["HTML", "CSS", "JS", "PHP"]);