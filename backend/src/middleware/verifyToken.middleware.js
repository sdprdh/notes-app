import jwt from 'jsonwebtoken';
import generateResponse from '../utils/generateResponse.util.js';

const verifyToken = (req, res, next) => {
   try {
      const token = req.cookies.token;

      if (!token) {
         return generateResponse(res, 401, true, 'Please log in again.');
      }

      req.user = jwt.verify(token, process.env.JWT_SECRET);

      next();
   } catch (error) {
      return generateResponse(res, 403, true, 'Invalid or expired token.');
   }
};

export default verifyToken;
