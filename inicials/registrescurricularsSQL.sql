CREATE DATABASE RegistresCurriculars;

USE RegistresCurriculars;

CREATE TABLE Centre (
    Nom NVARCHAR(255) PRIMARY KEY,
    Logo NVARCHAR(255)
);

CREATE TABLE Usuari (
    Nom NVARCHAR(255) NOT NULL,
    Correu NVARCHAR(255) PRIMARY KEY,
    Centre_Nom NVARCHAR(255),
    Contrasenya NVARCHAR(255),
    Tipus NVARCHAR(255),
    FOREIGN KEY (Centre_Nom) REFERENCES Centre(Nom)
);

CREATE TABLE Historial (
    ID UNIQUEIDENTIFIER DEFAULT NEWID() PRIMARY KEY
);

CREATE TABLE Curs (
    Nom NVARCHAR(255) NOT NULL,
    Grup NVARCHAR(255),
    "Any" INT NOT NULL,
    Usuari_correu NVARCHAR(255),
	PRIMARY KEY (Nom, "Any", Grup),   
    FOREIGN KEY (Usuari_correu) REFERENCES Usuari(Correu),
);

CREATE TABLE Projecte (
    Titol NVARCHAR(255),
    Link NVARCHAR(255),
    Data_Inici DATE,
    Data_Fi DATE,    
    Descripcio TEXT,    
    Curs_Nom NVARCHAR(255) Not Null,
	Curs_Grup NVARCHAR(255),
    Curs_Any INT Not Null,
    PRIMARY Key (Titol, Data_Inici),
    FOREIGN KEY (Curs_Nom, Curs_Any, Curs_Grup) REFERENCES Curs(Nom,"Any",Grup),
    
);

CREATE TABLE Competencia (
    Nom NVARCHAR(255) PRIMARY KEY,
    Tipus NVARCHAR(255),
    Projecte_Titol NVARCHAR(255),
	Projecte_Data_Inici DATE,
    FOREIGN KEY (Projecte_Titol, Projecte_Data_Inici) REFERENCES Projecte(Titol, Data_Inici),
    
);

CREATE TABLE Assignatura (
    Nom NVARCHAR(255) PRIMARY KEY,
    Competencia_Nom NVARCHAR(255),
    FOREIGN KEY (Competencia_Nom) REFERENCES Competencia(Nom)
);

CREATE TABLE Criteri (
    ID UNIQUEIDENTIFIER DEFAULT NEWID() PRIMARY KEY,
    Descripcio TEXT NOT NULL,
    Assignatura_Nom NVARCHAR(255),
    FOREIGN KEY (Assignatura_Nom) REFERENCES Assignatura(Nom)
);

CREATE TABLE Avaluacio (
    ID UNIQUEIDENTIFIER DEFAULT NEWID() PRIMARY KEY,
    Descripcio TEXT NOT NULL,
    Criteri_id UNIQUEIDENTIFIER,
    FOREIGN KEY (Criteri_id) REFERENCES Criteri(id)
);

CREATE TABLE Categoria (
    ID UNIQUEIDENTIFIER DEFAULT NEWID() PRIMARY KEY,
    Descripcio TEXT NOT NULL,
    Assignatura_Nom NVARCHAR(255),
    FOREIGN KEY (Assignatura_Nom) REFERENCES Assignatura(Nom)
);

CREATE TABLE Sabers (
    ID UNIQUEIDENTIFIER DEFAULT NEWID() PRIMARY KEY,
    Descripcio TEXT NOT NULL,
    Categoria_id UNIQUEIDENTIFIER,
    FOREIGN KEY (Categoria_id) REFERENCES Categoria(id)
);

CREATE TABLE Curs_Historial (
    Curs_Nom NVARCHAR(255),
    Curs_Any INT,
    Curs_Grup NVARCHAR(255),
    Historial_id UNIQUEIDENTIFIER,
    PRIMARY KEY (Curs_Nom, Curs_Any, Curs_Grup, Historial_id),
    FOREIGN KEY (Curs_Nom,Curs_Any, Curs_Grup) REFERENCES Curs(Nom, "Any", Grup),
    FOREIGN KEY (Historial_id) REFERENCES Historial(id)
);