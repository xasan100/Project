import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import Crud from '../Crud/index';
import { Container } from './style';
const { REACT_APP_BASE_URL } = process.env;

export const Myproporties = () => {
  const { search } = useLocation();
  const navigate = useNavigate()


  return (
    <React.Fragment>
      <div className="Title"><Crud/> </div>
      <Container>
      </Container>
    </React.Fragment>
  )
};

export default Myproporties;
