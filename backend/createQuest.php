<?php
    require('database_connection.php');
    require('getUser.php');
    
    $user = $get_user();
    
    $data = json_decode(file_get_contents('php://input'));
    $query = "INSERT INTO quests (user_id, ";
    
    $i = 0;
    $len = count((array)$data);
    
    foreach ($data as $key => $value) {
       $data->$key = mysqli_real_escape_string($database_connection, $data->$key);
       $query .= "{$key}";
       if ($i < $len - 1) {
           $query .= ", ";
       }
       $i++;
    }
    
    $query .= ") VALUES ({$user}, ";
    
    $i = 0;
    foreach ($data as $key => $value) {
       $query .= "'{$value}'";
       if ($i < $len - 1) {
           $query .= ", ";
       }
       $i++;
    }
    
    $query .= ");";
    if (mysqli_query($database_connection, $query)) {
        echo "success";
    }
?>