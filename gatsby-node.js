const path = require("path")
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const collections = path.resolve("./src/templates/Collections.js")

  const res = await graphql(`
    query {
      allContentfulPhotoCollection {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulPhotoCollection.edges.forEach(edge => {
    createPage({
      component: collections,
      path: `/collections/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
