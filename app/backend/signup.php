<?php
    require('database_connection.php');
    $data = json_decode(file_get_contents('php://input'));
    
    $email = $data->email;
    $password = hash('sha256', $data->password);
    
    $query = "SELECT * FROM users WHERE email = '{$email}'";
    $check_if_email_exists = mysqli_query($database_connection, $query);
    
    if (mysqli_num_rows($check_if_email_exists)) {
        die('error');
    }
    
    $confirm = hash('sha256', $email . date('mY'));
    
    $query = "INSERT INTO users (email, password, active, confirm) VALUES ('{$email}', '{$password}', 0, '{$confirm}')";
    $result = mysqli_query($database_connection, $query);
    
    if ($result) {
        echo 'Account created. Please check your email for the confirmation link';
        
        $to = $email;
        $subject = 'Signup verification';
        $message = "
            Thanks for signing up!
            Before you can use your account, you must activate it by clicking the link below:
            http://www.openquest.contraflow.ro/backend/confirm.php?email={$email}&key={$confirm}
        ";
        $headers = 'From: noreply@openquest.com';
        mail($to, $subject, $message, $headers);
    } 
?>