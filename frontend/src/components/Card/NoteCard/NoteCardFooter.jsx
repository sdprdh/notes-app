import ButtonIcon from '@/components/ui/ButtonIcon';
import { Card, Flex, Icon } from '@chakra-ui/react';
import { BsBookmarkHeart } from 'react-icons/bs';

const NoteCardFooter = ({ note, updateFavorite }) => {
   return (
      <Card.Footer>
         <Flex
            justifyContent='end'
            w='full'
         >
            <ButtonIcon
               icon={
                  <>
                     <Icon
                        size='sm'
                        color={note.favorite ? 'red.500' : 'gray.500'}
                     >
                        <BsBookmarkHeart />
                     </Icon>
                  </>
               }
               onClick={(e) => updateFavorite(e, note)}
            />
         </Flex>
      </Card.Footer>
   );
};

export default NoteCardFooter;
