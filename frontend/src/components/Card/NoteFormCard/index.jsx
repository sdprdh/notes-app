import ButtonIconWithHover from '@/components/ui/ButtonIconWithHover';
import { Box, Card, Center } from '@chakra-ui/react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import NoteFormContent from './NoteFormContent';

const NoteFormCard = ({ onSubmit, textButton }) => {
   const navigate = useNavigate();

   return (
      <Center
         minH='svh'
         w={{ base: 'full', md: '70vw', lg: '40vw' }}
         m='auto'
         p={4}
      >
         <Box
            w='full'
            spaceY={2}
         >
            <ButtonIconWithHover
               icon={<FaArrowLeftLong />}
               onClick={() => navigate(-1)}
            />
            <Card.Root
               w='full'
               as='form'
               onSubmit={onSubmit}
            >
               <NoteFormContent textButton={textButton} />
            </Card.Root>
         </Box>
      </Center>
   );
};

export default NoteFormCard;
