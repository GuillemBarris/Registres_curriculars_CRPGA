import sql from "mssql";
import config from "../config/dbConfig.js";

export const CreateGidelines = async (req, res) => {
  const { name, id_skills } = req.body;
  try {
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("id_skills", sql.VarChar, id_skills)
      .query(
        "USE Registres_Curriculars; INSERT INTO Gidelines (name, id_skills) VALUES (@name, @id_skills)"
      );
    if (result.rowsAffected[0] > 0) {
      res.status(201).json({ message: "Gidelines  created successfully" });
    } else {
      res.status(400).json({ message: "Gidelines creation failed" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating Course", error: err.message });
  }
};
