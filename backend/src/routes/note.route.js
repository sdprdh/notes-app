import express from 'express';
import {
    deleteNoteController,
    getAllNotesController,
    getSingleNoteController,
    postNewNoteController,
    updateNoteController
} from "../controllers/note.controller.js";
import requireAuthMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(requireAuthMiddleware);

// post a new note
router.post('/', postNewNoteController);

// get all
router.get('/', getAllNotesController);

// get a single note
router.get('/:id', getSingleNoteController);

// update a note
router.patch('/:id', updateNoteController);

// delete a note
router.delete('/:id', deleteNoteController);


export default router;