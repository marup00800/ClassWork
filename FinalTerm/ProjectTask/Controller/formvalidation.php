<?php
session_start();

$username = $_POST["username"] ?? "";
$email = $_POST["email"] ?? "";

$hasError = false;

if(empty($username)){
    $_SESSION["usernameErr"] = "Username required";
    $hasError = true;
}else{
    $_SESSION["username"] = $username;
}

if(empty($email)){
    $_SESSION["emailErr"] = "Email required";
    $hasError = true;
}else if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
    $_SESSION["emailErr"] = "Invalid email format";
    $hasError = true;
}else{
    $_SESSION["email"] = $email;
}


if($hasError){
    header("Location: ../view/form.php");
    exit();
}

echo "<h2>Form Submitted Successfully</h2>";
echo "Username: " . $username . "<br>";
echo "Email: " . $email . "<br>";

?>