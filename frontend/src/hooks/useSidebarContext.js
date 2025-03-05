import { SidebarContext } from '@/context/SidebarContext';
import { use } from 'react';

export const useSidebarContext = () => {
   const context = use(SidebarContext);

   if (!context) {
      throw new Error('context not found');
   }

   return context;
};
