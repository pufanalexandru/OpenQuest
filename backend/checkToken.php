<?php
    require('database_connection.php');
    $data = json_decode(file_get_contents('php://input'));
    $token = $data->token;
    
    $query = "SELECT * FROM users WHERE token = '{$token}'";
    
    if (mysqli_query($database_connection, $query)) {
        echo 'authorized';
    } else {
        echo 'unauthorized';
    }
?>