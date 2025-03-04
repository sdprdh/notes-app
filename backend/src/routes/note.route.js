import express from 'express';
import {
   createNoteController,
   deleteNoteController,
   getNoteController,
   getNotesController,
   updateNoteController,
} from '../controllers/note.controller.js';
import verifyToken from '../middleware/verifyToken.middleware.js';

const router = express.Router();

router.use(verifyToken);

router.post('/', createNoteController);

router.get('/', getNotesController);

router.get('/:id', getNoteController);

router.patch('/:id', updateNoteController);

router.delete('/:id', deleteNoteController);

export default router;
