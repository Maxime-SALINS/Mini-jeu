// Dans ce fichier il y aura la gestion du formulaire de contact
//Pointage des balises HTML à récupérer

const userName = document.querySelector("#name");
const userFirstname = document.querySelector("#firstname");
const userEmail = document.querySelector("#email");
const userSubject = document.querySelector("#subject");
const userMessage = document.querySelector("#message");

//Initialisation de variables permettant d'avoir une traçabilité de la validité des champs du formulaire. Varible initié à false

let nameValid = false;
let firstnameValid = false;
let emailValid = false;
let subjectValid = false;
let messageValid = false;

//Mise en place des Regex

