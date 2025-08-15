
//alert("js de la page covoiturages maintenant");

//recuperation des différents input
const inputVilleDepart = document.getElementById("VilleDepartInput");
const inputVilleDarrivee = document.getElementById("VilleDarriveeInput");
const inputDateDepart = document.getElementById("DateDepartInput");
const inputHeureDepart = document.getElementById("TimeDepartInput");
const inputNombrePassagers = document.getElementById("NombreDePassagersInput");
const inputFumeur = document.getElementById("FumeurInput");
const inputAnimal = document.getElementById("AnimalInput");
const btnValidation = document.getElementById("btn-rechercher-covoiturage");

//On ajoute un event listener sur les input
inputVilleDepart.addEventListener("keyup",validateForm);
inputVilleDarrivee.addEventListener("keyup",validateForm);
inputDateDepart.addEventListener("keyup",validateForm);
inputHeureDepart.addEventListener("keyup",validateForm);
inputNombrePassagers.addEventListener("keyup",validateForm);
inputFumeur.addEventListener("click",validateForm);
inputAnimal.addEventListener("click",validateForm);


//stockage de les viles de départ et d'arrivée dans localstorage
btnValidation.addEventListener("click",setVilleInLocalStorage);
function setVilleInLocalStorage() {
    alert("enregistre la ville de départ dans localstorage");
    //enregistre le string de l'input ville de départ dans localstorage
    localStorage.setItem("villeDeDepart",VilleDepartInput.value);
    localStorage.setItem("villeDarrivee",VilleDarriveeInput.value);
    //actualise la page
    //document.location.reload();
}

/*
if(localStorage.getItem("ville") != null) {
    alert("lis la valeur de la ville dans localstorage");
    h6.textContent = `Ville de départ : ${localStorage.getItem("ville")}`;
}
*/

//validation du formulaire
function validateForm(){
    const villedepartOk = validateRequired(inputVilleDepart);
    const villearriveeOk = validateRequired(inputVilleDarrivee);
    const datedepartOk = validateRequired(inputDateDepart);
    const heuredepartOk = validateRequired(inputHeureDepart);
    const nombrepassagersOk = validateRequired(inputNombrePassagers);
    const fumeurOk = validateRequired(inputFumeur);
    const animalOk = validateRequired(inputAnimal);
    
       if(villedepartOk && villearriveeOk && datedepartOk 
          && heuredepartOk && nombrepassagersOk && fumeurOk && animalOk) {
        btnValidation.disabled = false;
        }
        else{
        btnValidation.disabled = true;
        }
}


//validation d'un champ
function validateRequired(input){
    if(input.value != ''){
        //c'est ok
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        //alert("champ remplit");
        return true; //on retourne true pour dire que c'est ok
        }
    else{
        //c'est pas ok
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        //alert("champ non remplit");
        return false; //on retourne false pour dire que c'est pas ok
        }
}
