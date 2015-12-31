<?php    
    $get_user = function () {
        global $database_connection;
        $token = $_GET['token'];
        
        $get_id = "SELECT id FROM users WHERE token = '{$token}'";
        $user_id = mysqli_query($database_connection, $get_id);
    
        if (mysqli_num_rows($user_id) == 1) {
            while ($row = mysqli_fetch_assoc($user_id)) {
               return $row['id'];
            }
        }
    };
?>