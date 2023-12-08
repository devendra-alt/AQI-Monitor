import React, { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCitys } from './redux/features/citys';
import Home from './components/Home';
import CityDetails from './components/CityDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/city',
    element: <CityDetails />,
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCitys());
  }, [dispatch]);
  return <RouterProvider router={router} />;
}

export default App;
