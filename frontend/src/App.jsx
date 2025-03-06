import { Box, Flex } from '@chakra-ui/react';
import { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SidebarBackdrop from './components/Sidebar/SidebarBackdrop';
import SortBar from './components/Sortbar';
import { useSidebarContext } from './hooks/useSidebarContext';
import './services/authServices';

const App = () => {
   const { open, toggleSidebar } = useSidebarContext();

   const { pathname } = useLocation();

   const hiddenPath = !pathname.startsWith('/auth');

   useLayoutEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   }, [pathname]);

   return (
      <Flex
         overflow='hidden'
         boxSizing='border-box'
         position='relative'
      >
         {hiddenPath && <Sidebar open={open} />}
         <Box
            as='main'
            minH='100vh'
            w='100%'
            ms={{
               base: hiddenPath && open ? '80vw' : 0,
               md: hiddenPath && open ? '50vw' : 0,
               lg: hiddenPath && open ? '290px' : 0,
            }}
            transition={hiddenPath && 'margin-left 0.3s ease-in-out'}
            px={{ base: hiddenPath && 4, md: hiddenPath && 6 }}
         >
            {hiddenPath && (
               <>
                  <Navbar />
                  <SortBar />
               </>
            )}
            <Outlet />
         </Box>
         {hiddenPath && open && (
            <SidebarBackdrop
               open={open}
               onClick={toggleSidebar}
            />
         )}
      </Flex>
   );
};

export default App;
