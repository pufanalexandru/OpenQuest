<?php
    require('database_connection.php');
    $data = json_decode(file_get_contents('php://input'));
    
    $email = $data->email;
    $password = hash("sha256", $data->password);
    
    $query = "SELECT * FROM users WHERE email = '{$email}'";
    $result = mysqli_query($database_connection, $query);
        
    $error = "Ooops! ";
    if (mysqli_num_rows($result) == 0) {
        $error .= "Wrong email.";
        echo $error;
    } else {
        $query .= " AND password = '{$password}'";
        $finalResult = mysqli_query($database_connection, $query);
        
        if (mysqli_num_rows($finalResult) == 1) {
            $row = mysqli_fetch_assoc($result);
            if (!$row['active']) {
                $error .= 'It seems that you haven\'t acctivated your account';
                die($error);
            }
            $token = $email . ' | ' . uniqid() . uniqid() . uniqid();
            $query = "UPDATE users SET token = '{$token}' WHERE email = '{$email}' AND password = '{$password}'";
            $updateToken = mysqli_query($database_connection, $query);    
            echo $token;        
        } else {
            $error .= "Wrong password.";
            echo $error;
        }
    }
?>