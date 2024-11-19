CREATE DATABASE IF NOT EXISTS `Registres_Curriculars';
USE `Registres_Curriculars`;

CREATE TABLE IF NOT EXISTS 'Usuari' (
    'nom' VARCHAR(50) NOT NULL,
    'email' VARCHAR(50) NOT NULL,
    'tipus' VARCHAR(50) NOT NULL,
    PRIMARY KEY ('email')
);

