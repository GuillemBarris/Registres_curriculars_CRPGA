import { Router } from "express";
import { CreateCourses, GetAllCourses, getGroup, getGrade} from '../controllers/CoursesController.js';

const CoursesRoutes = Router();

CoursesRoutes.post("/createCourse/", CreateCourses);
CoursesRoutes.get("/getAllCourses/", GetAllCourses);
CoursesRoutes.get("/getGroup/", getGroup);
CoursesRoutes.get("/getGrade/", getGrade);

export default CoursesRoutes;