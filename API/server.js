import express from 'express';
import UserRoutes from './routes/UsersRoutes.js';
import UserSchoolGroup from './routes/UserSchoolGroupRoutes.js';

const app = express()

const PORT = 3000
const IP = '192.168.222.92'
app.use(express.json());
app.use("/api/v1/users", UserRoutes);
app.use("/api/v1/userSchoolGroup", UserSchoolGroup);
app.listen(PORT, IP, () => {
    console.log(`Server is running on http://${IP}:${PORT}`)
});