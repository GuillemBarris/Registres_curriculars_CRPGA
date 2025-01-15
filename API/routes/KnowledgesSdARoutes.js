import { Router } from "express";
import { CreateKnowledgesSda } from '../controllers/KnowledgesSdaController.js';

const KnowledgesSdaRoutes = Router();

KnowledgesSdaRoutes.post("/createKnowledgesSda/", CreateKnowledgesSda );

export default KnowledgesSdaRoutes;