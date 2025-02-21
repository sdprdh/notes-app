import express from 'express'
import {loginUserController, registerUserController} from "../controllers/user.controller.js";

const router = express.Router();

// register user
router.post('/register', registerUserController);

// login user
router.post('/login', loginUserController);


export default router;