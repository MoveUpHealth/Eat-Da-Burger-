-- Drops the burgers_db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "burgers_db" database --
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id int AUTO_INCREMENT NOT NULL,
  burger_name varchar(60) NOT NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY(id)
);