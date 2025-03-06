import { createContext, useState } from 'react';

const SortContext = createContext(null);

const SortContextProvider = ({ children }) => {
   const [state, setState] = useState({
      up: false,
      text: 'Judul',
   });

   const toggleArrow = () => {
      setState((prev) => ({
         ...prev,
         up: !prev.up,
      }));
   };

   const setTextMenu = (text) => {
      setState((prev) => ({
         ...prev,
         text,
      }));
   };

   return (
      <SortContext value={{ ...state, toggleArrow, setTextMenu }}>
         {children}
      </SortContext>
   );
};

export { SortContext, SortContextProvider };
