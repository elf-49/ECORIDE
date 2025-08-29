<?php
$dsn = 'mysql:host=localhost;dbname=test_elf';
$username = 'root';
$password = '';

try{
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //Récupérer les utilisateurs 
    $query = "SELECT * FROM utilisateurs";
    $stmt = $pdo->query($query);
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

    //Afficher les utilisateurs
    foreach($users as $user){
        echo "ID : " . $user['utilisateur_id'] . "<br>";
        echo "Nom : " . $user['nom'] . "<br>";
        echo "Prenom : " . $user['prenom'] . "<br>";
        echo "email : " . $user['email'] . "<br>";
        echo "password : " . $user['password'] . "<br>";
        echo "<br>";
    }
}
catch (PDOException $e){
    echo "Erreur de connexion à la base de données : ". $e->getMessage();
}

?>