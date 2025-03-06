import { NoteContext } from '@/context/NoteContext';
import { use } from 'react';

export const useNoteContext = () => {
   const context = use(NoteContext);

   if (!context) {
      throw new Error('context not found');
   }

   return context;
};
