CREATE DATABASE RegistresCurriculars;

USE RegistresCurriculars;

CREATE TABLE Centre (
    Nom VARCHAR(255) PRIMARY KEY,
    Logo VARCHAR(255)
);

CREATE TABLE Usuari (
    Nom VARCHAR(255) NOT NULL,
    Correu VARCHAR(255) PRIMARY KEY,
    Centre_Nom VARCHAR(255),
    Contrasenya VARCHAR(255),
    Tipus VARCHAR(255),
    FOREIGN KEY (Centre_Nom) REFERENCES Centre(Nom)
);

CREATE TABLE Historial (
    id INT AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE Curs (
    Nom VARCHAR(255) NOT NULL,
    Grup VARCHAR(255),
    Any INT NOT NULL,
    PRIMARY KEY (Nom, Any, Grup),    
    Usuari_correu VARCHAR(255),
    Historial_id INT,
    FOREIGN KEY (Usuari_correu) REFERENCES Usuari(Correu),
    FOREIGN KEY (Historial_id) REFERENCES Historial(id)
);

CREATE TABLE Projecte (
    Titol VARCHAR(255) PRIMARY KEY,
    Link VARCHAR(255),
    Data_Inici DATE,
    Data_Fi DATE,    
    Descripcio TEXT,    
    Curs_Nom VARCHAR(255),
    Curs_Any INT,
    Curs_Grup VARCHAR(255),
    FOREIGN KEY (Curs_Nom) REFERENCES Curs(Nom),
    FOREIGN KEY (Curs_Any) REFERENCES Curs(Any),
    FOREIGN KEY (Curs_Grup) REFERENCES Curs(Grup)
);

CREATE TABLE Competencia (
    Nom VARCHAR(255) PRIMARY KEY,
    Tipus VARCHAR(255),
    Projecte_Titol VARCHAR(255),
    FOREIGN KEY (Projecte_Titol) REFERENCES Projecte(Titol)
    
);

CREATE TABLE Assignatura (
    Nom VARCHAR(255) PRIMARY KEY,
    Competencia_Nom VARCHAR(255),
    FOREIGN KEY (Competencia_Nom) REFERENCES Competencia(Nom)
);

CREATE TABLE Criteri (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Descripcio TEXT NOT NULL,
    Assignatura_Nom VARCHAR(255),
    FOREIGN KEY (Assignatura_Nom) REFERENCES Assignatura(Nom)
);

CREATE TABLE Avaluacio (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Descripcio TEXT NOT NULL,
    Criteri_id INT,
    FOREIGN KEY (Criteri_id) REFERENCES Criteri(id)
);

CREATE TABLE Categoria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Descripcio TEXT NOT NULL,
    Assignatura_Nom VARCHAR(255),
    FOREIGN KEY (Assignatura_Nom) REFERENCES Assignatura(Nom)
);

CREATE TABLE Sabers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Descripcio TEXT NOT NULL,
    Categoria_id INT,
    FOREIGN KEY (Categoria_id) REFERENCES Categoria(id)
);

CREATE TABLE Curs_Historial (
    Curs_Nom VARCHAR(255),
    Curs_Any INT,
    Curs_Grup VARCHAR(255),
    Historial_id INT,
    PRIMARY KEY (Curs_Nom, Curs_Any, Curs_Grup, Historial_id),
    FOREIGN KEY (Curs_Nom) REFERENCES Curs(Nom),
    FOREIGN KEY (Curs_Any) REFERENCES Curs(Any),
    FOREIGN KEY (Curs_Grup) REFERENCES Curs(Grup),
    FOREIGN KEY (Historial_id) REFERENCES Historial(id)
);