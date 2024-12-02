CREATE DATABASE Registres_Curriculars;
USE Registres_Curriculars;

CREATE TABLE Users (
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    type VARCHAR(50) NOT NULL,
    PRIMARY KEY (email)
);

CREATE TABLE User_School_Group(
    teacher VARCHAR(50) NOT NULL,
    school VARCHAR(50) NOT NULL,
    grade VARCHAR(50) NOT NULL,
    "group" VARCHAR(50) NOT NULL,
    "subject" VARCHAR(50) NOT NULL,
    PRIMARY KEY (teacher, school, grade, "group", "subject"),
    FOREIGN KEY (teacher) REFERENCES Users(email),
)