import NoteFormCard from '@/components/Card/NoteFormCard';
import { useNoteHandler } from '@/hooks/handler/useNoteHandler';
import { Box } from '@chakra-ui/react';

const AddNotePage = () => {
   const { createNote } = useNoteHandler();

   return (
      <Box as='section'>
         <NoteFormCard
            textButton='Tambah'
            onSubmit={createNote}
         />
      </Box>
   );
};

export default AddNotePage;
