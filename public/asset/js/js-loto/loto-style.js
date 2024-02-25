// Pointage du bouton pour jouer et de la section à modifier

const btnJeu = document.getElementById("btnJeu");
// console.log(btnJeu);

const sectionJeu = document.querySelector(".section-jeu");
// console.log(sectionJeu);

// Ecoute d'un événement au click
btnJeu.addEventListener("click", ()=>{
    sectionJeu.classList.add("valid");
});

//Affichage des boutons du tickets de loto de manière dynamique
//Initialisation des données
const lotoNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
const starNumber = [1,2,3,4,5,6,7,8,9,10,11,12];

//Pointage des zones ou nous devons mettre les boutons

let firstLigne = document.getElementById("ligne-N1");
let secondLigne = document.getElementById("ligne-N2");
let thirdLigne = document.getElementById("ligne-N3");
let fourthLigne = document.getElementById("ligne-N4");
let fifthLigne = document.getElementById("ligne-N5");
let sixthLigne = document.getElementById("ligne-N6");
let starLigne1 = document.getElementById("ligne-S1");
let starLigne2 = document.getElementById("ligne-S2");

//Boucle for pour générer les boutons (5 chiffres à choisir)

for (let i = 0; i < lotoNumber.length; i++) {
    if (lotoNumber[i] <= 9){
        let div = document.createElement('div');
        div.innerHTML = `<button class="style-btn-loto" type="button" value="${lotoNumber[i]}">0${lotoNumber[i]}</button>`;
        firstLigne.appendChild(div);
    } else if (lotoNumber[i] <= 18) {
        let div = document.createElement('div');
        div.innerHTML = `<button class="style-btn-loto" type="button" value="${lotoNumber[i]}">${lotoNumber[i]}</button>`;
        secondLigne.appendChild(div);
    } else if (lotoNumber[i] <= 27) {
        let div = document.createElement('div');
        div.innerHTML = `<button class="style-btn-loto" type="button" value="${lotoNumber[i]}">${lotoNumber[i]}</button>`;
        thirdLigne.appendChild(div);
    } else if (lotoNumber[i] <= 36) {
        let div = document.createElement('div');
        div.innerHTML = `<button class="style-btn-loto" type="button" value="${lotoNumber[i]}">${lotoNumber[i]}</button>`;
        fourthLigne.appendChild(div);
    } else if (lotoNumber[i] <= 45) {
        let div = document.createElement('div');
        div.innerHTML = `<button class="style-btn-loto" type="button" value="${lotoNumber[i]}">${lotoNumber[i]}</button>`;
        fifthLigne.appendChild(div);
    } else {
        let div = document.createElement('div');
        div.innerHTML = `<button class="style-btn-loto" type="button" value="${lotoNumber[i]}">${lotoNumber[i]}</button>`;
        sixthLigne.appendChild(div);
    }
}

//Boucle for pour générer les boutons (2 chiffres étoiles)

for (let i = 0; i < starNumber.length; i++) {
    if (starNumber[i] < 10){
        let div = document.createElement('div');
        div.innerHTML = `<button class="style-btn-stars" type="button" value="${starNumber[i]}">0${starNumber[i]}</button>`;
        starLigne1.appendChild(div);
    } else {
        let div = document.createElement('div');
        div.innerHTML = `<button class="style-btn-stars" type="button" value="${starNumber[i]}">${starNumber[i]}</button>`;
        starLigne2.appendChild(div);
    } 
}

//Selection des boutons : Choix utilisateur

const btnNumber = document.getElementsByClassName("style-btn-loto");
const btnStars = document.getElementsByClassName("style-btn-stars");

//fonction permettant d'ajouter la class active
function addActive(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].addEventListener("click", ()=>{
            array[i].classList.toggle("active");
        });
    };
};

//Rappel de la fonction addActive
addActive(btnNumber);
addActive(btnStars);

//Pointage du bouton de validation des listes
const btnValid = document.getElementById('btnValid');

// Initialisation des tableaux choix utilisateur
let userNumber = [];
let userStars = [];

// Ecoute de l'évennement au click sur le bouton Valider
function validListe(btn , array , userarray) {
    btn.addEventListener("click", ()=>{
        for (let i = 0; i < array.length; i++) {
            if (array[i].classList.contains("active")) {
                userarray.push(array[i].value);
            }
        }
    })
}

validListe(btnValid, btnNumber , userNumber);
validListe(btnValid, btnStars, userStars);
// console.log(userNumber);
// console.log(userStars);

//On export les données des tableaux userNumber et userStars
export{userNumber, userStars};