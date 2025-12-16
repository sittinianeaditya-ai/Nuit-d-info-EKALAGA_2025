document.addEventListener("DOMContentLoaded", function() {
    const sectionComplet = document.getElementById('resultat-complet');
    const sectionIncomplet = document.getElementById('resultat-incomplet');
    const affichageScore = document.getElementById('affichage-score');
    const messageFinal = document.getElementById('message-final');
    const btnRestart = document.getElementById('btn-restart');

    const questionsAttendues = ['q1', 'q2', 'q3', 'q4', 'q5'];
    
    let scoreTotal = 0;
    let toutRepondu = true;

    questionsAttendues.forEach(function(cle) {
        const valeur = localStorage.getItem(cle);

        if (valeur === null) {
            toutRepondu = false;
        } else {
            scoreTotal += parseInt(valeur, 10);
        }
    });

    if (toutRepondu) {
        sectionComplet.classList.remove('hidden');
        if(sectionIncomplet) sectionIncomplet.classList.add('hidden');

        affichageScore.textContent = scoreTotal + " / 5";

        if (scoreTotal === 5) {
            messageFinal.textContent = "EXCELLENT ! Votre établissement est un modèle de résistance numérique ! Le village NIRD est fier de vous.";
            messageFinal.className = "alert alert-success"; 
        } else if (scoreTotal >= 3) {
            messageFinal.textContent = "BIEN JOUÉ ! Vous êtes sur la bonne voie, mais quelques réflexes GAFAM persistent.";
            messageFinal.className = "alert alert-info"; 
        } else {
            messageFinal.textContent = "ATTENTION ! Votre dépendance aux géants du numérique est critique. Relisez le kit de démarrage NIRD !";
            messageFinal.className = "alert alert-danger"; 
        }

    } else {
        if(sectionIncomplet) sectionIncomplet.classList.remove('hidden');
        if(sectionComplet) sectionComplet.classList.add('hidden');
    }

    if (btnRestart) {
        btnRestart.addEventListener('click', function() {
            localStorage.clear();
            window.location.href = "index.html"; 
        });
    }
});