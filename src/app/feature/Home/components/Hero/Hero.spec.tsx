import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Hero } from '.';

describe("<Hero /> Component HomePage", () => {
  it("Renders <Hero /> component correctly", () => {
    const { getByText } = render(<Hero />);
    expect(getByText(/Bienvenidos a nuestra tienda online/i)).toBeInTheDocument();
  });
});