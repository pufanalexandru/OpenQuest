<?php
    require('database_connection.php');
    require('getUser.php');
    $user = $get_user();
    $data = array();
    $i = 0;
    
    $query = "SELECT ";
    $query .= "quests.id AS q_id, quests.name AS q_name, quests.description AS q_description, quests.category AS q_category, quests.deadline AS q_deadline, quests.adventure AS q_adventure, ";
    $query .= "categories.id AS c_id, categories.name AS c_name, categories.color AS c_color ";
    $query .= "FROM quests, categories ";
    $query .= "WHERE quests.user_id = {$user} AND quests.category = categories.id";
    
    $result = mysqli_query($database_connection, $query);
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            foreach($row as $key => $value) {
                switch (substr($key, 0, 1)) {
                    case 'c': 
                        $data['categories'][$i][substr($key, 2)] = $value; 
                        break;
                    case 'q':
                        $data['quests'][$i][substr($key, 2)] = $value; 
                        break;
                    case 'a':
                        $data['adventures'][$i][substr($key, 2)] = $value; 
                        break;
                }
            }
            $i++;
        }
    }
    
    echo json_encode($data);
?>