
// localStorage.setItem("nom","value")
// localStorage.getItem("nom")
// localStorage.clear()
// JSON.stringify(objet)
// JSON.parse(string)



//localStorage.getItem("nom")
//transforme la chaine de caractère en objet
const local = JSON.parse(localStorage.getItem("user"));


// avec la variable local
if(local != null) {
    //n'affiche pas le formulaire quand le if est vérifié
    formulaire.style.display = "none";
    h1.textContent = `Bonjour ${local.nom} , tu as ${local.age} ans`;
}

/*
if(localStorage.getItem("nom") != null) {
    h1.textContent = `Bonjour ${localStorage.getItem("nom")}`;
}
*/

bouton.onclick = () => {
    //création d'un objet avec deux valeurs
    const user = {
        nom : nom.value,
        age : age.value
    }


    //enregistre l'objet user
    //ici ça ne marche pas avec un objet il faut ajouter
    //d'autres fonctions
    //JSON.stringify(user) transforme l(objet en string)
    localStorage.setItem("user",JSON.stringify(user));

    //enregistre le string de l'input nom
    //localStorage.setItem("nom",nom.value);
    //actualise la page
    document.location.reload();
}

clear.onclick = () => {
    localStorage.clear();
    //actualise la page
    document.location.reload();
}

