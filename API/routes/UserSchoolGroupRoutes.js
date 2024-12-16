
import { Router } from "express";
import { createUserSchoolGroup, getSubject } from '../controllers/UserSchoolGroupController.js';

const UserSchoolGroup = Router();

UserSchoolGroup.post("/createUserSchoolGroup/", createUserSchoolGroup);
UserSchoolGroup.get("/getSubject/", getSubject);

export default UserSchoolGroup;