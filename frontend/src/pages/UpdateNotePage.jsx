import NoteFormCard from '@/components/Card/NoteFormCard';
import { useNoteHandler } from '@/hooks/handler/useNoteHandler';
import { Box } from '@chakra-ui/react';

const UpdateNotePage = () => {
   const { updateNote } = useNoteHandler();
   
   return (
      <Box as='section'>
         <NoteFormCard
            textButton='Edit'
            onSubmit={updateNote}
         />
      </Box>
   );
};

export default UpdateNotePage;
