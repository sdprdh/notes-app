import { useSortContext } from '@/hooks/useSortContext';
import { HStack, Icon, Text } from '@chakra-ui/react';
import { BsSortDown } from 'react-icons/bs';
import { IoCheckmark } from 'react-icons/io5';
import ButtonWithHover from '../ui/ButtonWithHover';
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from '../ui/menu';

const menuItems = [
   {
      text: 'Judul',
      value: 'judul',
   },
   {
      text: 'Tanggal dibuat',
      value: 'tanggal-dibuat',
   },
   {
      text: 'Tanggal diubah',
      value: 'tanggal-diubah',
   },
];

const SortMenu = () => {
   const { text, setTextMenu } = useSortContext();

   return (
      <MenuRoot>
         <MenuTrigger asChild>
            <ButtonWithHover
               minW={{ base: '6rem', md: '9rem' }}
               justifyContent='end'
               icon={<BsSortDown />}
               text={text}
            />
         </MenuTrigger>
         <MenuContent>
            {menuItems.map((menu, i) => (
               <SortMenuItem
                  key={i}
                  menu={menu}
                  text={text}
                  onClick={() => setTextMenu(menu.text)}
               />
            ))}
         </MenuContent>
      </MenuRoot>
   );
};

const SortMenuItem = ({ menu, text, ...props }) => {
   const sameEqual = menu.text === text;

   return (
      <MenuItem
         value={menu.value}
         cursor='pointer'
         w='full'
         {...props}
      >
         <HStack
            w='full'
            color={sameEqual ? 'red.500' : 'black'}
         >
            <Text>{menu.text}</Text>
            {sameEqual && (
               <Icon ms='auto'>
                  <IoCheckmark />
               </Icon>
            )}
         </HStack>
      </MenuItem>
   );
};

export default SortMenu;
