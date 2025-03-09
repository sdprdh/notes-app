import { useUIContext } from '@/hooks/context/useUIContext';
import { useNoteHandler } from '@/hooks/handler/useNoteHandler';
import { Card } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import NoteCardFooter from './NoteCardFooter';
import NoteCardHeader from './NoteCardHeader';

const NoteCard = ({ note }) => {
   const { updateFavorite } = useNoteHandler();

   const { dispatchFormNote } = useUIContext();

   const navigate = useNavigate();

   const handleClickCard = () => {
      dispatchFormNote({ type: 'SET_TITLE', payload: note.title });
      dispatchFormNote({ type: 'SET_CONTENT', payload: note.content });
      dispatchFormNote({ type: 'SET_ID', payload: note._id });
      dispatchFormNote({ type: 'SET_FAVORITE', payload: note.favorite });

      navigate('/edit-catatan');
   };

   return (
      <Card.Root
         w='full'
         rounded='lg'
         variant='elevated'
         transition='transform 0.3s ease-in-out'
         _hover={{ cursor: 'pointer', transform: 'scale(1.02)' }}
         onClick={handleClickCard}
      >
         <NoteCardHeader note={note} />
         <Card.Body
            color='fg.muted'
            fontSize='sm'
         >
            {note.content}
         </Card.Body>
         <NoteCardFooter
            note={note}
            updateFavorite={updateFavorite}
         />
      </Card.Root>
   );
};

export default NoteCard;
