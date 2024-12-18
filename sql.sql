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
    id_course UNIQUEIDENTIFIER,
    "subject" VARCHAR(50) NOT NULL,
    FOREIGN KEY (teacher) REFERENCES Users(email),
    FOREIGN KEY (school) REFERENCES Schools(name),
    FOREIGN KEY (id_course) REFERENCES Courses(id ),
);
Create Table Templates (
    id UNIQUEIDENTIFIER DEFAULT NEWID() NOT NULL PRIMARY KEY,
    grades VARCHAR(50) NOT NULL,

)
Create Table SdA (
    id  UNIQUEIDENTIFIER DEFAULT NEWID() NOT NULL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(500) NOT NULL,
    link VARCHAR(255) NOT NULL,
    id_course UNIQUEIDENTIFIER,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    id_template UNIQUEIDENTIFIER,
    FOREIGN KEY (id_template) REFERENCES Templates(id),
    FOREIGN KEY (id_course) REFERENCES Courses(id ),
)


Create Table Areas (
    id UNIQUEIDENTIFIER DEFAULT NEWID() NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    type VARCHAR(50) NOT NULL,
    id_template UNIQUEIDENTIFIER,
    FOREIGN KEY (id_template) REFERENCES Templates(id)
    )

Create Table Subjects (
    id UNIQUEIDENTIFIER DEFAULT NEWID() NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    id_area UNIQUEIDENTIFIER,
    FOREIGN KEY (id_area) REFERENCES Areas(id)
)

Create Table Skills (
    id UNIQUEIDENTIFIER DEFAULT NEWID() NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    id_subject UNIQUEIDENTIFIER,
    FOREIGN KEY (id_subject) REFERENCES Subjects(id),
)

Create Table Gidelines (
    id UNIQUEIDENTIFIER DEFAULT NEWID() NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    id_skills UNIQUEIDENTIFIER,
    FOREIGN KEY (id_skills) REFERENCES Skills(id),
)

Create Table Categories (
    id UNIQUEIDENTIFIER DEFAULT NEWID() NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    id_subject UNIQUEIDENTIFIER,
    FOREIGN KEY (id_subject) REFERENCES Subjects(id),
)

Create Table Knowledge (
    id UNIQUEIDENTIFIER DEFAULT NEWID() NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    id_category UNIQUEIDENTIFIER,
    FOREIGN KEY (id_category) REFERENCES Categories(id),
)

Create Table Gidelines_SdA (
    id UNIQUEIDENTIFIER DEFAULT NEWID() NOT NULL PRIMARY KEY,
    id_skills UNIQUEIDENTIFIER,
    id_sda UNIQUEIDENTIFIER,
    [check] Bit NOT NULL,
    FOREIGN KEY (id_gidlines) REFERENCES Gidelines(id),
    FOREIGN KEY (id_sda) REFERENCES SdA(id),
)

Create Table Knowledge_SdA (
    id UNIQUEIDENTIFIER DEFAULT NEWID() NOT NULL PRIMARY KEY,
    id_Knowledge UNIQUEIDENTIFIER,
    id_sda UNIQUEIDENTIFIER,
    [check] BIT NOT NULL,
    FOREIGN KEY (id_Knowledge) REFERENCES Knowledge(id),
    FOREIGN KEY (id_sda) REFERENCES SdA(id),
)
Create Table Vectors (
    id UNIQUEIDENTIFIER DEFAULT NEWID() NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    id_vectors UNIQUEIDENTIFIER,
    FOREIGN KEY (id_vectors) REFERENCES Vectors(id),
)