CREATE DATABASE Registres_Curriculars;
USE Registres_Curriculars;

CREATE TABLE Users (
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    type VARCHAR(50) NOT NULL,
    PRIMARY KEY (email)
);

CREATE TABLE Schools (
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY (name)
);

CREATE TABLE User_School_Group (
    id UNIQUEIDENTIFIER DEFAULT NEWID() NOT NULL PRIMARY KEY,
    teacher VARCHAR(50) NOT NULL,
    school VARCHAR(50) NOT NULL,
    grade VARCHAR(50) NOT NULL,
    "group" VARCHAR(50) NOT NULL,
    "subject" VARCHAR(50) NOT NULL,
    FOREIGN KEY (teacher) REFERENCES Users(email) ON DELETE CASCADE,
    FOREIGN KEY (school) REFERENCES Schools(name) ON DELETE CASCADE
);