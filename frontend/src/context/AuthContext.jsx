import { createContext, useReducer } from 'react';

const AuthContext = createContext(null);

const authReducer = (state, action) => {
   switch (action.type) {
      default:
         return state;
   }
};

const AuthContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(authReducer, { user: null });

   return <AuthContext value={{ ...state, dispatch }}>{children}</AuthContext>;
};

export { AuthContext, AuthContextProvider };
