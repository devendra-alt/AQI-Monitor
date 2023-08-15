import React, { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './components/Home';
import Country from './components/Country';
import City from './components/City';
import { fetchCitys } from './redux/features/citys';

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
  const dispath = useDispatch();
  useEffect(() => {
    dispath(fetchCitys());
  }, [dispath]);
  return <RouterProvider router={router} />;
}

export default App;
