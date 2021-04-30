import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react link', () => {
  render(<App />);
  const linkElement = screen.getByText("Learn React with AWS CDK");
  expect(linkElement).toBeInTheDocument();
});
