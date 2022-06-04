// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }

const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/layouts/post.js`);
  const result = await graphql(
    `
      query queryArticles {
        allMdx {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }
    `
  );
  console.log(result.data.allMdx.nodes);
  // Create blog post pages.
  result.data.allMdx.nodes.forEach((post) => {
    createPage({
      // Path for this page — required
      path: `articles/${post.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        slug: post.frontmatter.slug,
      },
    });
  });
};
