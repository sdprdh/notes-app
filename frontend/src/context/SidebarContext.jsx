import { createContext, useState } from 'react';

const SidebarContext = createContext(null);

const SidebarContextProvider = ({ children }) => {
   const [state, setState] = useState({
      open: false,
      crumb: 'Semua catatan',
   });

   const toggleSidebar = (open) => {
      setState((prev) => ({
         ...prev,
         open: open || !prev.open,
      }));
   };

   const setCrumbSidebar = (crumb) => {
      setState(() => ({
         open: false,
         crumb,
      }));
   };

   return (
      <SidebarContext value={{ ...state, toggleSidebar, setCrumbSidebar }}>
         {children}
      </SidebarContext>
   );
};

export { SidebarContext, SidebarContextProvider };
