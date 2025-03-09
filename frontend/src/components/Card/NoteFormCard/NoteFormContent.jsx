import { Field } from '@/components/ui/field';
import { useUIContext } from '@/hooks/context/useUIContext';
import { Button, Card, Input, Stack, Text, Textarea } from '@chakra-ui/react';

const NoteFormContent = ({ textButton }) => {
   const { stateFormNote, dispatchFormNote } = useUIContext();

   return (
      <>
         <Card.Body>
            <Stack
               gap={4}
               w='full'
            >
               <Field label='Title'>
                  <Input
                     name='title'
                     autoComplete='on'
                     size={{ base: 'sm', md: 'md' }}
                     value={stateFormNote.title}
                     onInput={(e) =>
                        dispatchFormNote({
                           type: 'SET_TITLE',
                           payload: e.target.value,
                        })
                     }
                  />
               </Field>
               <Field label='Content'>
                  <Textarea
                     name='content'
                     autoComplete='off'
                     minH={32}
                     value={stateFormNote.content}
                     onInput={(e) =>
                        dispatchFormNote({
                           type: 'SET_CONTENT',
                           payload: e.target.value,
                        })
                     }
                  />
               </Field>
            </Stack>
            {stateFormNote.error && (
               <Text
                  fontSize='sm'
                  color='red.500'
                  mt={2}
                  mb={-4}
               >
                  {stateFormNote.error}
               </Text>
            )}
         </Card.Body>
         <Card.Footer>
            <Button
               type='submit'
               w='full'
               size={{ base: 'sm', md: 'md' }}
            >
               {textButton}
            </Button>
         </Card.Footer>
      </>
   );
};

export default NoteFormContent;
