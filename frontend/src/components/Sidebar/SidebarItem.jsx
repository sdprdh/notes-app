import { useSidebarContext } from '@/hooks/useSidebarContext';
import { HStack, Icon, Text } from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';

const SidebarItem = ({ link, styles }) => {
   const { setCrumbSidebar } = useSidebarContext();

   const navigate = useNavigate();

   const handleCLickNavlink = (e) => {
      e.preventDefault();

      setCrumbSidebar(link.text);

      navigate(link.path);
   };

   return (
      <NavLink
         to={link.path}
         style={({ isActive }) => ({
            display: 'block',
            borderRadius: '5px',
            transition: styles.transition,
            backgroundColor: isActive ? styles.bg : 'transparent',
         })}
         onClick={handleCLickNavlink}
      >
         <HStack p={3}>
            <Icon me={2}>{link.icon}</Icon>
            <Text fontSize={{ base: 'sm', md: 'md' }}>{link.text}</Text>
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
