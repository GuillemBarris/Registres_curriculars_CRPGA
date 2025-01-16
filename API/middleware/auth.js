import jwt from 'jsonwebtoken';
import { SECRET } from '../config/dbConfig.js'; 

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; 
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        const decoded = await jwt.verify(token, SECRET);
        req.person = decoded.person;

        if (!isClientAuthorized(req.person)) {
            return res.status(403).json({ message: 'Forbidden' });
        }

        next();
    } catch (e) {
        return res.status(401).json({ message: 'Unauthorized', error: e.message });
    }
};

const isClientAuthorized = (person) => {

    const authorizedRoles = ['admin', 'teacher']; 
    return authorizedRoles.includes(person.role);
};

export default authMiddleware;