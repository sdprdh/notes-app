import { Box, Flex, HStack } from '@chakra-ui/react';
import SortArrow from './SortArrow';
import SortMenu from './SortMenu';

const SortBar = () => {
   return (
      <Flex
         as='section'
         justifyContent='end'
         me={3}
      >
         <HStack>
            <SortMenu />
            <Box
               color='gray.500'
               fontSize='xs'
            >
               |
            </Box>
            <SortArrow />
         </HStack>
      </Flex>
   );
};

export default SortBar;
