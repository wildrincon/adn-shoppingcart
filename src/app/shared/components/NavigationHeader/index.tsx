import * as React from 'react';

import { NavBrand } from './NavBrand';
import { NavList } from './NavList';
import { HeaderNav } from './styles';

export const NavigationHeader: React.FC = () => {
  const routes = [
    { label: 'Home', url: '/' },
    { label: 'Tienda', url: '/tienda' },
    { label: 'Productos', url: '/productos' },
  ];
  return (
    <HeaderNav
      className="navbar navbar-expand-lg navbar-light bg-light justify-content-between"
    >
      <div className="container">
        <NavBrand text="Shopping Cart"></NavBrand>
        <NavList items={routes} />
      </div>
    </HeaderNav>
  );
};
