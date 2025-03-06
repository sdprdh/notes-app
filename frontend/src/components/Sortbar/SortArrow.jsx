import { useSortContext } from '@/hooks/useSortContext';
import { Icon } from '@chakra-ui/react';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import ButtonIcon from '../ui/ButtonIcon';

const SortArrow = () => {
   const { up, toggleArrow } = useSortContext();

   return (
      <ButtonIcon
         icon={
            <>
               <Icon
                  size='sm'
                  color='gray.500'
               >
                  {!up ? <GoArrowDown /> : <GoArrowUp />}
               </Icon>
            </>
         }
         ms={2}
         fontSize={{ base: 'xs', md: 'md' }}
         onClick={toggleArrow}
      />
   );
};

export default SortArrow;
