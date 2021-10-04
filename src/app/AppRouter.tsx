// Routers
import { HomeRouter } from 'app/feature/Home/HomeRouter';
import { ProductoRouter } from 'app/feature/Producto/ProductoRouter';
import { ShopRouter } from 'app/feature/Shop/ShopRouter';
import { Footer } from 'app/shared/components/Footer';
import { NavigationHeader } from 'app/shared/components/NavigationHeader';
import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Context
import ProductState from './context/product/ProductState';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <ProductState>
        <NavigationHeader />
        <Switch>
          <Route exact path="/" component={HomeRouter} />
          <Route exact path="/tienda" component={ShopRouter} />
          <Route exact path="/productos" component={ProductoRouter} />
        </Switch>
        <Footer />
      </ProductState>
    </BrowserRouter>
  );
};
