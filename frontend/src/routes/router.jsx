import App from '@/App';
import HomePage from '@/pages/HomePage';
import NoteFavoritePage from '@/pages/NoteFavoritePage';
import NoteGroupPage from '@/pages/NoteGroupPage';
import NoteTrashPage from '@/pages/NoteTrashPage';
import SettingsPage from '@/pages/SettingsPage';
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
      ],
   },
]);

export default router;
