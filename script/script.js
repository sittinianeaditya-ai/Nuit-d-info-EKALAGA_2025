document.addEventListener("DOMContentLoaded",function(){
    const boutons = document.querySelectorAll(".button-choix");
    const explication=document.getElementById("explication");
    const btnContinuer = document.getElementById('btnContinuer');
    const image = document.getElementById("image-nirdy");

    const questions = document.body.getAttribute('data-question-id');

    boutons.forEach(function(button) {

        button.addEventListener('click', function(event) {

            const boutonClique = event.currentTarget;

            const estCorrect = boutonClique.getAttribute('data-correct') === 'true';

            if (estCorrect) {
                boutonClique.style.backgroundColor = "#27ae60";
                boutonClique.style.color = "white";
                boutonClique.style.borderColor = "#27ae60";
                if(image) {
                    image.src="Assets/img/nirdy/vrai.png"
                    image.alt="Nirdy a eu la bonne réponse !"
                }
            } else {
                boutonClique.style.backgroundColor = "#c0392b";
                boutonClique.style.color = "white";
                boutonClique.style.borderColor = "#c0392b";
                if(image) {
                    image.src="Assets/img/nirdy/faux.png"
                    image.alt="Nirdy a eu la mauvaise réponse !"
                }
            }

            boutons.forEach(function(btn) {
                btn.disabled = true;
                btn.style.cursor = "not-allowed";
                if (btn !== boutonClique) {
                    btn.style.opacity = "0.6";
                }
            });

            if (questions) {
                const points = estCorrect ? 1 : 0;
                localStorage.setItem(questions, points);
                console.log("Question " + questions + " : " + points + " point(s) enregistré.");
            }

            if (explication) explication.classList.remove('hidden');
            if (btnContinuer) btnContinuer.style.display = 'inline-block';
        });
    });
});