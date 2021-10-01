import * as React from 'react';
import { HeaderNav } from './styles';
import { NavBrand } from './NavBrand';
import { NavList } from './NavList';

export const NavigationHeader: React.FC = () => {
  const routes = [
    { label: 'Home', url: '/' },
    { label: 'Productos', url: '/productos' },
  ];
  return (
    <HeaderNav>
      <NavBrand text="Shopping Cart"></NavBrand>
      <NavList items={routes} />
    </HeaderNav>
  );
};
