import sql from "mssql";
import config from "../config/dbConfig.js";

export const CreateKnowledgesSda = async (req, res) => {
  const { id_Knowledge, id_sda, check } = req.body;
  try {
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .input("id_Knowledge", sql.VarChar, id_Knowledge)
      .input("id_sda", sql.VarChar, id_sda)
      .input("check", sql.Bit, check)
      .query(
        "USE Registres_Curriculars; INSERT INTO Knowledge_SdA (id_Knowledge, id_sda, [check]) VALUES (@id_Knowledge, @id_sda, @check)"
      );
    if (result.rowsAffected[0] > 0) {
      res.status(201).json({ message: "KnowledgesSdA  created successfully" });
    } else {
      res.status(400).json({ message: "KnowledgesSdA creation failed" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating KnowlegesSdA", error: err.message });
  }
};
