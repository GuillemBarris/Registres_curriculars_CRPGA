import { Router } from "express";
import { CreateUser } from '../controllers/UserController.js';

const UserRoutes = Router();

UserRoutes.post("/create-user/", CreateUser);

export default UserRoutes;