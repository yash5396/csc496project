import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

const ArticlesPage = ({ data }) => {
  return (
    <Layout pageTitle="Articles">
      <h1>Articles</h1>
      <ul>
        {data.Drupal.nodeArticles.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={`/article/${node.id}`}>{node.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  {
    Drupal {
      nodeArticles(first: 100) {
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

export default ArticlesPage;
