import express from 'express';
import cors from 'cors';
import UserRoutes from './routes/UsersRoutes.js';
import UserSchoolGroup from './routes/UserSchoolGroupRoutes.js';
import SchoolsRoutes from './routes/SchoolsRoutes.js';
import CoursesRoutes from './routes/CoursesRoutes.js';
import SdaRoutes from './routes/SdaRoutes.js';
import CatoegoriesRoutes from './routes/CategoriesRoutes.js';
import KnoweledgesRoutes from './routes/KnowledgesRoutes.js';

const app = express();

const PORT = 3000;
const IP = '172.21.46.184';

app.use(cors()); 
app.use(express.json());
app.use("/api/v1/users", UserRoutes);
app.use("/api/v1/userSchoolGroup", UserSchoolGroup);
app.use("/api/v1/schools", SchoolsRoutes);
app.use("/api/v1/courses", CoursesRoutes);
app.use("/api/v1/sda", SdaRoutes);
app.use("/api/v1/categories", CatoegoriesRoutes)
app.use("/api/v1/knowledge", KnoweledgesRoutes)

app.listen(PORT, IP, () => {
    console.log(`Server is running on http://${IP}:${PORT}`);
});