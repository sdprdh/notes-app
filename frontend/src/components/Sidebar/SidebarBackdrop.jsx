import { Box } from '@chakra-ui/react';

const SidebarBackdrop = ({ open, onClick }) => {
   return (
      <Box
         w='100'
         h='100vh'
         bg='rgba(0, 0, 0, 0.1)'
         position='absolute'
         left={0}
         right={0}
         top={0}
         bottom={0}
         zIndex='10'
         transition='transform 0.1s ease-in-out'
         transform={open ? 'translateX(0)' : 'translateX(-100%)'}
         transformOrigin='left'
         cursor='pointer'
         onClick={onClick}
      ></Box>
   );
};

export default SidebarBackdrop;
