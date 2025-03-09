import formattedDate from '@/utils/formattedDate';
import { Box, Card, Heading, Text } from '@chakra-ui/react';

const NoteCardHeader = ({ note }) => {
   return (
      <Card.Header>
         <Box spaceY={2}>
            <Heading size='md'>{note.title}</Heading>
            <Text
               fontSize='xs'
               color='gray.500'
            >
               {formattedDate(note.created_at)}
            </Text>
         </Box>
      </Card.Header>
   );
};

export default NoteCardHeader;
