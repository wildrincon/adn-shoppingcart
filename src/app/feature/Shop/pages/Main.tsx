import * as React from 'react';
import { Layout } from '../../../shared/components/Layout';
import { RouteComponentProps } from 'react-router-dom';

const ShopMainPage: React.FC<RouteComponentProps> = () => (
  <Layout title="Home" description="Home de la aplicación">
    <div className="container mt-5">
      <h1>Shop Page</h1>
    </div>
  </Layout>
);

ShopMainPage.displayName = 'ShopMainPage';

export default ShopMainPage;