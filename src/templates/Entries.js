import { graphql } from "gatsby"
import { useState } from "react"
import Layout from "../components/navigation&seo/Layout"
import Helmet from "../components/navigation&seo/Helmet"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import React from "react"

function Entries({ data }) {
  const entries = data.contentfulEntries

  const [showModal, setShowModal] = useState(false)
  const [currentImage, setCurrentImage] = useState()

  const handleClick = (e, gatsbyImageData) => {
    e.stopPropagation()
    setShowModal(showModal => !showModal)
    setCurrentImage(gatsbyImageData)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="mb-4 mx-auto lg:w-3/5 px-2">{children}</p>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noreferrer"
          className="italic text-orange-800 hover:text-cyan-500 duration-500"
        >
          {children}
        </a>
      ),
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { gatsbyImageData, description, height, width } = node.data.target

        if (height > 3500) {
          // Portrait
          return (
            <span onClick={e => handleClick(e, gatsbyImageData)}>
              <GatsbyImage
                className="m-[5px] w-[30%] py-auto cursor-pointer"
                id="gatsby-image"
                image={getImage(gatsbyImageData)}
                alt={description}
                loading="lazy"
              />
            </span>
          )
        } else {
          // Landscape
          return (
            <span onClick={e => handleClick(e, gatsbyImageData)}>
              <GatsbyImage
                className="w-[48%] xl:mx-1 mx-[2px] cursor-pointer"
                id="gatsby-image"
                image={getImage(gatsbyImageData)}
                alt={description}
                loading="lazy"
              />
            </span>
          )
        }

        // height == 4672 || height > 3500
      },
    },
  }

  return (
    <Layout>
      <Helmet title={entries.title} />
      <div className="xl:w-[65%] lg:w-[65%] md:w-[65%] overflow-hidden mx-auto text-black mt-2 px-2">
        <div className="py-2 mx-auto ">
          <div className="mb-1 mx-auto font-playfair text-[20px] text-[#343a40] font-semibold text-center ">
            {entries.title}
          </div>
          <p className="text-center text-sm text-gray-600">{entries.date}</p>
        </div>
        {renderRichText(entries.main, options)}
      </div>
      {showModal && (
        <div
          className="fixed flex justify-center items-center h-screen w-full top-0 left-0 bg-blurred"
          onClick={handleClose}
        >
          <GatsbyImage
            image={getImage(currentImage)}
            className=" max-w-screen-lg h-[100vh] cursor-pointer p-16"
            alt={entries.title}
            key={currentImage.id}
            objectFit="contain"
          />
        </div>
      )}
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
      date(formatString: "MMMM Do, YYYY")
      id
      slug
      main {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            gatsbyImageData(width: 2000)
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
