import { render, screen } from '@testing-library/react';
import App from './App';
import {MemoryRouter} from "react-router-dom";
import React from "react";

test('renders title', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  const title = screen.getByText(/Alfa Romeo CODE Decoder/i);
  expect(title).toBeInTheDocument();
});
