<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "php-practice";

$conn = mysqli_connect($servername, $username, $password, $dbname);

$names = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];
$surname = $_POST['surname'];


$sql = "INSERT INTO FORM (NAME, EMAIL, PASSWORD, SURNAME)
VALUES ('$names', '$email', '$password', '$surname')";

mysqli_query($conn, $sql);

$conn->close();
?>
