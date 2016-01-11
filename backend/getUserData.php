<?php
    require('database_connection.php');
    require('getUser.php');
    
    $user = $get_user();
    $data = array();
    
    $fetchData = function($data_type) {
        global $data, $query, $database_connection;
        
        $i = 0;
        $result = mysqli_query($database_connection, $query);
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                foreach ($row as $key => $value) {
                    if ($key == 'deadline') {
                        $data[$data_type][$i][$key] = strtotime($value);
                        continue;
                    }
                    $data[$data_type][$i][$key] = $value;
                }
                $i++;
            }
        }
    };
    
    $query = "SELECT id, name, description, category, deadline, adventure, active, completed, failed FROM quests WHERE quests.user_id = {$user}";
    $fetchData('quests');
    
    $query = "SELECT id, name, color, background FROM categories WHERE categories.user_id = {$user}";
    $fetchData('categories');
    
    echo json_encode($data);
?>