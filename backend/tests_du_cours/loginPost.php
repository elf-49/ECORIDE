<?php
$dsn = 'mysql:host=localhost;dbname=test_elf';
$username = 'root';
$password = '';

try{
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    //Récupérer les données du formulaire de connexion
    //le email ici correspond au name de l'input du html
    $emailForm = $_POST['email']; 
    //le password ici correspond au name de l'input du html
    $passwordForm = $_POST['password'];

    //Récupérer les utilisateurs 
    
    //le . concatène des chaînes de caractères en PHP
    //la ligne suivante est vulnérable aux injections SQL
    //$query = "SELECT * FROM utilisateurs WHERE email = ".$emailForm;
          
    //donc on utilise une requête préparée 
    //avec un paramètre nommé :email directement dans le string
    //la ligne suivante est protégée contre les injections SQL
    $query = "SELECT * FROM utilisateurs WHERE email = :email";
    //on prépare la requête ???
    $stmt = $pdo->prepare($query);
    //on lie le paramètre nommé :email avec la variable $emailForm
    //en fait on remplace :email de la chaine de caractère
    //de la requète par la valeur de $emailForm
    $stmt ->bindParam(':email', $emailForm);
    $stmt->execute();
    
    //Est-ce que l’utilisateur (mail) existe ?
    if($stmt->rowCount() == 1){
        $monUser = $stmt->fetch(PDO::FETCH_ASSOC);
        if(password_verify($passwordForm, $monUser['password'])){
            echo "Connexion réussie ! Bienvenue " . $monUser['nom'] . " " . $monUser['prenom'];    
        }
        else{
            echo "Mot de passe incorrect";
        }
    }
    else{
        echo "Utilisateur introuvable, êtes-vous sûr de votre mail ?";
    }
}
catch (PDOException $e){
    echo "Erreur de connexion à la base de données : ". $e->getMessage();
}
?>