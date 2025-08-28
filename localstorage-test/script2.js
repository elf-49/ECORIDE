

const local = JSON.parse(localStorage.getItem("user"));


// avec la variable local
if(local != null) {
    //n'affiche pas le formulaire quand le if est vérifié
    h1.textContent = `Bonjour ${local.nom} , tu as bien ${local.age} ans et tu es sur la page 2`;
}
