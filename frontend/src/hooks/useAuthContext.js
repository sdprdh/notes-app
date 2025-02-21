import {use, useState} from "react";
import {AuthContext} from "@/context/AuthContext.jsx";
import {deleteData, saveData} from "@/utils/storage.js";
import axios from "axios";

export const useAuthContext = () => {
    const context = use(AuthContext);

    if (!context) {
        throw new Error('useAuthContext must be used within AuthContextProvider');
    }

    const [state, setState] = useState({
        error: null,
        loading: false,
    });

    const handleAuthRequest = async (type, credentials) => {
        setState({error: null, loading: true});

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/user/${type}`, credentials);

            if (response.status >= 400) {
                throw new Error(response.data.message);
            }

            saveData('user', response.data.user);

            context.dispatch({
                type: "LOGIN",
                payload: response.data.user,
            });

            setState({error: null, loading: false});

            return response;
        } catch (e) {
            setState({error: e.response?.data?.message || e.message, loading: false});
            return e.status;
        }
    };

    const login = async ({email, password}) => {
        return handleAuthRequest("login", {email, password});
    };

    const register = async ({username, email, password}) => {
        return handleAuthRequest("register", {username, email, password});
    };

    const logut = () => {
        deleteData("user");

        context.dispatch({type: "LOGOUT"});
    }

    return {...context, ...state, login, register, logut};
}
