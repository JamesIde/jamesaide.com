import { graphql } from "gatsby"
import Layout from "../components/navigation&seo/Layout"
import Helmet from "../components/navigation&seo/Helmet"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import React from "react"

function Entries({ data }) {
  console.log(data)
  const entries = data.contentfulEntries

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="mb-4 mx-auto lg:w-3/5">{children}</p>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noreferrer"
          className="italic"
        >
          {children}
        </a>
      ),
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { gatsbyImageData, description, width } = node.data.target

        return (
          <GatsbyImage
            className="m-1 w-96"
            image={getImage(gatsbyImageData)}
            alt={description}
            loading="lazy"
          />
        )
      },
    },
  }

  return (
    <Layout>
      <Helmet title={entries.title} />
      <div className="w-[65%] overflow-hidden mx-auto text-black mt-2">
        {/* Check image size.
        If a certain height,
        Have it span the entire screen like the banner image
        Else have it set up like a record image size coming from my phone! */}

        <h5>{entries.title}</h5>
        {renderRichText(entries.main, options)}
      </div>
    </Layout>
  )
}

export const entries = graphql`
  query MyQuery($slug: String!) {
    contentfulEntries(slug: { eq: $slug }) {
      title
      featuredImage {
        gatsbyImageData
      }
      date
      id
      slug
      main {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            gatsbyImageData(width: 1200)
            __typename
            height
            width
          }
        }
      }
    }
  }
`

export default Entries
