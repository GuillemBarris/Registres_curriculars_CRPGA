
import sql from 'mssql';
import config from '../config/dbConfig.js'; 
export const CreateUser = async (req, res) => {
    const { name, email, type } = req.body;
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('name', sql.VarChar, name)
            .input('email', sql.VarChar, email)
            .input('type', sql.VarChar, type)
            .query('USE Registres_Curriculars; INSERT INTO Users (name, email, type) VALUES (@name, @email, @type)');
        
        res.status(201).json({ message: 'User created successfully', userId: result.recordset[0].id });
    } catch (err) {
        res.status(500).json({ message: 'Error creating user', error: err.message });
    }
};