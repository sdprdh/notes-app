import { useSidebarContext } from '@/hooks/useSidebarContext';
import { HStack, Text } from '@chakra-ui/react';
import { RiMenu2Line } from 'react-icons/ri';
import { RxCross1 } from 'react-icons/rx';
import ButtonIcon from '../ui/ButtonIcon';

const NavbarLeft = () => {
   const { open, crumb, toggleSidebar } = useSidebarContext();

   return (
      <HStack>
         <ButtonIcon
            onClick={toggleSidebar}
            icon={open ? <RxCross1 /> : <RiMenu2Line />}
         />
         <Text fontSize={{ base: 'sm', md: 'md' }}>{crumb}</Text>
      </HStack>
   );
};

export default NavbarLeft;
