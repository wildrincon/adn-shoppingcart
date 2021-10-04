import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavigationHeader } from 'app/shared/components/NavigationHeader';
import { Footer } from 'app/shared/components/Footer';

// Context
import ProductState from './context/product/ProductState';

// Routers
import { HomeRouter } from 'app/feature/Home/HomeRouter';
import { ShopRouter } from 'app/feature/Shop/ShopRouter';
import { ProductoRouter } from 'app/feature/Producto/ProductoRouter';

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
