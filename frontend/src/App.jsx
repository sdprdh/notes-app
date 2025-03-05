import { Box, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SidebarBackdrop from './components/Sidebar/SidebarBackdrop';
import { useSidebarContext } from './hooks/useSidebarContext';

const App = () => {
   const { open, toggleSidebar } = useSidebarContext();

   return (
      <Flex>
         <Sidebar open={open} />
         <Box
            as='main'
            minH='100vh'
            w='100%'
            ms={{
               base: open ? '80vw' : 0,
               md: open ? '50vw' : 0,
               lg: open ? '290px' : 0,
            }}
            transition='margin-left 0.3s ease-in-out'
            px={{ base: 4, md: 6 }}
         >
            <Navbar />
            <Outlet />
         </Box>
         <SidebarBackdrop
            open={open}
            onClick={toggleSidebar}
         />
      </Flex>
   );
};

export default App;
