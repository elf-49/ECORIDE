import Route from "./Route.js";
//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    // ajout d'une autre page html et un fichier js

    //pages relatives à l'authentification
    new Route("/signin", "Connexion", "/pages/auth/signin.html","/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", "/js/auth/signup.js"),
    new Route("/editpassword", "Mot de passe oublié", "/pages/auth/editpassword.html"),
    new Route("/account", "Mon compte", "/pages/auth/account.html"),
   
    //pages relatives aux covoiturages
    new Route("/covoiturages", "Covoiturages", "/pages/covoiturages/covoiturages.html","/js/covoiturage/covoiturages.js"),
    new Route("/visualiser", "Info du covoiturages demandé", "/pages/covoiturages/moncovoiturage.html","/js/covoiturage/moncovoiturage.js"),
    new Route("/covoituragesdisponibles", "Voir les covoiturages disponibles", "/pages/covoiturages/covoituragesdisponibles.html", "/js/covoiturage/covoituragesdisponibles.js"),
    new Route("/reserver", "Réserver un Covoiturages", "/pages/covoiturages/reserver.html"),

    //pages relatives aux différents espaces
    new Route("/nouveauclient", "Nouveau client", "/pages/espacesclients/nouveauclient.html","/js/espacesclients/nouveauclient.js"),
    new Route("/formulairechauffeur", "Formulaire pour un nouveau chauffeur", "/pages/espacesclients/formulaire_chauffeur.html","/js/espacesclients/formulaire_chauffeur.js"),
    

    new Route("/connexion", "Connexion", "/pages/connexion.html"),
    new Route("/contacts", "Contact", "/pages/contacts.html"),

];
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "ECORIDE";