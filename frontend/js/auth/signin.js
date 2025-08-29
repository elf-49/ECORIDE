
//alert("javascript de la page de connexion");

const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
//const pseudoInput = document.getElementById("PseudoInput");
const btnConnect = document.getElementById("btnSignin");
const connectForm = document.getElementById("signinForm");

//On ajoute un event listener sur les input
//inputMail.addEventListener("keyup", validateForm);
//inputPassword.addEventListener("keyup", validateForm);


//ajout d'un event listener sur le bouton de connexion
btnConnect.addEventListener("click", checkCredentials);

function checkCredentials() {
    // credentials ce sont les informations de connexion
    //alert("bouton cliqué");
    // ici il faudra appeler l'API pour vérifier les credentials en BDD
   
    if(inputMail.value == "test@mail.com" && inputPassword.value == "123") {
        alert("vous etes connecté");

        //Il faudra récupérer le vrai token
        const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
        //placer ce token en cookie
        setToken(token);
        
        //pour l'exemple du cours mais après il faudra gérer avec la BDD
        //créer un cookie pour le role admin
        setCookie(RoleCookieName , "admin", 2); //2 jours de validité
        //ligne a tester
        //window.location.reload();
        window.location.replace("/");
        //redirection vers la page d'accueil
    }
else {
    alert("la connexion a échoué, veuillez vérifier vos identifiants puis réessayez");
    inputMail.classList.add("is-invalid");
    inputPassword.classList.add("is-invalid");
   }
}

/***************************************************************/
//************ fonctions de validation du formulaire ***********/
/***************************************************************/

//Function permettant de valider tout le formulaire
//cette methode est appelée chaque fois qu'un input est modifié
/*
function validateForm(){
    const mailOk = validateMail(inputMail);
    const passwordOk = validatePassword(inputPassword);
    if(mailOk && passwordOk) {
        btnConnect.disabled = true;
        alert("Connexion réussie");
        window.location.href = "/";
    }
    else{
        btnConnect.disabled = false;
    }
}


//Function permettant de valider le mot de passe
function validatePassword(input){
    //Définir mon regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if(passwordUser.match(passwordRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}


//Function permettant de valider l'email
function validateMail(input){
    //Définir mon regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true; //on retourne true pour dire que c'est ok
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false; //on retourne false pour dire que c'est pas ok
    }
}
*/

