//Jeu du juste prix

function Play() {
    let Randomnumber = Math.floor(Math.random() * (100 - 0) + 1);
    //console.log(numberfix);
    let usernumber = window.parseInt(prompt("Trouve le bon nombre"));
    //consol.log(usernumber);
    let tentative= 1;
    
    while (usernumber !== Randomnumber && tentative < 5){
        tentative ++;
        if (usernumber > Randomnumber){
            alert("Vous etes trop haut");
        } else {
            alert ("Vous etes trop bas");
        }
        usernumber = window.parseInt(prompt("Trouve le bon nombre"))
    }
    
    //console.log(essaie);
    if (usernumber === Randomnumber) {
        alert ("Vous avez le bon nombre. Bravo vous l'avez trouvé en " + tentative + " tentatives");  
    } if (tentative >= 5) {
        alert("Vous avez perdu, le nombre qu'il fallait trouver est : " + Randomnumber);
        let infoplayer = window.confirm("Veux-tu rejouer ?")
        if(infoplayer === true){
            Play()
        } else {
            alert("Merci d'avoir jouer !")
        }
    }
}
