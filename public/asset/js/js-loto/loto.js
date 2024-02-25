// Jeu du loto

//Rappel des tableaux de l'utilisateur
import {userNumber, userStars} from "./loto-style";
console.log(userNumber);
console.log(userStars);

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

console.log(RandomArray);
console.log(StarRandomArray);
