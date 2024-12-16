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
CREATE TABLE Courses (
    id UNIQUEIDENTIFIER DEFAULT NEWID() NOT NULL PRIMARY KEY,
    grade VARCHAR(50) NOT NULL,
    "group" VARCHAR(50) NOT NULL,
    name VARCHAR(50) NOT NULL,
    year INT NOT NULL,
    school VARCHAR(50) NOT NULL,

)
CREATE TABLE User_School_Group (
    id UNIQUEIDENTIFIER DEFAULT NEWID() NOT NULL PRIMARY KEY,
    teacher VARCHAR(50) NOT NULL,
    school VARCHAR(50) NOT NULL,
    id_grade UNIQUEIDENTIFIER,
    "subject" VARCHAR(50) NOT NULL,
    FOREIGN KEY (teacher) REFERENCES Users(email) ON DELETE CASCADE,
    FOREIGN KEY (school) REFERENCES Schools(name) ON DELETE CASCADE,
    FOREIGN KEY (id_grade) REFERENCES Courses(id ) ON DELETE CASCADE,
);
