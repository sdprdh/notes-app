import {use} from "react";
import {NoteFormContext} from "@/context/NoteFormContext.jsx";
import axios from "axios";
import {useAuthContext} from "@/hooks/useAuthContext.js";
import {useNoteContext} from "@/hooks/useNoteContext.js";

export const useNoteFormContext = () => {
    const context = use(NoteFormContext);
    const {user} = useAuthContext();
    const {dispatch} = useNoteContext();

    if (!context) {
        throw new Error('useNoteFormContext must be used within NoteFormProvider');
    }

    const handleRequest = async (method, url, data) => {
        context.setLoading();

        try {
            const response = await axios({
                method,
                url: `${import.meta.env.VITE_API_URL}${url}`,
                data,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user.token}`,
                },
            });

            if (response.status >= 400) {
                throw new Error(response.data?.message || "Request failed");
            }

            dispatch({
                type: method === "post" ? "ADD_NOTE" : method === "patch" ? "UPDATE_NOTE" : "DELETE_NOTE",
                payload: method !== 'delete' ? response.data.note : context.data
            });

            context.onCloseModal();
        } catch (e) {
            context.setError(e.response?.data?.message || e.message);
        }
    };

    const handleAddNote = async (e) => {
        e.preventDefault();
        await handleRequest("post", "/notes", context.data);
    };

    const handleEditNote = async (e) => {
        e.preventDefault();
        await handleRequest("patch", `/notes/${context.data._id}`, context.data);
    };

    const handleDeleteNote = async () => {
        await handleRequest("delete", `/notes/${context.data._id}`);
    }

    const handleUpdateIsPined = async (note) => {
        if (!note) {
            throw new Error('note not found');
        }

        try {
            const response = await axios.patch(`${import.meta.env.VITE_API_URL}/notes/${note._id}`,
                {...note, isPined: !note.isPined},
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${user.token}`,
                    },
                });

            if (response.status >= 400) {
                throw new Error(response.data?.message || "Request failed");
            }

            dispatch({
                type: 'UPDATE_NOTE_ISPINED',
                payload: note
            });
        } catch (e) {
            console.log(e.message);
        }
    }

    const handleAddTag = (refTag) => {
        const value = refTag?.current?.value?.trim();
        if (!value) return;

        context.setState(prev => ({
            ...prev,
            data: {...prev.data, tags: [value, ...prev.data.tags]},
        }));
        refTag.current.value = "";
    };

    const handleDeleteTag = (tag) => {
        context.setState(prev => ({
            ...prev,
            data: {...prev.data, tags: prev.data.tags.filter(t => t !== tag)},
        }));
    };

    return {
        ...context,
        handleAddNote,
        handleEditNote,
        handleDeleteNote,
        handleAddTag,
        handleDeleteTag,
        handleUpdateIsPined
    };
};
