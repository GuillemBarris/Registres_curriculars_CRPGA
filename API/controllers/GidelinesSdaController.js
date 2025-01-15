import sql from "mssql";
import config from "../config/dbConfig.js";

export const CreateGidelinesSda = async (req, res) => {
  const { id_gidelines, id_sda, check } = req.body;
  try {
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .input("id_gidelines", sql.VarChar, id_gidelines)
      .input("id_sda", sql.VarChar, id_sda)
      .input("check", sql.Bit, check)
      .query(
        "USE Registres_Curriculars; INSERT INTO Gidelines_SdA (id_gidelines, id_sda, [check]) VALUES (@id_gidelines, @id_sda, @check)"
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
