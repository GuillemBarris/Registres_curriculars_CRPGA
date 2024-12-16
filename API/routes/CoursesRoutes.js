import { Router } from "express";
import { CreateCourses} from '../controllers/CoursesController.js';

const CoursesRoutes = Router();

CoursesRoutes.post("/createCourse/", CreateCourses);

export default CoursesRoutes;