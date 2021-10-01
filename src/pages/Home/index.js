import React from 'react';

import { Container } from './styles';
import SideBar from '../../components/SideBar';

function Home() {
  return (
    <>
      <SideBar />
      <Container>
        <h1>IFC Videira - Métodos numéricos 2021.2</h1>
      </Container>
     </>
  );
}

export default Home;