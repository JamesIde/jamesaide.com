const path = require("path")
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //Generate collections
  const collections = path.resolve("./src/templates/Collections.js")

  const genCollection = await graphql(`
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

  genCollection.data.allContentfulPhotoCollection.edges.forEach(edge => {
    createPage({
      component: collections,
      path: `/collections/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  //Generate Records
  const records = path.resolve("./src/templates/Records.js")
  const genRecord = await graphql(`
    query MyQuery {
      allContentfulRecord {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)

  genRecord.data.allContentfulRecord.edges.forEach(edge => {
    createPage({
      component: records,
      path: `/records/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
