import NoteCard from '@/components/Card/NoteCard';
import NoteFormButton from '@/components/Card/NoteFormCard/NoteFormButton';
import { Skeleton } from '@/components/ui/skeleton';
import { useNoteContext } from '@/hooks/context/useNoteContext';
import { Box, SimpleGrid } from '@chakra-ui/react';

const HomePage = () => {
   const { data, loading } = useNoteContext();

   return (
      <Box
         as='section'
         mt={3}
      >
         <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            gap={4}
         >
            {loading
               ? [1, 2, 3, 4, 5, 6].map((n) => (
                    <Skeleton
                       key={n}
                       h='6rem'
                    />
                 ))
               : data?.map((note, i) => (
                    <NoteCard
                       key={i}
                       note={note}
                    />
                 ))}
         </SimpleGrid>
         <NoteFormButton/>
      </Box>
   );
};

export default HomePage;
