import sql from "mssql";
import config from "../config/dbConfig.js";

export const CreateCategories = async (req, res) => {
  const { name, id_subject } = req.body;
  try {
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("id_subject", sql.VarChar, id_subject)
      .query(
        "USE Registres_Curriculars; INSERT INTO Categories (name, id_subject) VALUES (@name, @id_subject)"
      );
    if (result.rowsAffected[0] > 0) {
      res.status(201).json({ message: "User  created successfully" });
    } else {
      res.status(400).json({ message: "User  creation failed" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating user", error: err.message });
  }
};

export const GetCategoriesByIdSubject = async (req, res) => {
  const { id_subject } = req.params;
  try {
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .input("id_subject", sql.VarChar, id_subject)
      .query(
        "USE Registres_Curriculars; SELECT * FROM Categories WHERE id_subject = @id_subject"
      );
    res.status(200).json(result.recordset);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error getting Categories", error: err.message });
  }
}