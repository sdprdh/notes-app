import { IconButton } from '@chakra-ui/react';
import { RiMenu2Line } from 'react-icons/ri';

const ButtonIcon = () => {
   return (
      <IconButton
         unstyled
         fontSize={{ base: 'md', md: 'xl' }}
         cursor='pointer'
      >
         <RiMenu2Line />
      </IconButton>
   );
};

export default ButtonIcon;
