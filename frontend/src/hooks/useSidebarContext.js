import { SidebarContext } from '@/context/SidebarContext';
import { use } from 'react';

export const useSidebarContext = () => {
   const context = use(SidebarContext);

   if (!context) {
      throw new Error('context is not defined');
   }

   return context;
};
