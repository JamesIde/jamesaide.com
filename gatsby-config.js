require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}
module.exports = {
  siteMetadata: {
    // siteUrl: "https://jamesaide.com",
    title: "James Ide",
    description:
      "James Ide's personal website displaying hiking trips, photo collections, work history and projects.",
    headline: "James Ide's personal website",
    siteLanguage: "en",
    ogLanguage: "en_US",
    author: "James Ide",
  },
  /* Your site config here */
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-image",
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
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              // maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
