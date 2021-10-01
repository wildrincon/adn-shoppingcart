import * as React from 'react';
import { Hero } from '../components/Hero';
import { Layout } from 'app/shared/components/Layout';
import { RouteComponentProps } from 'react-router-dom';

const HomeMainPage: React.FC<RouteComponentProps> = () => (
  <Layout title="Home" description="Home de la aplicación">
    <Hero />
  </Layout>
);

HomeMainPage.displayName = 'HomeMainPage';

export default HomeMainPage;
