<?php
    require('database_connection.php');
    $token = mysqli_real_escape_string($database_connection, file_get_contents('php://input'));
    
    $query = "SELECT * FROM users WHERE token = '{$token}'";
    $result = mysqli_query($database_connection, $query);
     
    if (mysqli_num_rows($result) == 1) {
         echo 'authorized';
     } else {
         echo 'unauthorized';
     }
?>