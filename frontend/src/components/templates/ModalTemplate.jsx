import {DialogContent, DialogHeader, DialogRoot, DialogTrigger} from "@/components/atoms/dialog.jsx";
import {DialogCloseTrigger, IconButton} from "@chakra-ui/react";
import {CiCirclePlus} from "react-icons/ci";
import {useNoteFormContext} from "@/hooks/useNoteFormContext.js";

const ModalTemplate = ({children}) => {
    const {open, onOpenModal} = useNoteFormContext()

    return (
        <DialogRoot size='xs' placement='center' lazyMount open={open} onOpenChange={(e) => onOpenModal(e.open, 'add')}>
            <DialogTrigger asChild>
                <IconButton
                    rounded='md'
                    colorPalette="blue"
                    position="fixed"
                    right={8}
                    bottom={8}
                >
                    <CiCirclePlus/>
                </IconButton>
            </DialogTrigger>
            <DialogContent m={0} p={0}>
                <DialogHeader></DialogHeader>
                {children}
                <DialogCloseTrigger/>
            </DialogContent>
        </DialogRoot>
    );
};

export default ModalTemplate;