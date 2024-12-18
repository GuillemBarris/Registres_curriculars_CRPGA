
import { Router } from "express";
import { createUserSchoolGroup, getSubject, getCoursesFromTeacher } from '../controllers/UserSchoolGroupController.js';

const UserSchoolGroup = Router();

UserSchoolGroup.post("/createUserSchoolGroup/", createUserSchoolGroup);
UserSchoolGroup.get("/getSubject/", getSubject);
UserSchoolGroup.get("/getCoursesFromTeacher/", getCoursesFromTeacher);

export default UserSchoolGroup;