// Pointage du bouton pour jouer et de la section à modifier

const btnJeu = document.getElementById("btnJeu");
// console.log(btnJeu);

const sectionJeu = document.querySelector(".section-jeu");
// console.log(sectionJeu);

// Ecoute d'un événement au click
btnJeu.addEventListener("click", ()=>{
    sectionJeu.classList.add("valid");
});