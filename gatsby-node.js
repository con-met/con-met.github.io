const path = require(`path`);

const createPagesFromWP = async ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allWpPost(sort: { fields: [date] }) {
        nodes {
          title
          excerpt
          content
          slug
        }
      }
    }
  `).then((result) => {
    //highlight-start
    result.data.allWpPost.nodes.forEach((node) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          // slug: node.slug,
        },
      });
    });
    //highlight-end
  });
};

const createPagesFromMarkDown = async ({ graphql, actions }) => {
  // const { data } = await graphql(`
  //   query AllArticles {
  //     allMarkdownRemark {
  //       nodes {
  //         frontmatter {
  //           slug
  //         }
  //       }
  //     }
  //   }
  // `);
  // data.allMarkdownRemark.nodes.forEach((item) => {
  //   actions.createPage({
  //     path: item.frontmatter.slug,
  //     component: path.resolve(`src/templates/article.js`),
  //     context: { slug: item.frontmatter.slug },
  //   });
  // });
};

exports.createPages = async ({ graphql, actions }) => {
  await createPagesFromMarkDown({ graphql, actions });
  await createPagesFromWP({ graphql, actions });
};
