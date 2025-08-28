//alert("je valide mon covoiturage");
const deja_inscrit = document.querySelector('input[name="UtilisateurOuNon"]:checked');
const pas_inscrit = document.querySelector('input[name="UtilisateurOuNon"]:checked');
const btnChoix = document.getElementById("btnChoix");

btnChoix.addEventListener("click", () => {
    const choix = document.querySelector('input[name="UtilisateurOuNon"]:checked');

    if (choix.id === "UtilisateurInput") {
        alert("Merci de revenir voyager avec nous.");
        // redirection vers l'espace utilisateur
        window.location.replace("/espace_utilisateurs"); 
    } else if (choix.id === "VisiteurInput") {
        alert("Bienvenue dans la communauté ECORIDE. Veuillez créer un compte pour réserver.");
        // redirection vers la page d'inscription
        window.location.replace("/signup"); 
    }
});

