<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $email = $_POST["signupEmail"];
    $password = $_POST["password"];

    // Example: Insert user data into database
    echo "Account Created Successfully!";
}
?>
