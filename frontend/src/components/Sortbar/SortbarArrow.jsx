import { useUIContext } from '@/hooks/context/useUIContext';
import { Icon } from '@chakra-ui/react';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import ButtonIcon from '../ui/ButtonIcon';

const SortbarArrow = () => {
   const { stateSortNote, dispatchSortNote } = useUIContext();

   const handleSetOrder = () => {
      if (stateSortNote.order === 'up') {
         dispatchSortNote({ type: 'SET_ORDER', payload: 'down' });
      } else {
         dispatchSortNote({ type: 'SET_ORDER', payload: 'up' });
      }
   };

   return (
      <ButtonIcon
         icon={
            <>
               <Icon
                  size='sm'
                  color='gray.500'
               >
                  {stateSortNote.order === 'up' ? (
                     <GoArrowUp />
                  ) : (
                     <GoArrowDown />
                  )}
               </Icon>
            </>
         }
         ms={2}
         fontSize={{ base: 'xs', md: 'md' }}
         onClick={handleSetOrder}
      />
   );
};

export default SortbarArrow;
