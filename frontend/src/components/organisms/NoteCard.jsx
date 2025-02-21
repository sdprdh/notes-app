import {Box, Flex, GridItem, Heading, HStack, IconButton, Spacer, Text} from "@chakra-ui/react";
import {MdOutlineDelete, MdOutlineEdit, MdOutlinePushPin} from "react-icons/md";
import TagElement from "@/components/molecules/TagElement.jsx";
import formattedDate from "@/utils/formattedDate.js";
import {useNoteFormContext} from "@/hooks/useNoteFormContext.js";

const NoteCard = ({note}) => {
    const {onOpenModal, handleUpdateIsPined} = useNoteFormContext();

    return (
        <GridItem
            as="li"
            rounded="md"
            shadow="sm"
            p="1.4rem 1.4rem 1rem"
            display="flex"
            flexDirection="column"
            _hover={{
                transform: "scale(1.05)",
                transition: "transform .1s",
                shadow: "md",
            }}
        >
            <HStack align="start" spacing={2} justifyContent="space-between">
                <Box flex="1" minW="0">
                    <Heading as="h3" size="lg" isTruncated>
                        {note.title}
                    </Heading>
                    <Text fontSize="xs" fontWeight={300} mt={2}>
                        {
                            formattedDate(note.created_at)
                        }
                    </Text>
                </Box>
                <IconButton
                    size="xs" variant="ghost"
                    onClick={() => handleUpdateIsPined(note)}
                >
                    <MdOutlinePushPin color={note.isPined ? 'blue' : ''}/>
                </IconButton>
            </HStack>

            <Text fontSize="xs" mt={2} mb={4} fontWeight={300} noOfLines={3}>
                {note.content}
            </Text>

            <Flex align="center" justifyContent="space-between" mt='auto'>
                <Box spaceX={1}>
                    {
                        note.tags.length > 0 &&
                        note.tags.map((tag) => (
                            <TagElement key={tag} tag={tag}/>
                        ))
                    }
                </Box>

                <HStack spacing={1}>
                    <IconButton
                        size="xs"
                        variant="ghost"
                        onClick={() => onOpenModal(true, 'edit', note)}
                    >
                        <MdOutlineEdit/>
                    </IconButton>
                    <IconButton
                        size="xs"
                        variant="ghost"
                        onClick={() => onOpenModal(true, 'delete', note)}
                    >
                        <MdOutlineDelete/>
                    </IconButton>
                </HStack>
            </Flex>
        </GridItem>
    );
};

export default NoteCard;
