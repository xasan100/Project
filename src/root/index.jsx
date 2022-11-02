import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { navbar } from '../utils/navbar';
import Navbar from '../components/Navbar';

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar /> }>
          {navbar.map(({ path, element, id }) => {
            return <Route key={id} path={path} element={element} />;
          })}
        </Route>
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        <Route path='/' element={<Navigate to={'/home'} />} />
         </Routes>
    </BrowserRouter>
  );
};

export default Root;
