import { Router } from "express";
import { CreateUser, GetAllUsers, GetUserbyEmail, RegisterUser} from '../controllers/UserController.js';

const UserRoutes = Router();

UserRoutes.post("/createUser/", CreateUser);
UserRoutes.get("/getAllUsers/", GetAllUsers);
UserRoutes.get("/getUserbyEmail/:email", GetUserbyEmail);
UserRoutes.post("/registerUser/", RegisterUser);

export default UserRoutes;