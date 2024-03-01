// Jeu du loto
// Pointage du bouton pour jouer et de la section à modifier

const btnJeu = document.getElementById("btnJeu");
const sectionJeu = document.querySelector(".section-jeu");

// Ecoute d'un événement au click
btnJeu.addEventListener("click", ()=>{
    sectionJeu.classList.add("valid");
});

//Affichage des boutons du tickets de loto de manière dynamique
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
for (let i = 0; i < 50; i++) {
    if (i+1 <= 9){
        let div = document.createElement('div');
        div.innerHTML = `<button class="style-btn-loto" type="button" value="${i+1}">0${i+1}</button>`;
        firstLigne.appendChild(div);
    } else if (i+1 <= 18) {
        let div = document.createElement('div');
        div.innerHTML = `<button class="style-btn-loto" type="button" value="${i+1}">${i+1}</button>`;
        secondLigne.appendChild(div);
    } else if (i+1 <= 27) {
        let div = document.createElement('div');
        div.innerHTML = `<button class="style-btn-loto" type="button" value="${i+1}">${i+1}</button>`;
        thirdLigne.appendChild(div);
    } else if (i+1 <= 36) {
        let div = document.createElement('div');
        div.innerHTML = `<button class="style-btn-loto" type="button" value="${i+1}">${i+1}</button>`;
        fourthLigne.appendChild(div);
    } else if (i+1 <= 45) {
        let div = document.createElement('div');
        div.innerHTML = `<button class="style-btn-loto" type="button" value="${i+1}">${i+1}</button>`;
        fifthLigne.appendChild(div);
    } else {
        let div = document.createElement('div');
        div.innerHTML = `<button class="style-btn-loto" type="button" value="${i+1}">${i+1}</button>`;
        sixthLigne.appendChild(div);
    }
}

//Boucle for pour générer les boutons (2 chiffres étoiles)

for (let i = 0; i < 12; i++) {
    if (i+1 < 10){
        let div = document.createElement('div');
        div.innerHTML = `<button class="style-btn-stars" type="button" value="${i+1}">0${i+1}</button>`;
        starLigne1.appendChild(div);
    } else {
        let div = document.createElement('div');
        div.innerHTML = `<button class="style-btn-stars" type="button" value="${i+1}">${i+1}</button>`;
        starLigne2.appendChild(div);
    } 
}

//Selection des boutons : Choix utilisateur

const btnNumber = document.getElementsByClassName("style-btn-loto");
const btnStars = document.getElementsByClassName("style-btn-stars");

//fonction permettant d'ajouter la class active

let numberActif = [];

for (let i = 0; i < btnNumber.length; i++) {
    btnNumber[i].addEventListener("click", ()=>{
        if (!btnNumber[i].classList.contains("disable")){
            btnNumber[i].classList.add("active");
            if (btnNumber[i].classList.contains("active") && !numberActif.includes(btnNumber[i].value)){
                numberActif.push(parseInt(btnNumber[i].value));
                console.log(numberActif);
            }
        }
        if (numberActif.length == 5){
            for (let j = 0; j < btnNumber.length; j++) {
                if (!btnNumber[j].classList.contains("active")) {
                    btnNumber[j].classList.add("disable");
                }
            }
        }
    });
};

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
                userarray.push(parseInt(array[i].value));
            }
        }
        if (userarray.length = 5){

        }
    })
}

validListe(btnValid, btnNumber , userNumber);
validListe(btnValid, btnStars, userStars);

//Initialisation des tableaux qui seront générés par l'IA
let RandomArray = [];
let StarRandomArray = [];

//Création des listes de nombre
while (RandomArray.length < 5) {
    let RandomNumber = Math.floor(Math.random()*(50 - 1)+ 1);
    let NumberCheck = RandomArray[RandomArray.indexOf(RandomNumber)]
    if (RandomNumber !== NumberCheck) {
        RandomArray.push(RandomNumber);
    }
}

while (StarRandomArray.length < 2) {
    let RandomNumber = Math.floor(Math.random()*(12 - 1)+ 1);
    let NumberCheck = StarRandomArray[StarRandomArray.indexOf(RandomNumber)]
    if (RandomNumber !== NumberCheck) {
        StarRandomArray.push(RandomNumber);
    }
}

//Comparaison de chaque tableau
