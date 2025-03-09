import App from '@/App';
import AddNotePage from '@/pages/AddNotePage';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import NoteFavoritePage from '@/pages/NoteFavoritePage';
import NoteGroupPage from '@/pages/NoteGroupPage';
import NoteTrashPage from '@/pages/NoteTrashPage';
import RegisterPage from '@/pages/RegisterPage';
import SettingsPage from '@/pages/SettingsPage';
import UpdateNotePage from '@/pages/UpdateNotePage';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [
         {
            index: true,
            element: <HomePage />,
         },
         {
            path: 'catatan-bersama',
            element: <NoteGroupPage />,
         },
         {
            path: 'catatan-favorite',
            element: <NoteFavoritePage />,
         },
         {
            path: 'sampah',
            element: <NoteTrashPage />,
         },
         {
            path: 'pengaturan',
            element: <SettingsPage />,
         },
         {
            path: 'auth/daftar',
            element: <RegisterPage />,
         },
         {
            path: 'auth/masuk',
            element: <LoginPage />,
         },
         {
            path: 'tambah-catatan',
            element: <AddNotePage />,
         },
         {
            path: 'edit-catatan',
            element: <UpdateNotePage />,
         },
      ],
   },
]);

export default router;
