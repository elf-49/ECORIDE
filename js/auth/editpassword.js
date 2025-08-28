
//tester la connexion avec le JS
//alert("Vous etes sur la page de modification du mot de passe");


//recuperation des différents input
const inputPseudo = document.getElementById("PseudoInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");
const inputNewPassword = document.getElementById("NewPasswordInput");
const inputValidationNewPassword = document.getElementById("ValidateNewPasswordInput");

const btnModification = document.getElementById("btn-validation-modification");
const passwordOk = validateConfirmationPassword(inputPassword, inputValidationPassword);
const newpasswordOk = validateConfirmationPassword(inputNewPassword, inputValidationNewPassword);

//const formModification = document.getElementById("formulaireModification");

//On ajoute un event listener sur les input
inputPseudo.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidationPassword.addEventListener("keyup", validateForm);
inputNewPassword.addEventListener("keyup", validateForm);
inputValidationNewPassword.addEventListener("keyup", validateForm);

//Function permettant de valider tout le formulaire
//cette methode est appelée chaque fois qu'un input est modifié
function validateForm(){
    const pseudoOk = validateRequired(inputPseudo);
    const mailOk = validateMail(inputMail);
    const passwordOk = validatePassword(inputPassword);
    const passwordConfirmOk = validateConfirmationPassword(inputPassword, inputValidationPassword);
    const newpasswordOk = validatePassword(inputNewPassword);
    const newpasswordConfirmOk = validateConfirmationPassword(inputNewPassword, inputValidationNewPassword);

    if(pseudoOk && mailOk && passwordOk && passwordConfirmOk && newpasswordOk && newpasswordConfirmOk) {
        btnValidation.disabled = false;
        //window.location.href = "/nouveauclient";
    }
    else{
        btnValidation.disabled = true;
    }
}



//Function permettant de valider un champ requis
function validateRequired(input) {
  if (input.value.trim() !== '') {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
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


//Function permettant de valider un mot de passe
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

//Function permettant de confirmer un mot de passe
function validateConfirmationPassword(inputPwd, inputConfirmPwd) {
    if(inputPwd.value == inputConfirmPwd.value) {
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");
        return true; //on retourne true pour dire que c'est ok
    }
    else {
        inputConfirmPwd.classList.add("is-invalid");
        inputConfirmPwd.classList.remove("is-valid");
        return false; //on retourne false pour dire que c'est pas ok
    }
}

//Ajout d'un event listener sur le bouton de modification
btnModification.addEventListener("click", () => {
  const pseudoOk = validateRequired(inputPseudo);
  const mailOk = validateMail(inputMail);
  const passwordOk = validatePassword(inputPassword);
  const passwordConfirmOk = validateConfirmationPassword(inputPassword, inputValidationPassword);
  const newpasswordOk = validatePassword(inputNewPassword);
  const newpasswordConfirmOk = validateConfirmationPassword(inputNewPassword, inputValidationNewPassword);

  // vérification que tous les champs sont remplis
  if (!(pseudoOk && mailOk && passwordOk && passwordConfirmOk && newpasswordOk && newpasswordConfirmOk)) {
    alert("Veuillez remplir correctement tous les champs.");
    return;
  }

  // Affichage d'une animation de chargement
  btnModification.innerText = "Modification en cours...";
  btnModification.disabled = true;

  // headers pour la requête fetch
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  // body pour la requête fetch de modification POST
  const bodySuppression = JSON.stringify({
    pseudo: inputPseudo.value,
    email: inputMail.value,
    password: inputPassword.value
  });


// requête fetch pour la suppression des infos
  fetch("http://127.0.0.1:8000/api/login", {
    method: "DELETE",
    headers: headers,
    body: bodySuppression
  })

  
    .then(response => {
      if (!response.ok) throw new Error("Erreur serveur");
      return response.json();
    })
  
    .then(data => {
      alert("Suppression réussie.");
      //window.location.href = "/";
    })

    .catch(error => {
      console.error(error);
      alert("Une erreur est survenue. Veuillez réessayer.");
      btnModification.innerText = "Réessayer";
      btnModification.disabled = false;
    });



// body pour la requête fetch de modification POST
  const bodyModification = JSON.stringify({
    pseudo: inputPseudo.value,
    email: inputMail.value,
    password: inputNewPassword.value
  });

  // requête fetch pour la modification des infos
  fetch("http://127.0.0.1:8000/api/login", {
    method: "POST",
    headers: headers,
    body: bodyModification
  })

      .then(response => {
      if (!response.ok) throw new Error("Erreur serveur");
      return response.json();
    })
  
    .then(data => {
      alert("Modification réussie.");
      window.location.href = "/";
    })

    .catch(error => {
      console.error(error);
      alert("Une erreur est survenue. Veuillez réessayer.");
      btnModification.innerText = "Réessayer";
      btnModification.disabled = false;
    });
});












