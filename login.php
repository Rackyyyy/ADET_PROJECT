<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['loginEmail'];
    $password = $_POST['password'];

    // Dummy credentials (Replace with Database validation)
    $valid_email = "user@example.com";
    $valid_password = "Password@123";

    if ($email == $valid_email && $password == $valid_password) {
        $_SESSION['user'] = $email;
        header("Location: dashboard.php");
        exit();
    } else {
        echo "<script>alert('Invalid email or password!'); window.location.href='login.html';</script>";
    }
}
?>
