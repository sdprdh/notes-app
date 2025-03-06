import { HStack } from '@chakra-ui/react';
import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';

const Navbar = () => {
   return (
      <HStack
         as='section'
         h={{ base: 16, md: 20 }}
         justify='space-between'
      >
         <NavbarLeft />
         <NavbarRight />
      </HStack>
   );
};

export default Navbar;
