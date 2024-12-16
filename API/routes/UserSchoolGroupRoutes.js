
import { Router } from "express";
import { createUserSchoolGroup,  getGrade, getSubject } from '../controllers/UserSchoolGroupController.js';

const UserSchoolGroup = Router();

UserSchoolGroup.post("/createUserSchoolGroup/", createUserSchoolGroup);
UserSchoolGroup.get("/getGrade/", getGrade);
UserSchoolGroup.get("/getSubject/", getSubject);

export default UserSchoolGroup;