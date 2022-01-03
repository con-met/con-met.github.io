module.exports = {
  siteMetadata: {
    siteUrl: "https://www.conmet.it",
    title: "Connessioni Metropolitane",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://www.conmet.it/graphql",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/favicon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: "src/assets/",
      },
      __key: "assets",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "src/pages/",
      },
      __key: "pages",
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-stripe",
      options: {
        objects: [
          "Balance",
          "BalanceTransaction",
          "Product",
          "ApplicationFee",
          "Sku",
          "Subscription",
        ],
        secretKey:
          process.env.SECRET_KEY ||
          "sk_test_uwjwkeJRD3i4DJBaSufnmyEj00qRWtVIhp",
        downloadFiles: true,
      },
    },
  ],
};
