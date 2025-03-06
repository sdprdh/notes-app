import { SortContext } from '@/context/SortContext';
import { use } from 'react';

export const useSortContext = () => {
   const context = use(SortContext);

   if (!context) {
      throw new Error('context not found');
   }

   return context;
};
