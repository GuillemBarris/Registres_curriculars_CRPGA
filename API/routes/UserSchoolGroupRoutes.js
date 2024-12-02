
import { Router } from "express";
import { createUserSchoolGroup } from '../controllers/UserSchoolGroupController.js';

const UserSchoolGroup = Router();

UserSchoolGroup.post("/createUserSchoolGroup/", createUserSchoolGroup);

export default UserSchoolGroup;