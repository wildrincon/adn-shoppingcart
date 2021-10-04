import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Helmet } from 'react-helmet';

import { DivContainer } from './styles';

interface LayoutProps {
  title: string;
  description: string;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  description,
}) => {
  return (
    <>
      <Helmet>
        {
          // eslint-disable-next-line
          title && <title>Shopping Cart ⚛️ | {title}</title>
        }
        {description && <meta name="description" content={description} />}
      </Helmet>
      <DivContainer>{children}</DivContainer>
    </>
  );
};

Layout.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  //@ts-ignore
  children: PropTypes.node.isRequired,
};
