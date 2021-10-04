import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, within } from '@testing-library/react';
import { ProductsList } from './';

describe("<ProductsList /> Component show list products", () => {
  it("Renders <ProductsList /> component correctly", () => {
    const { getByText } = render(<ProductsList />);
    expect(getByText(/Tienda/i)).toBeInTheDocument();
  })
});