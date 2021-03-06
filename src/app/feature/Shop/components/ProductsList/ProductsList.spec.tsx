import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ProductsList } from './index';

describe('<ProductsList /> Component show list products', () => {
  it('Renders <ProductsList /> component correctly', () => {
    const { getByText } = render(<ProductsList />);
    expect(getByText(/Tienda/i)).toBeInTheDocument();
  });
});
