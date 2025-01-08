import { Router } from "express";
import { CreateCategories } from "../controllers/CategoriesController.js";

const CatoegoriesRoutes = Router()

CatoegoriesRoutes.post("/cerateCategory/", CreateCategories)

export default CatoegoriesRoutes