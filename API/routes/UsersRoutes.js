import { Router } from "express";
import { CreateUser, GetAllUsers} from '../controllers/UserController.js';

const UserRoutes = Router();

UserRoutes.post("/create-user/", CreateUser);
UserRoutes.get("/getAllUsers/", GetAllUsers);

export default UserRoutes;