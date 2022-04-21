require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// Config wouldn't work unless seperated like this
// Thanks to Max Mitchell for this configuration and SEO layout 👍

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
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
    twitter: "@james.ide",
    facebook: "James Ide",
  },
  /* Your site config here */
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-image",
    `gatsby-plugin-sass`,
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "NEED TO ADD",
        head: true,
      },
    },
  ],
}
