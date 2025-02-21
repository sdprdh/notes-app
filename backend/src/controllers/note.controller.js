import Note from '../models/note.model.js';

// Create a new note
const postNewNoteController = async (req, res) => {
    const {title, content, tags} = req.body;
    const user_id = req.user?.id;

    if (!title?.trim() || !content?.trim()) {
        return res.status(400).json({
            message: 'Title and Content cannot be empty',
        });
    }

    try {
        const note = new Note({
            title,
            content,
            tags: tags || [],
            user_id
        });

        await note.save();

        return res
            .status(201)
            .json({message: 'Created note successfully', note});
    } catch (e) {
        return res
            .status(500)
            .json({message: e.message || 'Internal Server Error'});
    }
};

// Get all notes
const getAllNotesController = async (req, res) => {
    const user_id = req.user?.id;

    try {
        const notes = await Note.find({user_id}).sort({created_at: -1});

        return res
            .status(200)
            .json({message: 'Get all notes succesfully', notes});
    } catch (e) {
        return res
            .status(500)
            .json({message: e.message || 'Internal Server Error'});
    }
};

// Get a single note
const getSingleNoteController = async (req, res) => {
    const note_id = req.params.id;
    const user_id = req.user?.id;

    try {
        const note = await Note.findOne({_id: note_id, user_id});

        if (!note) {
            throw new Error('Note not found');
        }

        return res
            .status(200)
            .json({message: 'Get a single successfully', note});
    } catch (e) {
        return res.status(500).json({
            error: true,
            message: e.message || 'Internal Server Error'
        });
    }
};

// Update a note
const updateNoteController = async (req, res) => {
    const note_id = req.params.id;
    const user_id = req.user?.id;
    const {title, content, tags, isPined} = req.body;

    if (!title?.trim() && !content?.trim()) {
        return res
            .status(400)
            .json({message: 'No changes provided'});
    }

    try {
        const note = await Note.findOneAndUpdate(
            {_id: note_id, user_id},
            {$set: {title, content, tags, isPined}},
            {new: true, runValidators: true}
        );

        if (!note) {
            throw new Error('Note not found');
        }

        return res
            .status(200)
            .json({message: 'Updated note successfully', note});
    } catch (e) {
        return res
            .status(500)
            .json({message: e.message || 'Internal Server Error'});
    }
};

// Delete a note
const deleteNoteController = async (req, res) => {
    const note_id = req.params.id;
    const user_id = req.user?.id;

    try {
        const note = await Note.findOneAndDelete({_id: note_id, user_id});

        if (!note) {
            throw new Error('Note not found');
        }

        return res
            .status(200)
            .json({message: 'Deleted note successfully'});
    } catch (e) {
        return res
            .status(500)
            .json({message: e.message || 'Internal Server Error'});
    }
};


export {
    postNewNoteController,
    getAllNotesController,
    getSingleNoteController,
    updateNoteController,
    deleteNoteController
};