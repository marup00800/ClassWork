<?php
session_start();

$username = $_SESSION["username"] ?? "";
$email = $_SESSION["email"] ?? "";

$usernameErr = $_SESSION["usernameErr"] ?? "";
$emailErr = $_SESSION["emailErr"] ?? "";

unset($_SESSION["usernameErr"], $_SESSION["emailErr"]);
?>

<html>
<head>
    <title>Form</title>
</head>
<body>

<h2>User Form</h2>

<form method="post" action="../Controller/formValidation.php">

<table>
<tr>
    <td>Username</td>
    <td><input type="text" name="username" value="<?php echo $username; ?>"></td>
</tr>

<tr>
    <td>Email</td>
    <td><input type="text" name="email" value="<?php echo $email; ?>"></td>
</tr>

<tr>
    <td></td>
    <td><input type="submit" value="Submit"></td>
</tr>

</table>

</form>

</body>
</html>