import jwt from 'jsonwebtoken';

const requireAuthMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader?.startsWith('Bearer ')) {
            return res.status(401).json({message: 'No token provided or invalid format'});
        }

        const token = authHeader.split(' ')[1];

        req.user = jwt.verify(token, process.env.JWT_SECRET);

        next();
    } catch (error) {
        return res
            .status(403)
            .json({message: 'Invalid or expired token'});
    }
};

export default requireAuthMiddleware;
