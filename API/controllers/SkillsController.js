
import sql from 'mssql';
import config from '../config/dbConfig.js';

export const CreateSkills = async (req, res) => {
    const {name, id_subject} = req.body; 
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('name', sql.VarChar, name)
            .input('id_subject', sql.VarChar, id_subject)
            .query('USE Registres_Curriculars; INSERT INTO Skills (name, id_subject) VALUES (@name, @id_subject)');
        if (result.rowsAffected[0] > 0) {
            res.status(201).json({ message: 'Skills created successfully' });
        }
        else{
            res.status(400).json({ message: 'Skills creation failed' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error creating Skills', error: err.message });
    }
}