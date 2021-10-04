import { Link } from 'app/shared/components/Link';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import { BrandDiv, LogoSpan } from './styles';

interface NavBrandProps {
  text: string;
}

export const NavBrand: React.FC<NavBrandProps> = ({ text }) => (
  <BrandDiv>
    <Link to="/" replace={true}>
      <LogoSpan>{text}</LogoSpan>
    </Link>
  </BrandDiv>
);

NavBrand.propTypes = {
  text: PropTypes.string.isRequired,
};
