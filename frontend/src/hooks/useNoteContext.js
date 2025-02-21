import {NoteContext} from "@/context/NoteContext.jsx";
import {use} from 'react';

export const useNoteContext = () => {
    const context = use(NoteContext);

    if (!context) {
        throw new Error("useNoteContext must be used within context");
    }

    return context;
};
