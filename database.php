<?php
$con = mysqli_connect("localhost", "root", "", "users");

if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = mysqli_real_escape_string($con, $_POST['name']);
    $email = mysqli_real_escape_string($con, $_POST['email']);
    $location = mysqli_real_escape_string($con, $_POST['location']);

    $sql = "INSERT INTO user_details (username, email, user_location) VALUES ('$name', '$email', '$location')";

    if (mysqli_query($con, $sql)) {
        echo "User details added successfully!";
    } else {
        echo "Error: " . mysqli_error($con);
    }
}

mysqli_close($con);
?>
