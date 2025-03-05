import { HStack } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoSearch } from 'react-icons/io5';
import ButtonIconWithHover from '../ui/ButtonIconWithHover';

const NavbarRight = () => {
   return (
      <HStack spaceX={-2}>
         <ButtonIconWithHover icon={<IoSearch />} />
         <ButtonIconWithHover icon={<BsThreeDotsVertical />} />
      </HStack>
   );
};

export default NavbarRight;
