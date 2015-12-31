<?php
    require('database_connection.php');
    require('getUser.php');
    $user = $get_user();
    $data = array();
    
    $query = "SELECT name, color FROM categories WHERE user_id = '{$user}'";
    $result = mysqli_query($database_connection, $query);

    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
           $data['categories'][] = $row; 
        }
    }
    
    echo json_encode($data);
?>