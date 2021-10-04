import { LazyFallback } from 'app/shared/components/LazyFallback';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

const MainPage = React.lazy(() => import('./pages/Main'));

export const ProductoRouter = () => (
  <React.Suspense fallback={<LazyFallback />}>
    {/* Layout compartido entre las rutas va aquí */}
    <Switch>
      <Route path="/" component={MainPage}></Route>
    </Switch>
  </React.Suspense>
);
