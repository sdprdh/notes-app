import { useAuthContext } from '@/hooks/context/useAuthContext';
import { useUIContext } from '@/hooks/context/useUIContext';
import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import { BsBookmarkHeart } from 'react-icons/bs';
import { GoTrash } from 'react-icons/go';
import { IoSettingsOutline } from 'react-icons/io5';
import { LuNotebook } from 'react-icons/lu';
import { RiGroupLine } from 'react-icons/ri';
import { NavLink, useNavigate } from 'react-router-dom';
import { styles } from '../../../public/statis';
import { Avatar } from '../ui/avatar';
import ButtonIconWithHover from '../ui/ButtonIconWithHover';
import SidebarItem from './SidebarItem';

const sidebarLinks = [
   {
      icon: <LuNotebook />,
      text: 'Semua catatan',
      path: '/',
   },
   {
      icon: <RiGroupLine />,
      text: 'Catatan bersama',
      path: 'catatan-bersama',
   },

   {
      icon: <BsBookmarkHeart />,
      text: 'Catatan favorite',
      path: 'catatan-favorite',
   },
   {
      icon: <GoTrash />,
      text: 'Sampah',
      path: 'sampah',
   },
];

const SidebarContent = () => {
   const { dispatchSidebar } = useUIContext();

   const { data } = useAuthContext();

   const navigate = useNavigate();

   const handleCLickButtonIcon = () => {
      navigate('/pengaturan');

      dispatchSidebar({ type: 'SET_CRUMB', payload: '/pengaturan' });
   };

   const handleNavigateLink = (e, item) => {
      e.preventDefault();

      navigate(item.path);
   };

   return (
      <Box
         w='100%'
         h='100%'
         bg='white'
         display='flex'
         flexDirection='column'
         roundedTopRight='xl'
         roundedBottomRight='xl'
         p={4}
         spaceY={4}
      >
         <Flex justifyContent='end'>
            <ButtonIconWithHover
               icon={<IoSettingsOutline />}
               color='gray.500'
               onClick={handleCLickButtonIcon}
            />
         </Flex>

         <Box flexGrow={1}>
            {sidebarLinks.map((data, i) => (
               <SidebarItem
                  key={i}
                  data={data}
                  styles={styles}
                  handleNavigateLink={handleNavigateLink}
               />
            ))}
         </Box>

         <Box
            mt='auto'
            spaceY={4}
            pb={2}
         >
            {data ? (
               <HStack
                  onClick={handleCLickButtonIcon}
                  cursor='pointer'
               >
                  <Avatar
                     size={{ base: 'sm', md: 'md' }}
                     name={data.username}
                     src={data.img}
                  />
                  <Text fontSize={{ base: 'sm', md: 'md' }}>
                     {data.username}
                  </Text>
               </HStack>
            ) : (
               <HStack>
                  <NavLink
                     to='auth/masuk'
                     style={{ color: 'green' }}
                  >
                     Masuk
                  </NavLink>
                  <Box
                     color='gray.500'
                     fontSize='xs'
                  >
                     |
                  </Box>
                  <NavLink to='auth/daftar'>Daftar</NavLink>
               </HStack>
            )}
         </Box>
      </Box>
   );
};

export default SidebarContent;
