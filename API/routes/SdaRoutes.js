import { Router } from "express";
import { CreateSda, GetSdaFromCourse } from '../controllers/SdaController.js';

const SdaRoutes = Router();

SdaRoutes.post("/createSda/", CreateSda);
SdaRoutes.get("/getSdaFromCourse/:id_course", GetSdaFromCourse);

export default SdaRoutes;