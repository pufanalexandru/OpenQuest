<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Account activation</title>
     <!-- EXTERNAL STYLESHEETS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&subset=latin' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Cinzel+Decorative:400,700,900' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <section class="auth">
    <div class="container">
        <div class="col-md-12">
            <div class="jumbotron">
            <?php
                require('database_connection.php');
                
                if (isset($_GET['email']) && !empty($_GET['email']) AND isset($_GET['key']) && !empty($_GET['key'])) {
                    
                    $email = mysqli_real_escape_string($database_connection, $_GET['email']);
                    $key = mysqli_real_escape_string($database_connection, $_GET['key']);
                    
                    $query = "SELECT email FROM users WHERE confirm = '{$key}'";
                    $check_if_confirmed = mysqli_query($database_connection, $query);
                    if (mysqli_num_rows($check_if_confirmed) === 0) {
                        die('<h2>Hey, are you a crook? You\'ve already activated your account!</h2>');
                    }
                    
                    $query = "UPDATE users SET active = 1, confirm = 'CONFIRMED' WHERE confirm = '{$key}'";
                    $result = mysqli_query($database_connection, $query);
                    
                    echo '<h2>Hey adventurer, your account has been activated</h2>';
                    echo '<p>You can login and start completing quests <a href="http://openquest.contraflow.ro">here</a></p>';
                } else {
                    echo 'shit';
                }
            ?>
            </div>
        </div>
    </div> 
    </section> 
</body>
</html>