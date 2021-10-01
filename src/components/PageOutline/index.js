import React from 'react';
import SideBar from '../SideBar';
import Header from '../Header';

// import { Container } from './styles';

function PageOutline({ children }) {
  return (
      <>
        <SideBar />
        <Header />
        <div className="children">
            {children}
        </div>
      </>
  );
}

export default PageOutline;