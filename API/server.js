import express from 'express';

const app = express()

const PORT = 3000
const IP = '172.23.1.7'

app.listen(PORT, IP, () => {
    console.log(`Server is running on http://${IP}:${PORT}`)
    });