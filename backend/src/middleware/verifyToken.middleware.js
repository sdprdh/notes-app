import jwt from 'jsonwebtoken';
import generateResponse from '../utils/generateResponse.util.js';

const verifyToken = (req, res, next) => {
   try {
      const authHeader = req.headers.authorization;

      if (!authHeader?.startsWith('Bearer ')) {
         return generateResponse(res, 401, true, 'no token provided');
      }

      const token = authHeader.split(' ')[1];

      req.user = jwt.verify(token, process.env.JWT_SECRET);

      next();
   } catch (error) {
      return generateResponse(res, 403, true, 'invalid or expired token');
   }
};

export default verifyToken;
