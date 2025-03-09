import { AuthContext } from '@/context/AuthContext';
import { use } from 'react';

export const useAuthContext = () => {
   const context = use(AuthContext);

   if (!context) {
      throw new Error('context not found');
   }

   return context;
};
