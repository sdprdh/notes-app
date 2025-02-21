import {createContext, useState} from "react";

const NoteFormContext = createContext(null);

const initialState = {
    open: false,
    type: 'add',
    data: {
        _id: null,
        title: '',
        content: '',
        tags: [],
    },
    loading: false,
    error: null,

};

const NoteFormProvider = ({children}) => {
    const [state, setState] = useState(initialState);

    const onOpenModal = (open, type, data = initialState.data) => {
        setState((prevState) => ({
            ...prevState,
            open,
            type,
            data
        }));
    };

    const onCloseModal = () => {
        setState(initialState);
    };

    const setError = (error) => {
        setState((prevState) => ({
            ...prevState,
            error,
            loading: false,
        }))
    }

    const setLoading = () => {
        setState((prevState) => ({
            ...prevState,
            loading: true,
            error: null,
        }))
    };

    return (
        <NoteFormContext value={{...state, setState, onOpenModal, onCloseModal, setError, setLoading}}>
            {children}
        </NoteFormContext>
    );
};

export {NoteFormContext, NoteFormProvider};