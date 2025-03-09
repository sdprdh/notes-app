import { patchNote, postNote } from '@/services/noteService';
import { useNavigate } from 'react-router-dom';
import { useNoteContext } from '../context/useNoteContext';
import { useUIContext } from '../context/useUIContext';

export const useNoteHandler = () => {
   const { dispatch } = useNoteContext();
   const { stateFormNote, dispatchFormNote } = useUIContext();

   const navigate = useNavigate();

   const handleNoteSubmission = async (e, isUpdate = false) => {
      e.preventDefault();

      dispatch({ type: 'SET_LOADING', payload: true });

      const note = {
         title: e.target.title.value,
         content: e.target.content.value,
      };

      const response = isUpdate
         ? await patchNote(stateFormNote.id, note)
         : await postNote(note);

      if (response.error) {
         dispatchFormNote({ type: 'SET_ERROR', payload: response.message });
         dispatch({ type: 'SET_LOADING', payload: false });
         return;
      }

      dispatch({
         type: isUpdate ? 'UPDATE_DATA' : 'ADD_DATA',
         payload: isUpdate ? { id: stateFormNote.id, ...note } : response.data,
      });

      if (isUpdate && stateFormNote.favorite) {
         dispatch({
            type: 'UPDATE_DATA_FAVORITE',
            payload: { id: stateFormNote.id, ...note },
         });
      }

      navigate(-1);
      dispatch({ type: 'SET_LOADING', payload: false });
   };

   const updateFavorite = async (e, note) => {
      e.stopPropagation();
      await patchNote(note._id, { favorite: !note.favorite });

      dispatch({
         type: 'UPDATE_DATA',
         payload: { id: note._id, favorite: !note.favorite },
      });
   };

   return {
      createNote: (e) => handleNoteSubmission(e, false),
      updateNote: (e) => handleNoteSubmission(e, true),
      updateFavorite,
   };
};
