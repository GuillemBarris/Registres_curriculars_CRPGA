import sql from "mssql";
import config from "../config/dbConfig.js";

export const CreateCourses = async (req, res) => {
  const { grade, group, name, year, school } = req.body;
  try {
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .input("grade", sql.VarChar, grade)
      .input("group", sql.VarChar, group)
      .input("name", sql.VarChar, name)
      .input("year", sql.VarChar, year)
      .input("school", sql.VarChar, school)
      .query(
        'USE Registres_Curriculars; INSERT INTO Courses (grade, "group", name, year, school) VALUES (@grade, @group, @name, @year, @school)'
      );
    if (result.rowsAffected[0] > 0) {
      res.status(201).json({ message: "Courses  created successfully" });
    } else {
      res.status(400).json({ message: "Courses  creation failed" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating Course", error: err.message });
  }
};

export const GetAllCourses = async (req, res) => {
    try {
        let pool = await sql.connect(config);
        let result = await pool
        .request()
        .query("USE Registres_Curriculars; SELECT * FROM Courses");
    
        res.status(200).json(result.recordset);
    } catch (err) {
        res
        .status(500)
        .json({ message: "Error getting users", error: err.message });
    }
};


export const getGroup = async (req, res) => { 
    try {
        const { school } = req.query; 
        
        if (!school) {
            return res.status(400).json({ message: 'School parameter is required' });
        }

        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('school', sql.VarChar, school) 
            .query('USE Registres_Curriculars; SELECT DISTINCT "group" FROM Courses WHERE school = @school');
        
        res.status(200).json(result.recordset);
    } catch (err) {
        res.status(500).json({ message: 'Error getting groups', error: err.message });
    }
};

export const getGrade = async (req, res) => {
    try {
       const { school } = req.query;
       if (!school) {
           return res.status(400).json({ message: 'School parameter is required' });
       }
       let pool = await sql.connect(config);
       let result = await pool.request()
            .input('school', sql.VarChar, school)
            .query('USE Registres_Curriculars; SELECT DISTINCT "grade" FROM Courses WHERE school = @school');
        res.status(200).json(result.recordset);
    } catch (err) {
        res.status(500).json({ message: 'Error getting grades', error: err.message });
    }
       
}

