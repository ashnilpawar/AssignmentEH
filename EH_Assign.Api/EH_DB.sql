-- Database name 
DROP DATABASE  IF EXISTS eh_db;
CREATE DATABASE eh_db;

USE eh_db;

-- Table Name

CREATE TABLE `user_master` (
  `id` int(11)  NOT NULL AUTO_INCREMENT,
  `first_name` varchar(300) NOT NULL,
  `last_name` varchar(300) NOT NULL,
  `email_id` varchar(300) NOT NULL,
  `mobile_no` varchar(20) NOT NULL,
  `date_of_birth` date NOT NULL,
  `is_active` int(10) NOT NULL DEFAULT 1 COMMENT '0-Inactive, 1-Active',
   PRIMARY KEY (`id`)
);

-- Data Inserting
INSERT INTO `user_master` (`first_name`, `last_name`, `email_id`, `mobile_no`, `date_of_birth`, `is_active`) VALUES
('First', 'User One', 'first.user@gmail.com', '8181818181', '1991-11-04', 1);
INSERT INTO `user_master` (`first_name`, `last_name`, `email_id`, `mobile_no`, `date_of_birth`, `is_active`) VALUES
('Second', 'User Second', 'second.user@gmail.com', '8456321457', '1995-11-04', 0);

-- Verfiy Data
Select * from `user_master`;

CREATE TABLE `user_login` (
  `id` int(11)  NOT NULL AUTO_INCREMENT,
  `email_id` varchar(300) NOT NULL,
  `password` varchar(300) NOT NULL,
   PRIMARY KEY (`id`)
);

-- Data Inserting
INSERT INTO `user_login` (`email_id`, `password`) VALUES
('user', 'user');

-- Verfiy Data
Select * from `user_login`;