<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    mail('danjana446@gmail.com', 'New Message from Portfolio', $message, "From: $email");
    echo "Message sent successfully!";
}
?>
