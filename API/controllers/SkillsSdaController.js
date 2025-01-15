import sql from 'mssql';
import config from '../config/dbConfig.js';

export const CreateSkillsSda = async (req, res) => {
    const {id_skills, id_sda, check} = req.body;

    try{
        let pool = await sql.connect(config);
        let result = await pool.request()
        .input('id_skills', sql.VarChar, id_skills)
        .input('id_sda', sql.VarChar, id_sda)
        .input('check', sql.Bit, check)
        .query("USE Registres_Curriculars; INSERT INTO Skills_SdA (id_skills, id_sda, [check]) VALUES (@id_skills, @id_sda, @check)");
        if(result.rowsAffected[0]>0){
            res.status(201).json({message: 'Skills_Sda created successfully'});
        }
        else{
            res.status(400).json({message: 'Skills_Sda creation failed'});
        }
    } catch (err){
        res.status(500).json({message: 'Error creating Skills_Sda', error: err.message});
    }
    
}