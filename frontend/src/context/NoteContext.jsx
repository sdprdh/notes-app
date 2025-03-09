import { getNotes, getNotesFavorite } from '@/services/noteService';
import { createContext, useEffect, useReducer } from 'react';

const NoteContext = createContext(null);

const noteReducer = (state, action) => {
   switch (action.type) {
      case 'SET_DATA':
         return {
            ...state,
            data: action.payload,
         };

      case 'ADD_DATA':
         return {
            ...state,
            data: [action.payload, ...state.data],
         };

      case 'UPDATE_DATA':
         return {
            ...state,
            data: state.data.map((item) =>
               item._id === action.payload.id
                  ? { ...item, ...action.payload }
                  : item
            ),
         };

      case 'DELETE_DATA':
         return {
            ...state,
            data: state.data.filter((note) => note._id !== action.payload.id),
         };

      case 'SET_LOADING':
         return {
            ...state,
            loading: action.payload,
         };

      case 'SET_DATA_FAVORITE':
         return {
            ...state,
            favorite: action.payload,
         };

      case 'UPDATE_DATA_FAVORITE':
         return {
            ...state,
            favorite: state.favorite.map((item) =>
               item._id === action.payload.id
                  ? { ...item, ...action.payload }
                  : item
            ),
         };

      default:
         return state;
   }
};

const NoteContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(noteReducer, {
      data: null,
      favorite: null,
      loading: false,
   });

   useEffect(() => {
      (async () => {
         dispatch({ type: 'SET_LOADING', payload: true });
         try {
            const responseData = await getNotes();

            const responseFavorite = await getNotesFavorite();

            if (!responseData.error) {
               dispatch({ type: 'SET_DATA', payload: responseData.data });
            }

            if (!responseFavorite.error) {
               dispatch({
                  type: 'SET_DATA_FAVORITE',
                  payload: responseFavorite.data,
               });
            }
         } catch (e) {
            console.log(e.message);
         } finally {
            dispatch({ type: 'SET_LOADING', payload: false });
         }
      })();
   }, []);

   return <NoteContext value={{ ...state, dispatch }}>{children}</NoteContext>;
};

export { NoteContext, NoteContextProvider };
