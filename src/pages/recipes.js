import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

const RecipesPage = ({ data }) => {
  return (
    <Layout pageTitle="Recipes">
      <h1>Recipes</h1>
      <ul>
        {data.Drupal.nodeRecipes.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={`/recipe/${node.id}`}>{node.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  {
    Drupal {
      nodeRecipes(first: 100) {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  }
`;

export default RecipesPage;
