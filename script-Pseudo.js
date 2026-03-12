const btnValider = document.getElementById('btn-valider');
const inputPseudo = document.getElementById('pseudo');

btnValider.addEventListener('click', () => {
    const pseudo = inputPseudo.value.trim();

    if (pseudo !== "") {
        // Effet de clic visuel
        btnValider.style.transform = "scale(0.9)";
        
        setTimeout(() => {
            alert("Bienvenue " + pseudo + " ! Prépare-toi...");
            // Tu pourras rediriger ici : window.location.href = "quiz.html";
        }, 200);
        
    } else {
        // Animation de secousse si vide
        inputPseudo.style.borderColor = "#ff4d4d";
        inputPseudo.animate([
            { transform: 'translateX(-5px)' },
            { transform: 'translateX(5px)' },
            { transform: 'translateX(-5px)' },
            { transform: 'translateX(0)' }
        ], { duration: 300 });
    }
});