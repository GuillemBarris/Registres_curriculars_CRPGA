import { Router } from "express";
import { CreateGidelinesSda } from '../controllers/GidelinesSdaController.js';

const GuidelinesSdaRoutes = Router();

GuidelinesSdaRoutes.post("/createGidelinesSda/", CreateGidelinesSda );

export default GuidelinesSdaRoutes;