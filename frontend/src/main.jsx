import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import { NoteContextProvider } from './context/NoteContext';
import { UIContextProvider } from './context/UIContext';
import router from './routes/router';
import system from './theme/theme';

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <ChakraProvider value={system}>
         <UIContextProvider>
            <AuthContextProvider>
               <NoteContextProvider>
                  <RouterProvider router={router} />
               </NoteContextProvider>
            </AuthContextProvider>
         </UIContextProvider>
      </ChakraProvider>
   </StrictMode>
);
