import React from 'react';
import {DialogBody, DialogFooter} from "@/components/atoms/dialog.jsx";
import {Button, Heading, Stack, Strong, Text} from "@chakra-ui/react";
import {useNoteFormContext} from "@/hooks/useNoteFormContext.js";

const NoteDeleted = () => {
    const {data, onCloseModal, handleDeleteNote} = useNoteFormContext();

    return (
        <>
            <DialogBody>
                <Stack align='center'>
                    <Text>Apakah ingin menghapus :</Text>
                    <Heading fontSize='md'>
                        <Strong>{data.title}</Strong>
                    </Heading>

                </Stack>
            </DialogBody>
            <DialogFooter>
                <Button colorPalette='blue' size='xs' onClick={onCloseModal}>Cancel</Button>
                <Button colorPalette='red' size='xs' onClick={handleDeleteNote}>Delete</Button>
            </DialogFooter>
        </>
    );
};

export default NoteDeleted;