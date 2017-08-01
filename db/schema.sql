-- Create the database
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table actors.
CREATE TABLE burgers (
  id int AUTO_INCREMENT,
  burger_name varchar(50) NOT NULL,
  devoured boolean NOT NULL,
  date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);

-- Insert a set of records.
INSERT INTO burgers (burger_name, devoured)
VALUES ("Cheeseburger",true)

select * from burgers