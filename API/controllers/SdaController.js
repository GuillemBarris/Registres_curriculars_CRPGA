import sql from 'mssql';
import config from '../config/dbConfig.js';

export const CreateSda  = async (req, res) => {
    const { title, description, link, id_course, start_date, end_date, id_template, creation_date} = req.body;
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('title', sql.VarChar, title)
            .input('description', sql.VarChar, description)
            .input('link', sql.VarChar, link)
            .input('id_course', sql.VarChar, id_course)
            .input('start_date', sql.Date, start_date)
            .input('end_date', sql.Date, end_date)
            .input('id_template', sql.VarChar, id_template)
            .input('creation_date', sql.DateTime, creation_date)
            .query('USE Registres_Curriculars; INSERT INTO Sda ( title, description, link, id_course, start_date, end_date, id_template, creation_date) VALUES ( @title, @description, @link, @id_course, @start_date, @end_date, @id_template, @creation_date)');
        if (result.rowsAffected[0] > 0) {
            res.status(201).json({ message: 'Sda created successfully' });
        }
        else{
            res.status(400).json({ message: 'Sda creation failed' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error creating Sda', error: err.message });
    }
};

export const GetSdaFromCourse = async (req, res) => {
    try {
        const { id_course } = req.query;
        if (!id_course) {
            return res.status(400).json({ message: 'Course parameter is required' });
        }
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('id_course', sql.VarChar, id_course)
            .query('USE Registres_Curriculars; SELECT * FROM Sda WHERE id_course = @id_course');
        res.status(200).json(result.recordset);
    } catch (err) {
        res.status(500).json({ message: 'Error getting Sda', error: err.message });
    }
}


        
    
    