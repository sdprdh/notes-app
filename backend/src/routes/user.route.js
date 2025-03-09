import express from 'express';
import {
   deleteUserController,
   getUserController,
   loginUserController,
   logoutUserController,
   registerUserController,
} from '../controllers/user.controller.js';
import verifyToken from '../middleware/verifyToken.middleware.js';

const router = express.Router();

router.post('/register', registerUserController);

router.post('/login', loginUserController);

router.post('/logout', logoutUserController);

router.get('/user', verifyToken, getUserController);

router.delete('/user', verifyToken, deleteUserController);

export default router;
