import sql from "mssql";
import config from "../config/dbConfig.js";

export const CreateKnowledges = async (req, res) => {
  const { name, id_category } = req.body;
  try {
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("id_category", sql.VarChar, id_category)
      .query(
        "USE Registres_Curriculars; INSERT INTO Knowledge (name, id_category) VALUES (@name, @id_category)"
      );
    if (result.rowsAffected[0] > 0) {
      res.status(201).json({ message: "Knowledges  created successfully" });
    } else {
      res.status(400).json({ message: "Knowledges creation failed" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating Course", error: err.message });
  }
};

export const GetKnowledgesByIdCategory = async (req, res) => {
  const { id_category } = req.params;
  try {
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .input("id_category", sql.VarChar, id_category)
      .query(
        "USE Registres_Curriculars; SELECT * FROM Knowledge WHERE id_category = @id_category"
      );
    res.status(200).json(result.recordset);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error getting Knowledge", error: err.message });
  }
}