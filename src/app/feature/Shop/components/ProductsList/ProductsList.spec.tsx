import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ProductsList } from './';

test('renders component usuarios', () => {
  const component = render(<ProductsList />);
});