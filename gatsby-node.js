const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query for the recipes with media images and instructions
  const result = await graphql(`
    {
      Drupal {
        nodeRecipes(first: 100) {
          edges {
            node {
              id
              title
              numberOfServings
              preparationTime
              ingredients
              cookingTime
              difficulty
              mediaImage {
                mediaImage {
                  height
                  styles {
                    height
                    style
                    url
                    width
                  }
                  url
                  width
                }
              }
              recipeInstruction {
                format
                processed
                value
              }
            }
          }
        }
      }
    }
  `);

  // Define the template for recipe pages
  const recipeTemplate = path.resolve(`src/templates/recipe-template.js`);

  // Check for any errors in the GraphQL result
  if (result.errors) {
    console.error(result.errors);
    throw new Error("Error fetching recipes from GraphQL.");
  }

  // Create pages for each recipe node
  result.data.Drupal.nodeRecipes.edges.forEach(({ node }) => {
    createPage({
      path: `/recipe/${node.id}`,
      component: recipeTemplate,
      context: {
        id: node.id,
        title: node.title,
        numberOfServings: node.numberOfServings,
        preparationTime: node.preparationTime,
        ingredients: node.ingredients || [], // Default to empty array if undefined
        cookingTime: node.cookingTime,
        difficulty: node.difficulty,
        mediaImage: node.mediaImage?.mediaImage || {}, // Get media image data
        recipeInstruction: node.recipeInstruction?.processed || "", // Add instructions
      },
    });
  });
};
