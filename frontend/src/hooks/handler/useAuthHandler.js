import { postLogin, postLogout, postRegister } from '@/services/authServices';
import { getNotes } from '@/services/noteService';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/useAuthContext';
import { useNoteContext } from '../context/useNoteContext';

export const useAuthHandler = () => {
   const { dispatch: dispatchAuth } = useAuthContext();
   const { dispatch: dispatchNotes } = useNoteContext();

   const navigate = useNavigate();

   const requestAuth = async (data, request) => {
      dispatchAuth({ type: 'SET_LOADING', payload: true });

      const user = data;

      const responseAuth = await request(user);

      if (responseAuth.error) {
         dispatchAuth({ type: 'SET_ERROR', payload: responseAuth.message });
         dispatchAuth({ type: 'SET_LOADING', payload: false });

         return;
      }

      dispatchAuth({ type: 'SET_DATA', payload: responseAuth.data.user });

      const responseNotes = await getNotes();

      dispatchNotes({ type: 'SET_DATA', payload: responseNotes.data || null });

      dispatchAuth({ type: 'SET_LOADING', payload: false });

      navigate('/');
   };

   const handleRegister = async (e) => {
      e.preventDefault();

      const user = {
         username: e.target.username.value,
         email: e.target.email.value,
         password: e.target.password.value,
      };

      await requestAuth(user, postRegister);
   };

   const handleLogin = async (e) => {
      e.preventDefault();

      const user = {
         username: e.target.username.value,
         password: e.target.password.value,
      };

      await requestAuth(user, postLogin);
   };

   const handleLogout = async () => {
      await postLogout();
      dispatchAuth({ type: 'LOGOUT' });
      dispatchNotes({ type: 'SET_DATA', payload: null });
   };

   return { handleLogin, handleRegister, handleLogout };
};
