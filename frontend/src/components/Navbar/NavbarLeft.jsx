import { useUIContext } from '@/hooks/context/useUIContext';
import { HStack, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { RiMenu2Line } from 'react-icons/ri';
import { RxCross1 } from 'react-icons/rx';
import { useLocation } from 'react-router-dom';
import ButtonIcon from '../ui/ButtonIcon';

const NavbarLeft = () => {
   const { stateSidebar, dispatchSidebar } = useUIContext();
   const { pathname } = useLocation();

   useEffect(() => {
      let formattedCrumb = '';

      if (pathname === '/') {
         formattedCrumb = 'Semua Catatan';
      } else {
         formattedCrumb = pathname
            .replace(/\//g, ' ')
            .replace(/-/g, ' ')
            .trim()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
      }

      dispatchSidebar({ type: 'SET_CRUMB', payload: formattedCrumb });
   }, [pathname, dispatchSidebar]);

   return (
      <HStack>
         <ButtonIcon
            onClick={() => dispatchSidebar({ type: 'TOGGLE_SIDEBAR' })}
            icon={stateSidebar.open ? <RxCross1 /> : <RiMenu2Line />}
         />
         <Text
            fontSize={{ base: 'sm', md: 'md' }}
            fontWeight='bold'
            minW={32}
         >
            {stateSidebar.crumb}
         </Text>
      </HStack>
   );
};

export default NavbarLeft;
