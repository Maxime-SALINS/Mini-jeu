//Script du carrousel permetant de montrer les différents jeux présent sur le site

//Pointe les éléments avec la class infojeu
let slide = document.getElementsByClassName('infojeu');
// console.log(slide);
//initialisation du compteur à 0
let count = 0 ;
//Préparation des boutons précédent et suivant
let next = document.getElementById('next');
let prev = document.getElementById('prev');

//Préparation des fonctions qui permettent de passer d'un slide à l'autre
//fonction permetant de passer à la slide suivante
function nextSlide() {
    //On supprime la class "active" du première élement affiché sur le site
    slide[count].classList.remove('active');
    
    //Vérification afin de ne pas dépasser la valeur max du tableau
    if (count < slide.length - 1) {
        count ++;
    } else {
        count = 0;
    }

    //On ajoute la class "active" au nouvel élément que nous souhaitons affiché
    slide[count].classList.add('active');
}

//fonction permetant de passer à la slide précédente
function prevSlide() {
    //On supprime la class "active" de l'élement affiché sur le site actuellement
    slide[count].classList.remove('active');

    //Vérification si nous atteignons l'index 0 du tableau
    if (count > 0) {
        count--;
    } else {
        count = slide.length-1;
    }
    
    //On ajoute la class "active" au nouvel élément que nous souhaitons affiché
    slide[count].classList.add('active');
}

//On doit écouter l'événement au click des deux boutons
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
