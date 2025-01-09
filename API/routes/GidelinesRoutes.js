import {Router} from "express";
import {CreateGidelines} from '../controllers/GidelinesController.js';

const GuidelinesRoutes = Router();

GuidelinesRoutes.post("/createGidelines/", CreateGidelines);

export default GuidelinesRoutes;