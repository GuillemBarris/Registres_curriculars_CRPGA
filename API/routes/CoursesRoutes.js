import { Router } from "express";
import { CreateCourses, GetAllCourses, getGroup} from '../controllers/CoursesController.js';

const CoursesRoutes = Router();

CoursesRoutes.post("/createCourse/", CreateCourses);
CoursesRoutes.get("/getAllCourses/", GetAllCourses);
CoursesRoutes.get("/getGroup/", getGroup);

export default CoursesRoutes;