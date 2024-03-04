// Jeu du loto
// Pointage du bouton pour jouer et de la section à modifier

const btnJeu = document.getElementById("btnJeu");
const sectionJeu = document.querySelector(".section-jeu");

// Ecoute d'un événement au click
btnJeu.addEventListener("click", ()=>{
    sectionJeu.classList.add("valid");
    btnJeu.classList.add("display-btn");
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

//Ajout des boutons sélectionner par l'utilisateur dans les tableaux userNumber & usersStars

// Initialisation des tableaux choix utilisateur
let userNumber = [];
let userStars = [];

for (let i = 0; i < btnNumber.length; i++) {
    btnNumber[i].addEventListener("click", ()=>{
        if (!btnNumber[i].classList.contains("disable") && !btnNumber[i].classList.contains("active")){
            btnNumber[i].classList.add("active");
            userNumber.push(parseInt(btnNumber[i].value));
            console.log(userNumber);
        }
        if (userNumber.length == 5){
            for (let j = 0; j < btnNumber.length; j++) {
                if (!btnNumber[j].classList.contains("active")) {
                    btnNumber[j].classList.add("disable");
                }
            }
        }
    });
};

for (let i = 0; i < btnStars.length; i++) {
    btnStars[i].addEventListener("click", ()=>{
        if (!btnStars[i].classList.contains("disable") && !btnStars[i].classList.contains("active")){
            btnStars[i].classList.add("active");
            userStars.push(parseInt(btnStars[i].value));
            // console.log(userStars);
        }
        if (userStars.length == 2){
            for (let j = 0; j < btnStars.length; j++) {
                if (!btnStars[j].classList.contains("active")) {
                    btnStars[j].classList.add("disable");
                }
            }
        }
    });
};

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

// console.log(RandomArray);
// console.log(StarRandomArray);

//Comparaison de chaque tableau
function lotoGames() {
    for (let i = 0; i < userNumber.length; i++) {
        let chekNumber = RandomArray[RandomArray.indexOf(userNumber[i])];
        if (userNumber[i] !== chekNumber){
            alert("Perdu");
        } else {
            alert ("c'est ok");
        }
    }

    for (let i = 0; i < userStars.length; i++) {
        let chekNumber = StarRandomArray[StarRandomArray.indexOf(userStars[i])];
        if (userStars[i] !== chekNumber){
            alert("Perdu");
        } else {
            alert ("c'est ok");
        }
    }
}

//Pointage du bouton de validation des listes
const btnValid = document.getElementById('btnValid');

//Ecoute de l'évennement au click du bouton valide pour lancer le jeu
btnValid.addEventListener("click", ()=>{
    if(userNumber.length === 5 && userStars.length === 2) {
        alert ("Vous pouvez jouer")
        lotoGames()
    } else{
        alert ("Vous devez sélectionner 5 chiffres et 2 chiffres étoiles")
    }
})

