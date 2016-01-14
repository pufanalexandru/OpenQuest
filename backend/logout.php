<?php
    require('database_connection.php');
    $token = mysqli_real_escape_string($database_connection, file_get_contents('php://input'));
    
    $query = "UPDATE users SET token = 'LOGGED OUT' WHERE token = '{$token}'";
    $result = mysqli_query($database_connection, $query);
?>