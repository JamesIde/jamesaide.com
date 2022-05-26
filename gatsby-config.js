require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// Config wouldn't work unless seperated like this
// Thanks to Max Mitchell for this configuration and SEO layout 👍

const contentfulConfig = {
  spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
  accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
}

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.jamesaide.com",
    title: "James Ide",
    titleTemplate: "James Ide | %s",
    description:
      "James Ide's personal website showcasing hiking trips, photo collections and work experience. ",
    headline: "James Ide's personal website",
    siteLanguage: "en",
    ogLanguage: "en_US",
    author: "James Ide",
    twitter: "1macros",
    facebook: "James Ide",
  },
  /* Your site config here */
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-image",
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.jamesaide.com",
        sitemap: "https://jamesaide.com/sitemap/sitemap-0.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-sass`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GATSBY_GITHUB_API_TOKEN,

        graphQLQuery: `
        query($username: String!){
          user(login: $username) {
                pinnedItems(first: 6, types: REPOSITORY) {
              nodes {
                ... on Repository {
                  name
                  description
                  url
                  repositoryTopics(first:4) {
                    edges {
                      node {
                        topic {
                          name
                        }
                      }
                    }
                  }
                  createdAt
                    }
                  }
                }
              }
        }
        `,
        variables: {
          username: "JamesIde",
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-GHS0468GG6", // Google Analytics / GA
        ],
      },
    },
  ],
}
