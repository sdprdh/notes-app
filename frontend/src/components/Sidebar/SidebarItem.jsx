import { HStack, Icon, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const SidebarItem = ({ data, styles, handleNavigateLink }) => {
   return (
      <NavLink
         to={data.path}
         style={({ isActive }) => ({
            display: 'block',
            borderRadius: '5px',
            transition: styles.transition,
            backgroundColor: isActive ? styles.bg : 'transparent',
         })}
         onClick={(e) => handleNavigateLink(e, data)}
      >
         <HStack p={3}>
            <Icon me={2}>{data.icon}</Icon>
            <Text fontSize={{ base: 'sm', md: 'md' }}>{data.text}</Text>
            <Text
               ms='auto'
               fontSize='xs'
               color='gray.500'
            >
               1
            </Text>
         </HStack>
      </NavLink>
   );
};

export default SidebarItem;
