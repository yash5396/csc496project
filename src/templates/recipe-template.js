import React from 'react';
import './recipe-template.css'; // Import your CSS for styling

const RecipeTemplate = ({ pageContext }) => {
  const {
    title,
    numberOfServings,
    preparationTime,
    ingredients,
    cookingTime,
    difficulty,
    mediaImage,
    recipeInstruction, // New instruction field
  } = pageContext;

  // Check if mediaImage is available and has a URL
  const imageUrl = mediaImage?.url || '';
  const imageAltText = title || 'Recipe image';

  return (
    <div className="recipe-container">
      <div className="recipe-card">
        {imageUrl && <img src={imageUrl} alt={imageAltText} className="recipe-image" />}
        <h1 className="recipe-title">{title}</h1>
        <div className="recipe-info">
          <p><strong>Servings:</strong> {numberOfServings}</p>
          <p><strong>Preparation Time:</strong> {preparationTime} minutes</p>
          <p><strong>Cooking Time:</strong> {cookingTime} minutes</p>
          <p><strong>Difficulty:</strong> {difficulty}</p>
        </div>

        <h2>Ingredients:</h2>
        <ul>
          {ingredients && ingredients.length > 0 ? (
            ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))
          ) : (
            <p>No ingredients listed.</p>
          )}
        </ul>

        {/* Display recipe instructions */}
        <h2>Instructions:</h2>
        <div className="recipe-instructions" dangerouslySetInnerHTML={{ __html: recipeInstruction }} />
      </div>
    </div>
  );
};

export default RecipeTemplate;
