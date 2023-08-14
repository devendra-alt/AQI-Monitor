import React from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Country from './components/Country';
import City from './components/City';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Country',
    element: <Country />,
  },
  {
    path: '/City',
    element: <City />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
