import { useSidebarContext } from '@/hooks/useSidebarContext';
import { Box, Flex } from '@chakra-ui/react';
import { BsBookmarkHeart } from 'react-icons/bs';
import { GoTrash } from 'react-icons/go';
import { IoSettingsOutline } from 'react-icons/io5';
import { LuNotebook } from 'react-icons/lu';
import { RiGroupLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { styles } from '../../../public/statis';
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
   const navigate = useNavigate();

   const { setCrumbSidebar } = useSidebarContext();

   const handleCLickButtonIcon = () => {
      navigate('/pengaturan');

      setCrumbSidebar('pengaturan');
   };

   return (
      <Box
         w='100%'
         h='100%'
         bg='white'
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

         <Box>
            {sidebarLinks.map((link, i) => (
               <SidebarItem
                  key={i}
                  link={link}
                  styles={styles}
               />
            ))}
         </Box>
      </Box>
   );
};

export default SidebarContent;
