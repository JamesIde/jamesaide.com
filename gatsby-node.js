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

  //Generate Entries
  const entries = path.resolve("./src/templates/Entries.js")
  const genEntry = await graphql(`
    query MyQuery {
      allContentfulEntries {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  genEntry.data.allContentfulEntries.edges.forEach(edge => {
    createPage({
      component: entries,
      path: `/entries/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
