import { createContext, useReducer } from 'react';

const UIContext = createContext(null);

const sortNoteReducer = (state, action) => {
   switch (action.type) {
      case 'SET_FIELD':
         return {
            ...state,
            field: action.payload,
         };

      case 'SET_ORDER':
         return {
            ...state,
            order: action.payload,
         };
      default:
         return state;
   }
};

const sidebarReducer = (state, action) => {
   switch (action.type) {
      case 'TOGGLE_SIDEBAR':
         return {
            ...state,
            open: !state.open,
         };

      case 'SET_CRUMB':
         return {
            open: false,
            crumb: action.payload,
         };

      default:
         return state;
   }
};

const formNoteReducer = (state, action) => {
   switch (action.type) {
      case 'SET_TITLE':
         return {
            ...state,
            title: action.payload,
         };

      case 'SET_CONTENT':
         return {
            ...state,
            content: action.payload,
         };

      case 'SET_ERROR':
         return {
            ...state,
            error: action.payload,
         };

      case 'SET_ID':
         return {
            ...state,
            id: action.payload,
         };
      case 'SET_FAVORITE':
         return {
            ...state,
            favorite: action.payload,
         };

      default:
         return state;
   }
};

const UIContextProvider = ({ children }) => {
   const [stateSortNote, dispatchSortNote] = useReducer(sortNoteReducer, {
      field: 'Judul',
      order: 'up',
   });

   const [stateSidebar, dispatchSidebar] = useReducer(sidebarReducer, {
      open: false,
      crumb: 'Semua catatan',
   });

   const [stateFormNote, dispatchFormNote] = useReducer(formNoteReducer, {
      title: '',
      content: '',
      id: null,
      error: null,
      favorite: null,
   });

   return (
      <UIContext
         value={{
            stateSortNote,
            dispatchSortNote,
            stateSidebar,
            dispatchSidebar,
            stateFormNote,
            dispatchFormNote,
         }}
      >
         {children}
      </UIContext>
   );
};
export { UIContext, UIContextProvider };
