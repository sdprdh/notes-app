import {createContext, useEffect, useReducer} from "react";
import {useAuthContext} from "@/hooks/useAuthContext.js";
import axios from "axios";

const NoteContext = createContext(null);

const noteReducer = (state, action) => {
    switch (action.type) {
        case "SET_NOTE":
            return {
                data: action.payload,
            };
        case "ADD_NOTE":
            return {
                data: [action.payload, ...state.data],
            };
        case "UPDATE_NOTE":
            return {
                data: state.data.map((note) => (
                    note._id === action.payload._id
                        ? action.payload
                        : note
                )),
            };
        case "DELETE_NOTE":
            return {
                data: state.data.filter((note) => note._id !== action.payload._id),
            };
        case "UPDATE_NOTE_ISPINED":
            return {
                data: state.data.map((note) => (
                    note._id === action.payload._id
                        ? {...note, isPined: !action.payload.isPined}
                        : note
                )),
            };
        default:
            return state;
    }
}

const NoteContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(noteReducer, {
        data: null,
    });

    const {user} = useAuthContext();

    useEffect(() => {
        const fetchNotes = async () => {
            if (!user) return;

            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/notes`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${user.token}`,
                    },
                });

                if (response.status === 200) {
                    dispatch({
                        type: "SET_NOTE",
                        payload: response.data.notes,
                    });
                }
            } catch (error) {
                console.error("Error fetching notes:", error);
            }
        };


        fetchNotes().then();
    }, [user, dispatch]);

    return (
        <NoteContext value={{...state, dispatch}}>
            {children}
        </NoteContext>
    )
}

export {NoteContext, NoteContextProvider}