import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import VueloRendondoForm from '../components/VueloRendondoForm';
import VueloSencilloForm from '../components/VueloSencilloForm';

import Vuelos from '../pages/Vuelos';
import NotFound from '../pages/NotFound';

const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/buscar-viaje-redondo',
        element: <VueloRendondoForm />,
      },
      {
        path: '/buscar-viaje-sencillo',
        element: <VueloSencilloForm />,
      },
    ],
  },
  {
    path: '/vuelos',
    element: <Vuelos />,
    errorElement: <NotFound />,
  },
];

const router = createBrowserRouter(routes);

export default router;
