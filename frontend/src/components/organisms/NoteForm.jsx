import {DialogBody} from "@/components/atoms/dialog.jsx";
import {Box, DialogFooter, HStack, IconButton, Input, Text} from "@chakra-ui/react";
import InputGrouping from "@/components/molecules/InputGrouping.jsx";
import ButtonFullWidth from "@/components/molecules/ButtonFullWidth.jsx";
import TagElement from "@/components/molecules/TagElement.jsx";
import {GoPlus} from "react-icons/go";
import {useNoteFormContext} from "@/hooks/useNoteFormContext.js";
import {useRef} from "react";
import ErrorText from "@/components/molecules/ErrorText.jsx";

const NoteForm = () => {
    const {
        data,
        type,
        setState,
        error,
        loading,
        handleAddNote,
        handleEditNote,
        handleAddTag
    } = useNoteFormContext();

    const refTag = useRef(null);

    return (
        <form onSubmit={type === 'add' ? handleAddNote : handleEditNote}>
            <DialogBody spaceY={4}>
                <InputGrouping
                    type="text"
                    label='Title'
                    name='title'
                    placeholder='Enter Title'
                    size='xs'
                    defaultValue={data.title}
                    onChange={(e) => {
                        setState((prevState) => ({
                            ...prevState,
                            data: {
                                ...prevState.data,
                                title: e.target.value,
                            },
                        }));
                    }}
                />
                <InputGrouping
                    type="textarea"
                    label='Content'
                    name='content'
                    placeholder='Enter Content...'
                    defaultValue={data.content}
                    onChange={(e) => {
                        setState((prevState) => ({
                            ...prevState,
                            data: {
                                ...prevState.data,
                                content: e.target.value,
                            },
                        }));
                    }}
                />
                <Box>
                    <Text>Tags</Text>
                    <Box spaceX={1} my={2}>
                        {
                            data.tags.length > 0 &&
                            data.tags.map((tag) => (
                                <TagElement key={tag} tag={tag} isTrigerClose={true}/>
                            ))
                        }
                    </Box>

                    <HStack>
                        <Box>
                            <Input ref={refTag} size='xs' name='tag' placeholder='Enter tags'/>
                        </Box>
                        <IconButton onClick={() => handleAddTag(refTag)} size='xs' colorPalette='blue'>
                            <GoPlus/>
                        </IconButton>
                    </HStack>
                    <ErrorText error={error}/>
                </Box>
            </DialogBody>
            <DialogFooter mt={-6}>
                <ButtonFullWidth type='submit' disable={loading}>
                    {
                        type === 'add' ? 'Add' : 'Edit'
                    }
                </ButtonFullWidth>
            </DialogFooter>
        </form>
    );
};

export default NoteForm;