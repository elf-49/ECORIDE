import Route from "./Route.js";
//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    // ajout d'une autre page html et un fichier js

    //pages relatives à l'authentification
    new Route("/signin", "Connexion", "/pages/auth/signin.html","/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", "/js/auth/signup.js"),
    new Route("/editpassword", "Mot de passe oublié", "/pages/auth/editpassword.html", "/js/auth/editpassword.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html", "/js/auth/account.js"),
   
    //pages relatives aux covoiturages
    new Route("/covoiturages", "Covoiturages", "/pages/covoiturages/covoiturages.html","/js/covoiturage/covoiturages.js"),
    new Route("/visualiser", "Info du covoiturages demandé", "/pages/covoiturages/moncovoiturage.html","/js/covoiturage/moncovoiturage.js"),
    new Route("/covoituragesdisponibles", "Voir les covoiturages disponibles", "/pages/covoiturages/covoituragesdisponibles.html", "/js/covoiturage/covoituragesdisponibles.js"),
    new Route("/reserver", "Réserver un Covoiturages", "/pages/covoiturages/reserver.html"),
    new Route("/valider_reservation", "reserver un Covoiturages", "/pages/covoiturages/valider_reservation.html", "/js/covoiturage/valider_reservation.js"),
    new Route("/liste_des_covoiturages", "Lister les covoiturages", "/pages/covoiturages/liste_des_covoiturages.html", "/js/covoiturage/liste_des_covoiturages.js"),

    //pages relatives aux différents espaces
    new Route("/nouveau_utilisateur", "Nouveau utilisateur", "/pages/espacesclients/nouveau_utilisateur.html","/js/espacesclients/nouveau_utilisateur.js"),
    new Route("/formulairechauffeur", "Formulaire pour un nouveau chauffeur", "/pages/espacesclients/formulaire_chauffeur.html","/js/espacesclients/formulaire_chauffeur.js"),
    new Route("/espace_utilisateurs", "Espace utilisateur", "/pages/espacesclients/espace_utilisateurs.html", "/js/espacesclients/espace_utilisateurs.js"),


    new Route("/connexion", "Connexion", "/pages/connexion.html"),
    new Route("/contacts", "Contact", "/pages/contacts.html"),

];
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "ECORIDE";