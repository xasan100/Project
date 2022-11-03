import React from 'react';
// import { Favourite } from '../components/Favourite/index.jsx';
import useId from '../hooks/useId';
import HomePage from '../pages/Home';
import FavouritePages from '../pages/Favourite';
import Sigin from '../pages/Sigin';
import MyproportiesPages from '../pages/Myproportie';


// import Properties from '../pages/Properties';
export const Properties = React.lazy(() => import('../pages/Properties'))
export const HouseItme = React.lazy(() => import('../pages/HouseItme'))


export const navbar = [
  {
    id: useId,
    element: <HomePage />,
    title: 'Home',
    path: '/home',
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element:
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Properties />
      </React.Suspense>,
    title: 'Properties',
    path: '/properties',
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <Sigin />,
    title: 'Sign In',
    path: '/signin',
    private: false,
    hidden: true,
  },

  {
    id: useId,
    element: <FavouritePages />,
    title: 'Favourite',
    path: '/favourite',
    private: true,
    hidden: true,
  },
  {
    id: useId,
    element: <MyproportiesPages />,
    title: 'Myproporties',
    path: '/myproporties',
    private: true,
    hidden: true,
  },


  {
    id: useId,
    element:
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <HouseItme />
      </React.Suspense>,
    title: 'HouseItme',
    path: '/properties/:id',
    private: false,
    hidden: true,
  },
];