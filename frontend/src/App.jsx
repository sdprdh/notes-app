import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const App = () => {
   return (
      <>
         <Box
            as='main'
            minH='svh'
            w='full'
            overflow='hidden'
         >
            <Outlet />
         </Box>
      </>
   );
};

export default App;
