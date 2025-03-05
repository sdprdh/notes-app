import { Box } from '@chakra-ui/react';
import SidebarContent from './SidebarContent';

const Sidebar = ({ open }) => {
   return (
      <Box
         as='aside'
         w={{ base: '80vw', md: '50vw', lg: '300px' }}
         h='100vh'
         position='fixed'
         left='0'
         top='0'
         bg='transparent'
         pe={2}
         pt={6}
         pb={6}
         zIndex='1000'
         transition='transform 0.3s ease-in-out'
         transform={open ? 'translateX(0)' : 'translateX(-100%)'}
      >
         <SidebarContent />
      </Box>
   );
};

export default Sidebar;
