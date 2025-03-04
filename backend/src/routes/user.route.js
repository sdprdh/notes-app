import express from 'express';
import {
   getUserController,
   loginUserController,
   registerUserController,
} from '../controllers/user.controller.js';
import verifyToken from '../middleware/verifyToken.middleware.js';

const router = express.Router();

router.post('/register', registerUserController);

router.post('/login', loginUserController);

router.get('/user', verifyToken, getUserController);

export default router;
