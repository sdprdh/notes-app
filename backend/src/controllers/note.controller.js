import Note from '../models/note.model.js';
import generateResponse from '../utils/generateResponse.util.js';

const createNoteController = async (req, res) => {
   const { title } = req.body;
   const { id } = req.user;

   if (!title) {
      return generateResponse(res, 400, true, 'title cannot be empty');
   }

   try {
      const noteExist = await Note.findOne({ title });

      if (noteExist) {
         return generateResponse(res, 409, true, 'note already exist');
      }

      const note = await Note({ ...req.body, user_id: id });

      await note.save();

      return generateResponse(res, 201, false, 'create note succesfully', note);
   } catch (e) {
      return generateResponse(res, 500, true, e.message);
   }
};

const getNotesController = async (req, res) => {
   const { id } = req.user;

   try {
      const notes = await Note.find({ user_id: id })
         .sort({ created_at: -1 })
         .select('-__v')
         .lean();

      return generateResponse(res, 200, false, 'get notes succesfully', notes);
   } catch (e) {
      return generateResponse(res, 500, true, e.message);
   }
};

const getNoteController = async (req, res) => {
   const { id } = req.params;

   try {
      const note = await Note.findById(id).select('-__v').lean();

      if (!note) {
         return generateResponse(res, 404, true, 'note not found');
      }

      return generateResponse(res, 200, false, 'get note succesfully', note);
   } catch (e) {
      return generateResponse(res, 500, true, e.message);
   }
};

const updateNoteController = async (req, res) => {
   const { id } = req.params;

   try {
      const note = await Note.findByIdAndUpdate(
         id,
         { ...req.body },
         { new: true }
      );

      if (!note) {
         return generateResponse(res, 404, true, 'note not found');
      }

      return generateResponse(res, 200, false, 'update note succesfully', note);
   } catch (e) {
      return generateResponse(res, 500, true, e.message);
   }
};

const deleteNoteController = async (req, res) => {
   const { id } = req.params;

   try {
      const note = await Note.findByIdAndDelete(id);

      if (!note) {
         return generateResponse(res, 404, true, 'note not found');
      }

      return generateResponse(res, 200, false, 'delete note succesfully');
   } catch (e) {
      return generateResponse(res, 500, true, e.message);
   }
};

export {
   createNoteController,
   deleteNoteController,
   getNoteController,
   getNotesController,
   updateNoteController,
};
