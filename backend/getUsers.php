<?php
header('Content-Type: application/json');
$conn = new mysqli('localhost', 'root', '', 'ecoridedb');
$result = $conn->query("SELECT * FROM utilisateurs");
$users = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($users);
?>
