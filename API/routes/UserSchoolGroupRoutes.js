
import { Router } from "express";
import { createUserSchoolGroup, getGroup, getGrade, getSubject } from '../controllers/UserSchoolGroupController.js';

const UserSchoolGroup = Router();

UserSchoolGroup.post("/createUserSchoolGroup/", createUserSchoolGroup);
UserSchoolGroup.get("/getGroup/", getGroup);
UserSchoolGroup.get("/getGrade/", getGrade);
UserSchoolGroup.get("/getSubject/", getSubject);

export default UserSchoolGroup;