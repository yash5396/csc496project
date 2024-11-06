// __tests__/PageTitle.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import PageTitle from '../src/components/pageTitle.js'; // Adjust the path if necessary

test('renders page title correctly', () => {
  const title = 'Test Page Title';

  // Render the PageTitle component
  render(<PageTitle title={title} />);

  // Check if the title text is rendered correctly
  expect(screen.getByText(title)).toBeInTheDocument();
});
