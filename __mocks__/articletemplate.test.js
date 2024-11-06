// __mocks__/articleTemplate.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleTemplate from '../src/templates/article-template'; // Corrected path

// Sample data mimicking a GraphQL query result
const mockData = {
  title: 'Chocolate Cake Recipe',
  author: 'John Doe',
  body: '<p>This is the content of the article about chocolate cake.</p>',
  mediaImage: { url: 'http://example.com/article-image.jpg' },
};

test('renders article title and details correctly', () => {
  render(<ArticleTemplate pageContext={mockData} />);

  // Use getByText for each part of the text
  expect(screen.getByText('Chocolate Cake Recipe')).toBeInTheDocument();

  // Separate checks for "Author:" and the author name
  expect(screen.getByText('Author:')).toBeInTheDocument();
  expect(screen.getByText('John Doe')).toBeInTheDocument();

  // Check the body content
  expect(screen.getByText('This is the content of the article about chocolate cake.')).toBeInTheDocument();
});
