<?php
    require('database_connection.php');
    $token = mysqli_real_escape_string($database_connection, file_get_contents('php://input'));
    
    $query = "SELECT token_expiration FROM users WHERE token = '{$token}'";
    $result = mysqli_query($database_connection, $query);
    
    $row = mysqli_fetch_assoc($result); 
    if (mysqli_num_rows($result) == 1 && $row['token_expiration'] > time()) {
         echo 'authorized';
     } else {
         echo 'unauthorized';
     }
?>