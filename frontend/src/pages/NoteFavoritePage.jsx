import NoteCard from '@/components/Card/NoteCard';
import { useNoteContext } from '@/hooks/context/useNoteContext';
import { Box, SimpleGrid, Skeleton } from '@chakra-ui/react';

const NoteFavoritePage = () => {
   const { favorite, loading } = useNoteContext();

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
               : favorite?.map((note, i) => (
                    <NoteCard
                       key={i}
                       note={note}
                    />
                 ))}
         </SimpleGrid>
      </Box>
   );
};

export default NoteFavoritePage;
