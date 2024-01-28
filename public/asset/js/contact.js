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
const UserRegex = /^[a-zA-Z]{2,23}$/ ;
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-z.-]+\.[a-z]{2,}$/ ;
const SujetRegex = /^[^<>{}$]{3,200}$/ ;
const MessageRegex = /^[^<>{}$]{24,500}$/ ;

//Fonction permettant de vérifier si les champs sont valides ou non

function addClass(input, regex , value) {
    if(!regex.test(value)){
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
    } else {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
    }
}

//Dans cette partie on écoute les évennements sur les inputs

userName.addEventListener("input", (e)=>{
    addClass(userName, UserRegex , e.target.value);
    const div1 = document.getElementById("input-name-check");
    if(userName.classList.contains("is-valid")){
        nameValid = true;
        div1.innerHTML=`<div class="check-valid">&#10004</div>`;
    }else if (userName.classList.contains("is-invalid")){
        nameValid = false;
        div1.innerHTML= `<div class="check-invalid">&#10007</div>`;
    } else {
        nameValid = false;
    }
});

userFirstname.addEventListener("input", (e)=>{
    addClass(userFirstname, UserRegex , e.target.value);
    const div2 = document.getElementById("input-firstname-check");
    if(userFirstname.classList.contains("is-valid")){
        firstnameValid = true;
        div2.innerHTML=`<div class="check-valid">&#10004</div>`;
    }else if(userFirstname.classList.contains("is-invalid")){
        firstnameValid = false;
        div2.innerHTML= `<div class="check-invalid">&#10007</div>`;
    } else {
        firstnameValid = false;
    }
});

userEmail.addEventListener("input", (e)=>{
    addClass(userEmail, EmailRegex , e.target.value);
    const div3 = document.getElementById("input-email-check");
    if(userEmail.classList.contains("is-valid")){
        emailValid = true;
        div3.innerHTML= `<div class="check-valid">&#10004</div>`;
    }else{
        emailValid = false;
        div3.innerHTML= `<div class="check-invalid">&#10007</div>`;
    }
});

userSubject.addEventListener("input", (e)=>{
    addClass(userSubject, SujetRegex , e.target.value);
    const div4 = document.getElementById("input-subject-check");
    if(userSubject.classList.contains("is-valid")){
        subjectValid = true;
        div4.innerHTML=`<div class="check-valid">&#10004</div>`;
    }else{
        subjectValid = false;
        div4.innerHTML= `<div class="check-invalid">&#10007</div>`;
    }
});

userMessage.addEventListener("input", (e)=>{
    addClass(userMessage, MessageRegex , e.target.value);
    const div5 = document.getElementById("input-message-check");
    if(userMessage.classList.contains("is-valid")){
        messageValid = true;
        div5.innerHTML=`<div class="check-valid">&#10004</div>`;
    }else{
        messageValid = false;
        div5.innerHTML= `<div class="check-invalid">&#10007</div>`;
    }
});

//Gestion de la sousmission du formulaire

const form = document.querySelector("#formulaire");
form.addEventListener("submit", (e)=>{
    //Empêche la sousmission du formulaire automatiquement
    e.preventDefault()

    //Gestion d'envoie d'email
    if (nameValid && firstnameValid && emailValid && subjectValid && messageValid) {
        
        //Récupération des informations rentrées par l'utilisateurs
        let name = userName.value;
        let prenom = userFirstname.value;
        let email = userEmail.value;
        let sujet = userSubject.value;
        let message = userMessage.value;

        //Les information sont mises dans un objet
        let infoContact = {
            name: name,
            prenom: prenom,
            email: email,
            sujet: sujet,
            message: message,
        }

        //Envoie de l'email
        Email.send({
            SecureToken : "7002ffd9-53a7-4eb3-ae9e-48a5ff5e4ae0 ",
            To : 'maxime.salins@gmail.com',
            From : "maxime.salins@gmail.com",
            Subject : infoContact.sujet,
            Body : 
            `Information de l'utilisateurs <br>
            <br>
            Nom utilisateur: ${infoContact.name} <br>
            <br>
            Prénom utilisateur: ${infoContact.prenom} <br>
            <br>
            Email utilisateur: ${infoContact.email} <br>
            <br>
            Message: ${infoContact.message}`
        }).then(
          message => alert(message)
        );
    } else {
        alert("Veuillez remplir correctment tous les champs !");
    }
});
