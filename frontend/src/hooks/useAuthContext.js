import { AuthContext } from '@/context/AuthContext';
import { saveData } from '@/utils/storage';
import { use } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuthContext = () => {
   const navigate = useNavigate();
   const context = use(AuthContext);

   if (!context) {
      throw new Error('context not found');
   }

   const requestAuth = async (data, request) => {
      context.dispatch({ type: 'SET_LOADING', payload: true });

      const user = data;

      const response = await request(user);

      if (response.error) {
         context.dispatch({ type: 'SET_ERROR', payload: response.message });
         context.dispatch({ type: 'SET_LOADING', payload: false });

         return;
      }

      context.dispatch({ type: 'SET_DATA', payload: response.data });

      saveData('user', response.data);

      navigate('/');

      context.dispatch({ type: 'SET_LOADING', payload: false });
   };

   return { ...context, requestAuth };
};
