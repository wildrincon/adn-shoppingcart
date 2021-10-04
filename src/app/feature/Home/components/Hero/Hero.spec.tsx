import React from 'react';
import { render } from '@testing-library/react';
import { Hero } from '../Hero';

describe("<Hero />", () => {
  it("Renders <Hero /> component correctly", () => {
    const { getByText } = render(<Hero />);
    expect(getByText(/Bienvenidos a nuestra tienda online/i)).toBeInTheDocument();
  });
});