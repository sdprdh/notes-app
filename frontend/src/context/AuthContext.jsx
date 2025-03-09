import { getAuthenticatedUser } from '@/services/authServices';
import { createContext, useEffect, useReducer } from 'react';

const AuthContext = createContext(null);

const authReducer = (state, action) => {
   switch (action.type) {
      case 'SET_DATA':
         return {
            ...state,
            data: action.payload,
         };

      case 'SET_LOADING':
         return {
            ...state,
            loading: action.payload,
         };
      case 'SET_ERROR':
         return {
            ...state,
            error: action.payload,
         };
      case 'LOGOUT':
         return {
            data: null,
            error: null,
            loading: false,
         };
      default:
         return state;
   }
};

const AuthContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(authReducer, {
      data: null,
      error: null,
      loading: false,
   });

   useEffect(() => {
      (async () => {
         const response = await getAuthenticatedUser();

         if (!response.error) {
            dispatch({ type: 'SET_DATA', payload: response.data });
         }
      })();
   }, []);

   return <AuthContext value={{ ...state, dispatch }}>{children}</AuthContext>;
};

export { AuthContext, AuthContextProvider };
