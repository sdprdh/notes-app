import { createContext, useReducer } from 'react';

const NoteContext = createContext(null);

const noteReducer = (state, action) => {
   switch (action.type) {
      case 'SET_NOTE':
         return {
            ...state,
            note: null,
         };

      case 'UPDATE_NOTE':
         return {
            ...state,
            note: state.note.map((item) =>
               item._id === action.payload._id
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
      note: null,
      favoriteNote: null,
   });

   return <NoteContext value={{ ...state, dispatch }}>{children}</NoteContext>;
};

export { NoteContext, NoteContextProvider };
