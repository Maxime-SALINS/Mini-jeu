// Jeu du loto

let UserChoice = window.parseInt(prompt("Combien de chiffre voulez-vous générer aléatoirement ?"))
let User = window.parseInt(prompt("Combien de chiffre étoiles voulez-vous générer aléatoirement ?"))

function LotoGames (number , starnumber) {
    let RandomArray = [];
    let StarRandomArray = [];
    
    while (RandomArray.length < number) {
        let RandomNumber = Math.floor(Math.random()*(50 - 1)+ 1);
        let NumberCheck = RandomArray[RandomArray.indexOf(RandomNumber)]
        if (RandomNumber !== NumberCheck) {
            RandomArray.push(RandomNumber);
        }
    }
    
    while (StarRandomArray.length < starnumber) {
        let RandomNumber = Math.floor(Math.random()*(12 - 1)+ 1);
        let NumberCheck = StarRandomArray[StarRandomArray.indexOf(RandomNumber)]
        if (RandomNumber !== NumberCheck) {
            StarRandomArray.push(RandomNumber);
        }
    }
    
    console.log(RandomArray);
    console.log(StarRandomArray);
}

LotoGames(UserChoice , User);