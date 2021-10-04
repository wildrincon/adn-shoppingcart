import * as React from 'react';

import Spinner from '../Spinner';
import { Div } from './styles';

export const LazyFallback = () => (
  <Div>
    <Spinner />
  </Div>
);
