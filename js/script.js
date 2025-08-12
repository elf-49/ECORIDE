
//Le fichier script.js est accessible par 
//les tous les fichiers car il y a
//la balise script dans index.html

//fonctions spécifiques pour la connexion
//et mettre le token dans un cookie
const tokenCookieName = "accesstoken";
const RoleCookieName = "role"; 
//pour le role de l'utilisateur
const signoutBtn = document.getElementById("signout-btn");

signoutBtn.addEventListener("click", signout);

//recupere le cookie du role
function getRole() {
    return getCookie(RoleCookieName);
}


//efface le cookie de connexion
function signout() {
    //efface le cookie
    eraseCookie(tokenCookieName);
    eraseCookie(RoleCookieName);
    window.location.reload();
}

function setToken(token) {
    setCookie(tokenCookieName, token, 7); 
    // 7 jours de validité du cookie
    // la connexion sera valide 7 jours
}

function getToken() {
    return getCookie(tokenCookieName); 
}

//3 methodes pour gerer les cookies
//setCookie, getCookie, eraseCookie
//en fait ces methodes gérent les chaines de caractères des cookies 
//voir le cours
//cela evite de gérer soit meme le parse etc...
//on trouve ces methodes sur internet
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}



//utilisateur connecté ou non
function isConnected() {
    if(getToken() == null || getToken() == undefined) {
        return false;
    }
    else {
        return true;
    }
}

//test pour savoir si je suis connecté
//c'est une modale ???
/*
if(isConnected()) {
    alert("Je suis connecté");
} 
else {
    alert("Je ne suis pas connecté");
}
*/

//commentaire de la video, le code présent ici sera
//executé au chargement de chaque page
//question, le script.js en entier???

//les différents roles
/*
disconnected (utilisateur)
connected (admin ou client)
    - admin
    - client
*/

//afficher ou cacher les elements en fonction du role
function showAndHideElementsForRoles() {
    const userConnected = isConnected();
    const role = getRole();

    let allElementsToEdit = document.querySelectorAll('[data-show]');

    //cette boucle parcours tous les éléments html qui ont l'attribut data-show
    allElementsToEdit.forEach((element) => {
        switch(element.dataset.show) {
            //dataset contien les elements html avec l'attribut data-show
            case 'disconnected':
                if(userConnected) {
                    element.classList.add("d-none");
                    //d-none c'est display none une classe BS
                }
                break;
            case 'connected':
                if(!userConnected) {
                    element.classList.add("d-none");
                    //d-none c'est display none une classe BS
                }
                break;
            case 'admin':
                if(!userConnected || role != "admin") {
                    element.classList.add("d-none");
                    //d-none c'est display none une classe BS
                }
                break;
            case 'client':
                if(!userConnected || role != "client") {
                    element.classList.add("d-none");
                    //d-none c'est display none une classe BS
                }
                break;
        }   
    })
}

