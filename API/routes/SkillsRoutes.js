import { Router } from "express";
import { CreateSkills } from '../controllers/SkillsController.js';

const SkillsRoutes = Router();

SkillsRoutes.post("/createSkills/", CreateSkills);

export default SkillsRoutes;