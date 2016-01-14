<?php
    require('database_connection.php');
    require('getUser.php');
    
    $user = $get_user();
    
    $data = json_decode(file_get_contents('php://input'));
    $name = mysqli_real_escape_string($database_connection, $data->name);
    $color = mysqli_real_escape_string($database_connection, $data->color);
    $background = mysqli_real_escape_string($database_connection, $data->background);
    
    $query = "INSERT INTO categories (user_id, name, color, background) VALUES ('{$user}', '{$name}', '{$color}', '{$background}')";
    $result = mysqli_query($database_connection, $query);
    
    echo mysqli_insert_id($database_connection);
?>