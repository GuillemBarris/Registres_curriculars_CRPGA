import { Router } from "express";
import { CreateCategories, GetCategoriesByIdSubject } from "../controllers/CategoriesController.js";

const CatoegoriesRoutes = Router()

CatoegoriesRoutes.post("/createCategory/", CreateCategories)
CatoegoriesRoutes.get("/getCategory/:id_subject", GetCategoriesByIdSubject)


export default CatoegoriesRoutes