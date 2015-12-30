<?php
    require('database_connection.php');
    $data = json_decode(file_get_contents('php://input'));
    $token = $data->token;
    
    $query = "UPDATE users SET token = 'LOGGED OUT' WHERE token = '{$token}'";
    $result = mysqli_query($database_connection, $query);
?>