<?php
    $database_connection = mysqli_connect("127.0.0.1", "root", "", "taskit");
    
    if (!$database_connection) {
        die("Connection failed!");
    }
?>