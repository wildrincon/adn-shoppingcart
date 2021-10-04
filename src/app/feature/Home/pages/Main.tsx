import { Layout } from 'app/shared/components/Layout';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Hero } from '../components/Hero';

const HomeMainPage: React.FC<RouteComponentProps> = () => (
  <Layout title="Home" description="Home de la aplicación">
    <Hero />
  </Layout>
);

HomeMainPage.displayName = 'HomeMainPage';

export default HomeMainPage;
