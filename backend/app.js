import express from 'express';
import cors from 'cors';

// import routes
import notesRouter from './src/routes/note.route.js';
import userRouter from './src/routes/user.route.js';

// express app
const app = express();

// middleware
app.use(express.json());

app.use(cors({
    origin: [process.env.CLIENT_URL, 'http://localhost:3000'],
    credentials: true,
}));

app.use((req, res, next) => {
    console.log(`path : ${req.path} \nmethod : ${req.method}`);
    next();
});

// routes
app.use('/api/notes', notesRouter);
app.use('/api/user', userRouter);


export default app;