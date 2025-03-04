import App from '@/App';
import DetailsNote from '@/pages/DetailsNote';
import FavoritesNote from '@/pages/FavoritesNote';
import HomePage from '@/pages/HomePage';
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
            path: 'notes/details/:title',
            element: <DetailsNote />,
         },
         {
            path: 'notes/favorites',
            element: <FavoritesNote />,
         },
         {
            path: 'settings',
            element: <SettingsPage />,
         },
      ],
   },
]);

export default router;
