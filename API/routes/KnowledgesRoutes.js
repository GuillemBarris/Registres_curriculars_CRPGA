import { Router } from "express";
import { CreateKnowledges} from '../controllers/KnowledgesController.js';

const KnoweledgesRoutes = Router();

KnoweledgesRoutes.post("/createKnowledge/", CreateKnowledges);

export default KnoweledgesRoutes;