module.exports = {
  siteMetadata: {
    title: "My Super Cool Blog",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Name for the schema
        typeName: "DrupalGraphQL",
        // Field to reference in queries
        fieldName: "Drupal",
        // URL of the GraphQL API (class recipe site)
        url: `https://csc496f24demo.tldr.dev/graphql`,
      },
    },
  ],
};
