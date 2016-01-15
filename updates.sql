ALTER TABLE `categories` CHANGE COLUMN `color` `color` ENUM('#fff', '#000') NOT NULL;
-------------------------------------------
ALTER TABLE `users` ADD `token_expiration` VARCHAR(20);
-------------------------------------------
ALTER TABLE `quests` ADD COLUMN `completed` TINYINT(1) DEFAULT 0, ADD COLUMN `failed` TINYINT(1) DEFAULT 0; 
-------------------------------------------
ALTER TABLE `categories` ADD `background` VARCHAR(64);

ALTER TABLE `quests` ADD `active` TINYINT(1) DEFAULT 1;
-------------------------------------------
ALTER TABLE `quests` ADD `adventure` INT(6);

ALTER TABLE `quests` MODIFY `deadline` VARCHAR(64);

ALTER TABLE `quests` MODIFY `category` INT(6); 

CREATE TABLE `categories` (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id INT(6) NOT NULL,
    name VARCHAR(64) NOT NULL,
    color VARCHAR(64) NOT NULL
);
--------------------------------------------
CREATE TABLE `quests` (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id INT(6) NOT NULL,
    name VARCHAR(64) NOT NULL,
    description TEXT,
    category VARCHAR(64),
    deadline TIMESTAMP  
);
-------------------------------------------
ALTER TABLE `users` ADD `confirm` VARCHAR(64) NOT NULL;

DROP TABLE `confirm`;
--------------------------------------------
ALTER TABLE `users` ADD `active` TINYINT(1);

ALTER TABLE `users` CHANGE COLUMN `username` `email` VARCHAR(60) NOT NULL;

CREATE TABLE `confirm` (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id INT(6) NOT NULL,
  user_key VARCHAR(64) NOT NULL,
  email VARCHAR(30) NOT NULL 
);
-------------------------------------------
CREATE TABLE `users` (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(30) NOT NULL,
  password VARCHAR(64) NOT NULL  
);

ALTER TABLE `users` ADD `token` TEXT;