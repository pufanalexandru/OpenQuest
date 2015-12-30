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