import React from 'react';

import { Container } from './styles';
import { menus } from '../../constants';

function Header({ id, icon,  }) {
  const currentMenu = menus.find(menu => menu.id === id);

  return (
      <Container>
        {currentMenu.icon && currentMenu.icon}
        <div className="title">{currentMenu.name}</div>
      </Container>
  );
}

export default Header;