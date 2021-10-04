import * as React from 'react';
import { Div } from './styles';
import Spinner from '../Spinner';

export const LazyFallback = () => (
  <Div>
    <Spinner />
  </Div>
);
