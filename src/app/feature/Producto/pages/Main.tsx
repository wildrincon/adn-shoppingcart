import { Layout } from 'app/shared/components/Layout';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ProveedorGestionProductos } from '../hoc/ProveedorGestionProductos';

const MainPage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Productos" description="Gestión de productos">
      <ProveedorGestionProductos />
    </Layout>
  );
};

MainPage.displayName = 'HomeMainPage';

export default MainPage;
