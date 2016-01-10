<?php
    require('database_connection.php');
    $data = json_decode(file_get_contents('php://input'));
    $token = $data->token;
    
    $query = "SELECT * FROM users WHERE token = '{$token}'";
    
    $result = mysqli_query($database_connection, $query);
     
    if (mysqli_num_rows($result) == 1) {
         echo 'authorized';
     } else {
         echo 'unauthorized';
     }
?>