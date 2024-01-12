// jeu de memoire de couleur

function genererCouleurAleatoire() {
    let ColorTable = ["rouge" , "bleu" , "vert" , "jaune"];
    return ColorTable[Math.floor(Math.random() * ColorTable.length)];
}

function ajouterCouleurSequence(sequence) {
    sequence.push(genererCouleurAleatoire());
    return sequence
}

function jouerTour(sequence) {
    alert ("La séquence de couleur est : " + sequence.join(" , "));
    for (let iterator of sequence) {
        let Usercolor = window.prompt("Entrez la bonne couleur : ");
        if (Usercolor !== iterator){
            return false
        }
    }
    return true
}

function JeuDeMemoire() {
    let randomSequence = [];
    let tour = true;
    while (tour){
        randomSequence = ajouterCouleurSequence(randomSequence);
        tour = jouerTour(randomSequence)
        if (!tour){
            alert (`Vous avez perdu la sequence était ${randomSequence.join(" , ")}`);
            break
        }
        alert("Bien joué ! passe à l'étape suivante");
    }
    alert(`Le jeu est fini votre score est : ${randomSequence.length - 1}`)
}

JeuDeMemoire()