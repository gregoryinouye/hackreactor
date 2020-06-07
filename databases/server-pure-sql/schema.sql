DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(20),
  PRIMARY KEY(id)
);

-- CREATE TABLE rooms (
--   id INT NOT NULL AUTO_INCREMENT,
--   roomname VARCHAR(20),
--   PRIMARY KEY(id)
-- );

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  text VARCHAR(200) NOT NULL,
  user_id INT NOT NULL,
  roomname VARCHAR(20) NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id),
  -- FOREIGN KEY(room_id) REFERENCES rooms(id),
  PRIMARY KEY(id)
);

/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

