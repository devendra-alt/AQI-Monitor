import React, { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './components/Home';
import Country from './components/Country';
import City from './components/City';
import { fetchCountries } from './redux/features/countries';
import { fetchCitys } from './redux/features/citys';
import { fetchAqiData } from './redux/features/aqi';

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
    dispath(fetchCountries());
    dispath(fetchCitys());
    const obj = {
      lat: 28.61,
      lon: 77.23,
    };
    dispath(fetchAqiData(obj));
  }, [dispath]);
  return <RouterProvider router={router} />;
}

export default App;
