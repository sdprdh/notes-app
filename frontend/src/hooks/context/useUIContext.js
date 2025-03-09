import { UIContext } from '@/context/UIContext';
import { use } from 'react';

export const useUIContext = () => {
   const context = use(UIContext);

   if (!context) {
      throw new Error('context not found');
   }

   return context;
};
