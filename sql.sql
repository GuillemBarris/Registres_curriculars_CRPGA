CREATE DATABASE Registres_Curriculars;
USE Registres_Curriculars;

CREATE TABLE Users (
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    type VARCHAR(50) NOT NULL,
    PRIMARY KEY (email)
);

