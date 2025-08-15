
//alert("javascript de la page de connexion");


const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const pseudoInput = document.getElementById("PseudoInput");
const btnSignin = document.getElementById("btnSignin");



btnSignin.addEventListener("click", checkCredentials);

function checkCredentials() {
    //pour le débug
    //console.log(pseudoInput);
    //console.log(pseudoInput.value);
    //alert("bouton cliqué");

    // ici il faudra appeler l'API pour vérifier les credentials en BDD
    // credentials ce sont les informations de connexion


    if(mailInput.value == "test@mail.com" && passwordInput.value == "123") {
        alert("vous etes connecté");
        
        //si c'est un client existant à voir dans la BDD
        //alert("Cher client vous bénéfiez actuellement de 100 crédits");
        //aller vers la page /espaceclients/client.html

        //si c'est l'administrateur
        //aller vers la page /espaceclients/admin.html

        //si c'est l'employé
        //aller vers la page /espaceclients/employe.html

        //Il faudra récupérer le vrai token
        //const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
        //placer ce token en cookie
        //setToken(token);


        //pour l'exemple du cours mais après il faudra gérer avec la BDD
        //créer un cookie pour le role admin
        setCookie(RoleCookieName , "admin", 2);
       
        //ligne a tester
        //window.location.reload();
        //window.location.replace("/");
        //redirection vers la page d'accueil
    }
    else {
        alert("la connexion a échoué, veuillez vérifier vos identifiants");
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");

        // Créer le bouton vous inscrire
        const bouton = document.createElement("button");
        bouton.textContent = "Vous incrire";
        bouton.className = "btn btn-dark";


        bouton.addEventListener("click", function() {
        alert("Bouton cliqué !");
        btnSignin.disabled = true;
        });

        // ajouter le bouton à la page
        alert("ajout du bouton");
        document.getElementById("zoneBouton").appendChild(bouton);
    
        //si c'est un nouveau client
        //alert("Bienvenue, comme nouveau client, vous bénéfiez maintenant de 20 crédits");
        //aller vers la page /espaceclients/nouveauclient.html
        //window.location.replace("/");

        
        //document.getElementById("id du formulaire").addEventListener("submit", () => {
        //window.location.href = "/nouveauclient";
        //alert("effaçage du bouton");
        //document.getElementById("zoneBouton").removeChild(bouton);

    }
}
