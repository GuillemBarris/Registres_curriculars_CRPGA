import { Router } from "express";
import { CreateSkillsSda } from '../controllers/SkillsSdaController.js';

const SkillsSdARoutes = Router();

SkillsSdARoutes.post("/createSkillsSda/", CreateSkillsSda);

export default SkillsSdARoutes;