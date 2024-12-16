import { Router } from "express";
import { CreateSchool } from '../controllers/SchoolsController.js';

const SchoolsRoutes = Router();

SchoolsRoutes.post("/createSchool/", CreateSchool);

export default SchoolsRoutes;