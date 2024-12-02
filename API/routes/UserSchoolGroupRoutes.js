
import { Router } from "express";
import { createUserSchoolGroup, getGroup, getGrade } from '../controllers/UserSchoolGroupController.js';

const UserSchoolGroup = Router();

UserSchoolGroup.post("/createUserSchoolGroup/", createUserSchoolGroup);
UserSchoolGroup.get("/getGroup/", getGroup);
UserSchoolGroup.get("/getGrade/", getGrade);

export default UserSchoolGroup;