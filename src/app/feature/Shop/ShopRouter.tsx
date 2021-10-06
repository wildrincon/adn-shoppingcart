import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { LazyFallback } from '../../shared/components/LazyFallback';

const ShopMainPage = React.lazy(() => import('./pages/Main'));

export const ShopRouter = () => (
  <React.Suspense fallback={<LazyFallback />}>
    {/* Layout compartido entre las rutas va aquí */}
    <Switch>
      <Route path="/" component={ShopMainPage}></Route>
    </Switch>
  </React.Suspense>
);
