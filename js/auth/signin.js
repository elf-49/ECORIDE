
//alert("hello world");


const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");


btnSignin.addEventListener("click", checkCredentials);

function checkCredentials() {
    //alert("bouton cliqué");
    // ici il faudra appeler l'API pour vérifier les credentials en BDD
    // credentials ce sont les informations de connexion
    if(mailInput.value == "test@mail.com" && passwordInput.value == "123") {
        alert("vous etes connecté");

        //Il faudra récupérer le vrai token
        //const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
        //placer ce token en cookie
        //setToken(token);

        //gerer le role admin
        setCookie(RoleCookieName , "admin", 2);
       
        //ligne a tester
        //window.location.reload();
        //window.location.replace("/");
        //redirection vers la page d'accueil
    }
    else {
        alert("la connexion a échoué, veuillez vérifier vos identifiants");
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}


/*
mailInput.addEventListener("keyup", validateForm);
passwordInput.addEventListener("keyup", validateForm);
*/

//Function permettant de valider tout le formulaire
//cette methode est appelée chaque fois qu'un input est modifié
/*function validateForm(){
    
    const mailOk = validateMail(mailInput);
    const passwordOk = validatePassword(passwordInput);
    
    if(mailOk && passwordOk) {
        btnSignin.disabled = false;
    }
    else{
        btnSignin.disabled = true;
    }
}
*/


//Function permettant de valider le mot de passe
/*function validatePassword(input){
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
*/


//Function permettant de valider l'email
/*function validateMail(input){
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




//console.log("mailInput", mailInput);


