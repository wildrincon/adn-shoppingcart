import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomeRouter } from 'app/feature/Home/HomeRouter';
import { NavigationHeader } from 'app/shared/components/NavigationHeader';
import { ProductoRouter } from 'app/feature/Producto/ProductoRouter';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavigationHeader />
      <Switch>
        <Route path="/" component={HomeRouter} />
        <Route path="/productos" component={ProductoRouter} />
      </Switch>
    </BrowserRouter>
  );
};
