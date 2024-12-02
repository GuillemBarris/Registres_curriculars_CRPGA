import sql from "mssql";
import config from "../config/dbConfig.js";

export const createUserSchoolGroup = async (req, res) => {
    const { teacher, school, grade, group, subject } = req.body;
    try{
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('teacher', sql.VarChar, teacher)
            .input('school', sql.VarChar, school)
            .input('grade', sql.VarChar, grade)
            .input('group', sql.VarChar, group)
            .input('subject', sql.VarChar, subject)
            .query('USE Registres_Curriculars; INSERT INTO User_School_Group (teacher, school, grade, "group", "subject") VALUES (@teacher, @school, @grade, @group, @subject)');
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

export const getGroup = async (req, res) => { 
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query('USE Registres_Curriculars; SELECT DISTINCT "Group" FROM User_School_Group');
        res.status(200).json(result.recordset);
    } catch (err) {
        res.status(500).json({ message: 'Error getting groups', error: err.message });
    }
};

export const getGrade = async (req, res) => {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query('USE Registres_Curriculars; SELECT DISTINCT Grade FROM User_School_Group');
        res.status(200).json(result.recordset);
    } catch (err) {
        res.status(500).json({ message: 'Error getting grades', error: err.message });
    }
}