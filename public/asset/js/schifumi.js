// jeu du schifoumi

const table = ["pierre" , "feuille" , "ciseaux"] ;
let index = Math.floor(Math.random()*(table.length - 0) + 0);
let choiceIA = table[index];
let Userchoice = window.prompt("Choisir entre pierre/feuille/ciseaux : ");
let stringResearch = table[table.indexOf(Userchoice)];
//console.log(stringResearch);

while (Userchoice !== stringResearch){
    alert ("Entrez une chaine de caractère")
    Userchoice = window.prompt("Choisir entre pierre/feuille/ciseaux : ")
    stringResearch = table[table.indexOf(Userchoice)];
}

alert ("Correct, vous avez rentez la bonne information !")

if (Userchoice === choiceIA){
    alert ("Vous avez choisi la même chose ");
} else if (Userchoice === "pierre" && choiceIA === "feuille" || Userchoice === "feuille" && choiceIA === "ciseaux" || Userchoice === "ciseaux" && choiceIA === "pierre"){
    alert("Vous avez perdu !");
} else {
    alert ("Bravo vous avez gagner !");
}
