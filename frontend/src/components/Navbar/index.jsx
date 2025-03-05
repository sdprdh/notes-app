import { HStack } from '@chakra-ui/react';
import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';

const Navbar = () => {
   return (
      <HStack
         h={{ base: 16 }}
         justify='space-between'
      >
         <NavbarLeft />
         <NavbarRight />
      </HStack>
   );
};

export default Navbar;
