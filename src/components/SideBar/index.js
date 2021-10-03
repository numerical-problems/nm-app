import React from 'react';

import { Container } from './styles';
import { RiNumbersLine } from 'react-icons/ri';

const menus = [
    {
        name: 'Logaritmos',
        icon: <RiNumbersLine size="18" />,
    }
]

function SideBar() {
  return (
      <Container>
          <div className="title">Métodos numéricos</div>

          <div className="sidebar-items">
              {
                  menus.map((item, index) => (
                      <div key={index} className="sidebar-item">
                        <div className="icon">{item.icon}</div>
                        <div className="text">
                            {item.name}
                        </div>
                      </div>
                  ))
              }
          </div>
      </Container>
  );
}

export default SideBar;