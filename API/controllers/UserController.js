
import sql from 'mssql';
import config from '../config/dbConfig.js'; 
export const CreateUser  = async (req, res) => {
    const { name, email, type } = req.body;
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('name', sql.VarChar, name)
            .input('email', sql.VarChar, email)
            .input('type', sql.VarChar, type)
            .query('USE Registres_Curriculars; INSERT INTO Users (name, email, type) VALUES (@name, @email, @type)');

        // Verifica si la inserción fue exitosa
        if (result.rowsAffected[0] > 0) {
            res.status(201).json({ message: 'User  created successfully' });
        } else {
            res.status(400).json({ message: 'User  creation failed' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error creating user', error: err.message });
    }
};
export const GetAllUsers = async (req, res) => {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .query('USE Registres_Curriculars; SELECT * FROM Users');
        
        res.status(200).json(result.recordset);
    } catch (err) {
        res.status(500).json({ message: 'Error getting users', error: err.message });
    }
};