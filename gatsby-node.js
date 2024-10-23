const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query for recipes and articles with media images and instructions
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
        nodeArticles(first: 100) {
          edges {
            node {
              id
              title
              author {
                displayName
              }
              body {
                summary
                format
                processed
                value
              }
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
            }
          }
        }
      }
    }
  `);

  // Define the templates for recipes and articles
  const recipeTemplate = path.resolve(`src/templates/recipe-template.js`);
  const articleTemplate = path.resolve(`src/templates/article-template.js`);

  // Check for any errors in the GraphQL result
  if (result.errors) {
    console.error(result.errors);
    throw new Error("Error fetching data from GraphQL.");
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
        ingredients: node.ingredients || [],
        cookingTime: node.cookingTime,
        difficulty: node.difficulty,
        mediaImage: node.mediaImage?.mediaImage || {},
        recipeInstruction: node.recipeInstruction?.processed || "",
      },
    });
  });

  // Create pages for each article node
  result.data.Drupal.nodeArticles.edges.forEach(({ node }) => {
    createPage({
      path: `/article/${node.id}`,
      component: articleTemplate,
      context: {
        id: node.id,
        title: node.title,
        author: node.author?.displayName || "Unknown",
        body: node.body?.processed || "",
        mediaImage: node.mediaImage?.mediaImage || {},
      },
    });
  });
};

