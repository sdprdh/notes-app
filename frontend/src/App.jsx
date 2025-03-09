import { Box, Flex } from '@chakra-ui/react';
import { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SidebarBackdrop from './components/Sidebar/SidebarBackdrop';
import SortBar from './components/Sortbar';
import { useUIContext } from './hooks/context/useUIContext';

const App = () => {
   const { stateSidebar, dispatchSidebar } = useUIContext();

   const { pathname } = useLocation();

   const hiddenPath =
      !pathname.startsWith('/auth') &&
      !pathname.startsWith('/pengaturan') &&
      !pathname.startsWith('/tambah-catatan') &&
      !pathname.startsWith('/edit-catatan');

   useLayoutEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   }, [pathname]);

   return (
      <Flex
         overflow='hidden'
         boxSizing='border-box'
         position='relative'
      >
         {hiddenPath && <Sidebar open={stateSidebar.open} />}
         <Box
            as='main'
            minH='100vh'
            w='100%'
            ms={{
               base: hiddenPath && stateSidebar.open ? '80vw' : 0,
               md: hiddenPath && stateSidebar.open ? '50vw' : 0,
               lg: hiddenPath && stateSidebar.open ? '290px' : 0,
            }}
            transition={hiddenPath && 'margin-left 0.3s ease-in-out'}
            px={{ base: hiddenPath && 4, md: hiddenPath && 6 }}
            pb={8}
         >
            {hiddenPath && (
               <>
                  <Navbar />
                  <SortBar />
               </>
            )}
            <Outlet />
         </Box>
         {hiddenPath && stateSidebar.open && (
            <SidebarBackdrop
               open={stateSidebar.open}
               onClick={() => dispatchSidebar({ type: 'TOGGLE_SIDEBAR' })}
            />
         )}
      </Flex>
   );
};

export default App;
