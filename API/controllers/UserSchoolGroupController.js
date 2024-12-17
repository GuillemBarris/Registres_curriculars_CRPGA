import sql from "mssql";
import config from "../config/dbConfig.js";

export const createUserSchoolGroup = async (req, res) => {
    const { teacher, school, id_grade, subject } = req.body;
    try{
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('teacher', sql.VarChar, teacher)
            .input('school', sql.VarChar, school)
            .input('id_course', sql.VarChar, id_grade)
            .input('subject', sql.VarChar, subject)
            .query('USE Registres_Curriculars; INSERT INTO User_School_Group (teacher, school, id_course, "subject") VALUES (@teacher, @school, @id_course, @subject)');
        if (result.rowsAffected[0] > 0) {
            res.status(201).json({ message: 'UserSchoolGroup created successfully' });
        }
        else{
            res.status(400).json({ message: 'UserSchoolGroup creation failed' });
        }

    } catch (err) {
        res.status(500).json({ message: 'Error creating UserSchoolGroup', error: err.message });
    }

};

export const getSubject = async (req, res) => {
    try{
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query('USE Registres_Curriculars; SELECT DISTINCT Subject FROM User_School_Group');
        res.status(200).json(result.recordset);
    }catch (err) {
        res.status(500).json({ message: 'Error getting subjects', error: err.message });
    }
}

export const getCoursesFromTeacher = async (req, res) => { 
    try {
        const { teacher } = req.query; 
        if (!teacher) {
            return res.status(400).json({ message: 'Teacher parameter is required' });
        }
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('teacher', sql.VarChar, teacher) 
            .query('USE Registres_Curriculars; SELECT id_course FROM User_School_Group WHERE teacher = @teacher');
        res.status(200).json(result.recordset);
    } catch (err) {
        res.status(500).json({ message: 'Error getting courses', error: err.message });
    }
    
}