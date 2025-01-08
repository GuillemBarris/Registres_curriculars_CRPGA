
import sql from 'mssql';
import config from '../config/dbConfig.js'; 

export const CreateSchool = async (req, res) => {
  const { name } = req.body;
  try {
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .input("name", sql.VarChar, name)
      .query(
        "USE Registres_Curriculars; INSERT INTO Schools (name) VALUES (@name)"
      );

    if (result.rowsAffected[0] > 0) {
      res.status(201).json({ message: "Schools  created successfully" });
    } else {
      res.status(400).json({ message: "Schools  creation failed" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating Schools", error: err.message });
  }
};
