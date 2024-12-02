
import { Router } from "express";
import { createUserSchoolGroup, getGroup } from '../controllers/UserSchoolGroupController.js';

const UserSchoolGroup = Router();

UserSchoolGroup.post("/createUserSchoolGroup/", createUserSchoolGroup);
UserSchoolGroup.get("/getGroup/", getGroup);

export default UserSchoolGroup;