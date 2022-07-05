-- ATTN WINDOWS USERS: Some of you might have an easier time just copying and pasting the lines below in to your mysql shell

-- YOUR CODE GOES HERE
-- CREATE YOUR DATABASE
-- CREATE YOUR TABLES
-- ADD RECORDS TO YOUR TABLE

CREATE DATABASE list;

USE  list;

CREATE TABLE Cow (
  cowId INT NOT NULL AUTO_INCREMENT,
  cowName VARCHAR(100) NOT NULL,
  cowDescription VARCHAR(400) NOT NULL,
  PRIMARY KEY (cowId)
);
