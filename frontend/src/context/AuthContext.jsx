import {createContext, useEffect, useReducer} from "react";
import {getData} from "@/utils/storage.js";

const AuthContext = createContext(null);

const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                user: action.payload,
            }
        case 'LOGOUT':
            return {
                user: null,
            }
        default:
            return state;
    }
}

const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
    });

    useEffect(() => {
        const user = getData('user') || null;

        dispatch({
            type: "LOGIN",
            payload: user,
        })
    }, []);

    return (
        <AuthContext value={{...state, dispatch}}>
            {children}
        </AuthContext>
    )
}

export {
    AuthContextProvider,
    AuthContext,
};