import express from 'express';
import {
   createNoteController,
   deleteNoteController,
   getNotesController,
   getNotesFavoriteController,
   updateNoteController,
} from '../controllers/note.controller.js';
import verifyToken from '../middleware/verifyToken.middleware.js';

const router = express.Router();

router.use(verifyToken);

router.post('/', createNoteController);

router.get('/', getNotesController);

router.patch('/:id', updateNoteController);

router.delete('/:id', deleteNoteController);

router.get('/favorite', getNotesFavoriteController)

export default router;
