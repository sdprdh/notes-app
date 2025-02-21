import {Tag} from "@chakra-ui/react";
import {useNoteFormContext} from "@/hooks/useNoteFormContext.js";

const TagElement = ({isTrigerClose = false, tag = ''}) => {
   const {handleDeleteTag} = useNoteFormContext();

    return (
        <Tag.Root size="sm" variant="subtle">
            <Tag.Label fontSize="xs" fontWeight={300} ># {tag}</Tag.Label>
            {
                isTrigerClose &&
                <Tag.EndElement>
                    <Tag.CloseTrigger onClick={() => handleDeleteTag(tag)} />
                </Tag.EndElement>
            }
        </Tag.Root>
    );
};

export default TagElement;