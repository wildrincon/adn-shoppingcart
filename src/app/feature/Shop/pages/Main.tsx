import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Layout } from '../../../shared/components/Layout';
import ProductsList from '../components/ProductsList';

const ShopMainPage: React.FC<RouteComponentProps> = () => (
  <Layout title="Home" description="Home de la aplicación">
    <div className="container mt-5">
      <ProductsList />
    </div>
  </Layout>
);

ShopMainPage.displayName = 'ShopMainPage';

export default ShopMainPage;