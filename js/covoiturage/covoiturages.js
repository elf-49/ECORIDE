
alert("js de la page covoiturages maintenant");

//recuperation des différents input
const inputVilleDepart = document.getElementById("VilleDepartInput");
const inputVilleDarrivee = document.getElementById("VilleDarriveeInput");
const inputDateDepart = document.getElementById("DateDepartInput");
const inputHeureDepart = document.getElementById("TimeDepartInput");
const btnValidation = document.getElementById("btn-rechercher-covoiturage");

//On ajoute un event listener sur les input
inputVilleDepart.addEventListener("keyup",validateForm);
inputVilleDarrivee.addEventListener("keyup",validateForm);
inputDateDepart.addEventListener("keyup",validateForm);
inputHeureDepart.addEventListener("keyup",validateForm);


function validateForm(){
    const villedepartOk = validateRequired(inputVilleDepart);
    const villearriveeOk = validateRequired(inputVilleDarrivee);
    const datedepartOk = validateRequired(inputDateDepart);
    const heuredepartOk = validateRequired(inputHeureDepart);
    
       if(villedepartOk && villearriveeOk && datedepartOk && heuredepartOk) {
        btnValidation.disabled = false;

    }
    else{
        btnValidation.disabled = true;
    }
}

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

