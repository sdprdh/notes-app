import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

// import routes
import notesRouter from './src/routes/note.route.js';
import userRouter from './src/routes/user.route.js';

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());

app.use(
   cors({
      origin: [process.env.FRONTEND_URL, `http://localhost:${PORT}`],
      credentials: true,
   })
);

// routes
app.use('/api/notes', notesRouter);
app.use('/api/auth', userRouter);

export { app, PORT };
