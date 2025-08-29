
//tester la modification des données personnelles avec le JS
//alert("modification de mes données personnelles");

//recuperation des différents input
const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputAdresse = document.getElementById("AdresseInput");
const inputVille = document.getElementById("VilleInput");
const btnValidation = document.getElementById("btn-validation");
const btnSuppression = document.getElementById("btn-suppression");

//const formInscription = document.getElementById("changeForm");
//const formSuppression = document.getElementById("changeForm");

//On ajoute un event listener sur les input
inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputAdresse.addEventListener("keyup", validateForm);
inputVille.addEventListener("keyup", validateForm);

//btnValidation.addEventListener("click", InscrireUtilisateur);

//Function permettant de valider tout le formulaire
//cette methode est appelée chaque fois qu'un input est modifié
function validateForm(){
    const nomOk = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPrenom);
    const adresseOk = validateRequired(inputAdresse);
    const villeOk = validateRequired(inputVille);
    
    if(nomOk && prenomOk && adresseOk && villeOk) {
        btnValidation.disabled = false;
        window.location.href = "/";
    }
    else{
        btnValidation.disabled = true;
    }
}

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


// mettre les infos dans un objet api
// pour l'inscription
btnValidation.addEventListener("click", () => {
    const nomOk = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPrenom);
    const adresseOk = validateRequired(inputAdresse);
    const villeOk = validateRequired(inputVille);

    // vérification que tous les champs sont remplis
    if (!(nomOk && prenomOk && adresseOk && villeOk)) {
        alert("Veuillez remplir correctement tous les champs.");
        return;
    }
    else {
        btnValidation.disabled = true;
        btnValidation.innerText = "Modification en cours...";
    }
  
  //btnValidation.disabled = true;

  // headers pour la requête fetch
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  // body pour la requête fetch
  const body = JSON.stringify({
    nom: inputNom.value,
    prenom: inputPrenom.value,
    adresse: inputVille.value,
    ville: inputPassword.value
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
      alert("Modification réussie.");
      window.location.href = "/";
    })

    .catch(error => {
      console.error(error);
      alert("Une erreur est survenue. Veuillez réessayer.");
      btnValidation.innerText = "Réessayer";
      btnValidation.disabled = false;
    });
});


// mettre les infos dans un objet api
// pour la suppression
btnSuppression.addEventListener("click", () => {
  
  alert("Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.");
  btnSuppression.disabled = true;
  btnSuppression.innerText = "Suppression en cours...";

  // headers pour la requête fetch
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  // body pour la requête fetch
  const body = JSON.stringify({
    nom: inputNom.value,
    prenom: inputPrenom.value,
    adresse: inputVille.value,
    ville: inputPassword.value
  });

  
  // requête fetch pour l'inscription
  fetch("http://127.0.0.1:8000/api/login", {
    method: "DELETE",
    headers: headers,
    body: body
  })
  
    .then(response => {
      if (!response.ok) throw new Error("Erreur serveur");
      return response.json();
    })
  
    .then(data => {
      alert("Suppression réussie.");
      window.location.href = "/";
    })

    .catch(error => {
      console.error(error);
      alert("Une erreur est survenue. Veuillez réessayer.");
      btnValidation.innerText = "Réessayer";
      btnValidation.disabled = false;
    });
});


