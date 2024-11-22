import express from 'express';
import UserRoutes from './routes/UsersRoutes.js';
const app = express()

const PORT = 3000
const IP = '172.23.1.23'
app.use(express.json());
app.use("/api/v1/users", UserRoutes);
app.listen(PORT, IP, () => {
    console.log(`Server is running on http://${IP}:${PORT}`)
});