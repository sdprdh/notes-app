import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

// Import routes
import notesRouter from './src/routes/note.route.js';
import userRouter from './src/routes/user.route.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
   cors({
      origin: process.env.FRONTEND_URL,
      credentials: true,
   })
);
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/notes', notesRouter);
app.use('/api/auth', userRouter);

export default app;
