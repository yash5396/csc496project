// __mocks__/recipeTemplate.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import RecipeTemplate from '../src/templates/recipe-template'; // Corrected path

// Sample data mimicking a GraphQL query result
const mockData = {
  title: 'Chocolate Cake',
  numberOfServings: 8,
  preparationTime: 30,
  cookingTime: 45,
  difficulty: 'Medium',
  ingredients: ['Flour', 'Sugar', 'Cocoa Powder', 'Eggs'],
  mediaImage: { url: 'http://example.com/cake.jpg' },
  recipeInstruction: '<p>Mix ingredients and bake.</p>',
};

test('renders recipe title and details correctly', () => {
  render(<RecipeTemplate pageContext={mockData} />);
  
  // Use getByText for each part of the text
  expect(screen.getByText('Chocolate Cake')).toBeInTheDocument();
  
  // Separate checks for "Servings:" and "8"
  expect(screen.getByText('Servings:')).toBeInTheDocument();
  expect(screen.getByText('8')).toBeInTheDocument();
  
  expect(screen.getByText('Preparation Time:')).toBeInTheDocument();
  expect(screen.getByText('30 minutes')).toBeInTheDocument();
  
  expect(screen.getByText('Cooking Time:')).toBeInTheDocument();
  expect(screen.getByText('45 minutes')).toBeInTheDocument();
  
  expect(screen.getByText('Difficulty:')).toBeInTheDocument();
  expect(screen.getByText('Medium')).toBeInTheDocument();
});



