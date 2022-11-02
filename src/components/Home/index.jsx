import React from 'react';
import { GenCarusel } from '../Carusel';
import { Category } from '../Category/index.jsx';
import { CenterPhoto } from '../CenterPhoto/CenterPhoto.jsx';
import Recent from '../Recent/index.jsx';
import Recommended from '../Recommended/index.jsx';
import Why from '../Why/index.jsx';
import { Container } from './style';

export const Home = () => {
  return <Container>
    <GenCarusel />
    <Recommended />
    <Why />
    <Category />
    <CenterPhoto />
    <Recent />
  </Container>;
};

export default Home;
