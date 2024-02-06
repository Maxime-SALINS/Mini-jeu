// Pointage du bouton pour jouer et de la section à modifier

const btnJeu = document.getElementById("btnJeu");
// console.log(btnJeu);

const sectionJeu = document.querySelector(".section-jeu");
// console.log(sectionJeu);

// Ecoute d'un événement au click
btnJeu.addEventListener("click", ()=>{
    sectionJeu.classList.add("valid");
});

const btnNumber = document.getElementsByClassName("style-btn-loto");
const btnNumberfirst = document.getElementsByClassName("style-btn-first");
// console.log(btnNumber);

for (let i = 0; i < btnNumber.length; i++) {
    btnNumber[i].addEventListener("click", ()=>{
        btnNumber[i].classList.toggle("active");
    });
};

for (let i = 0; i < btnNumberfirst.length; i++) {
    btnNumberfirst[i].addEventListener("click", ()=>{
        btnNumberfirst[i].classList.toggle("active");
    });
};