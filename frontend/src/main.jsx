import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { SidebarContextProvider } from './context/SidebarContext';
import router from './routes/router';
import system from './theme/theme';

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <ChakraProvider value={system}>
         <SidebarContextProvider>
            <RouterProvider router={router} />
         </SidebarContextProvider>
      </ChakraProvider>
   </StrictMode>
);
