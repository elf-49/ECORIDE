
//tester la connexion avec le JS
//alert("remplissez les champs du formulaire s'il vous plait");

//implementer le js de la page d'inscription

//recuperation des différents input
const inputPseudo = document.getElementById("PseudoInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");


const btnValidation = document.getElementById("btn-validation-inscription");
const passwordOk = validateConfirmationPassword(inputPassword, inputValidationPassword);

//const formInscription = document.getElementById("formulaireInscription");

//On ajoute un event listener sur les input
inputPseudo.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidationPassword.addEventListener("keyup", validateForm);

//btnValidation.addEventListener("click", InscrireUtilisateur);

//Function permettant de valider tout le formulaire
//cette methode est appelée chaque fois qu'un input est modifié
function validateForm(){
    const pseudoOk = validateRequired(inputPseudo);
    const mailOk = validateMail(inputMail);
    const passwordOk = validatePassword(inputPassword);
    const passwordConfirmOk = validateConfirmationPassword(inputPassword, inputValidationPassword);
    
    if(pseudoOk && mailOk && passwordOk && passwordConfirmOk) {
        btnValidation.disabled = false;
        alert("votre inscription est enregistrée. Maintenant vous allez être redirigé vers la page de connexion por bénéficier de nos services.");
        window.location.href = "/signin";
    }
    else{
        btnValidation.disabled = true;
    }
}


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

btnValidation.addEventListener("click", () => {
  const pseudoOk = validateRequired(inputPseudo);
  const mailOk = validateMail(inputMail);
  const passwordOk = validatePassword(inputPassword);
  const passwordConfirmOk = validateConfirmationPassword(inputPassword, inputValidationPassword);

  // vérification que tous les champs sont remplis
  if (!(pseudoOk && mailOk && passwordOk && passwordConfirmOk)) {
    alert("Veuillez remplir correctement tous les champs.");
    return;
  }

  // Affichage d'une animation de chargement
  btnValidation.innerText = "Inscription en cours...";
  btnValidation.disabled = true;

  // headers pour la requête fetch
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  // body pour la requête fetch
  const body = JSON.stringify({
    firstName: inputPseudo.value,
    email: inputMail.value,
    password: inputPassword.value
  });

  // requête fetch pour l'inscription
  fetch("http://127.0.0.1:8000/api/login", {
    method: "POST",
    headers: headers,
    body: body
  })

  
    .then(response => {
      if (!response.ok) throw new Error("Erreur serveur");
      return response.json();
    })
  
    .then(data => {
      alert("Inscription réussie.");
      window.location.href = "/";
    })

    .catch(error => {
      console.error(error);
      alert("Une erreur est survenue. Veuillez réessayer.");
      btnValidation.innerText = "S'inscrire";
      btnValidation.disabled = false;
    });
});







  // Affichage d'une animation de chargement
  /*
  btnValidation.innerText = "Inscription en cours...";
  btnValidation.disabled = true;

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const body = JSON.stringify({
    firstName: inputPseudo.value,
    lastName: "Client",
    email: inputMail.value,
    password: inputPassword.value
  });

  fetch("http://127.0.0.1:8000/api/registration", {
    method: "POST",
    headers: headers,
    body: body
  })
    .then(response => {
      if (!response.ok) throw new Error("Erreur serveur");
      return response.json();
    })
    .then(data => {
      alert("Inscription réussie !");
      window.location.href = "/nouveauclient";
    })
    .catch(error => {
      console.error(error);
      alert("Une erreur est survenue. Veuillez réessayer.");
      btnValidation.innerText = "S'inscrire";
      btnValidation.disabled = false;
    });
});
*/







/*
function validateRequired(input){
    if(input.value != ''){
        //c'est ok
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true; //on retourne true pour dire que c'est ok
     }
    else{
        //c'est pas ok
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false; //on retourne false pour dire que c'est pas ok
    }
}
*/

/*
InscrireUtilisateur() {
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

let raw = JSON.stringify({
  "firstName": "Test fetch",
  "lastName": "test test fetch",
  "email": "testdepuisQuaiAntique@email.com",
  "password": "Azerty11"
});

let requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://127.0.0.1:8000/api/registration", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

}
*/

/*
function InscrireUtilisateur() {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    "firstName": "Test fetch",
    "lastName": "test test fetch",
    "email": "testdepuisQuaiAntique@email.com",
    "password": "Azerty11"
  });

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch("http://127.0.0.1:8000/api/registration", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}
*/

/*
function InscrireUtilisateur() {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    firstName: inputPseudo.value,
    lastName: "Client", // ou un autre champ si tu veux le récupérer
    email: inputMail.value,
    password: inputPassword.value
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch("http://127.0.0.1:8000/api/registration", requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erreur lors de l'inscription");
      }
      return response.json(); // ou .text() selon ton API
    })
    .then((result) => {
      console.log("Inscription réussie :", result);
      window.location.href = "/nouveauclient"; // ✅ redirection ici
    })
    .catch((error) => {
      console.error("Erreur :", error);
      alert("L'inscription a échoué. Vérifiez les champs ou réessayez.");
    });
}
*/









