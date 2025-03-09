import { HStack, Icon, Text } from '@chakra-ui/react';
import { IoCheckmark } from 'react-icons/io5';
import { MenuItem } from '../ui/menu';

const SortbarMenuItem = ({ menu, field, ...props }) => {
   const sameField = menu.field === field;

   return (
      <MenuItem
         value={menu.value}
         cursor='pointer'
         w='full'
         {...props}
      >
         <HStack
            w='full'
            color={sameField ? 'red.500' : 'black'}
         >
            <Text>{menu.field}</Text>
            {sameField && (
               <Icon ms='auto'>
                  <IoCheckmark />
               </Icon>
            )}
         </HStack>
      </MenuItem>
   );
};

export default SortbarMenuItem;
