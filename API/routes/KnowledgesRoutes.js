import { Router } from "express";
import { CreateKnowledges, GetKnowledgesByIdCategory} from '../controllers/KnowledgesController.js';

const KnoweledgesRoutes = Router();

KnoweledgesRoutes.post("/createKnowledge/", CreateKnowledges);
KnoweledgesRoutes.get("/getKnowledge/:id_category", GetKnowledgesByIdCategory);

export default KnoweledgesRoutes;