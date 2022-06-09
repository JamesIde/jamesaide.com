import React, { useState } from "react"
import Helmet from "../components/navigation&seo/Helmet"
import Layout from "../components/navigation&seo/Layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
function Collections({ data }) {
  const collection = data.contentfulPhotoCollection

  const [showModal, setShowModal] = useState(false)
  const [currentImage, setCurrentImage] = useState()

  const handleClick = (e, photo) => {
    e.stopPropagation()
    setShowModal(showModal => !showModal)
    setCurrentImage(photo)
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
    },
  }

  return (
    <Layout>
      <Helmet title={collection.title} />
      <div className="mx-auto" onClick={handleClose}>
        <div className="m-2 xl:w-[65%] lg:w-[65%] md:w-[65%] mx-auto pl-4 pr-4">
          <div className="mb-1 mx-auto font-playfair text-[20px] text-[#343a40] font-semibold text-center ">
            {collection.title}
          </div>
          <p className="text-center text-sm text-gray-600 mb-1">
            {collection.date}
          </p>
          {renderRichText(collection.main, options)}
        </div>
        <div className="collection-grid-container">
          <div className="collection-grid pl-4 pr-4">
            {collection.photos.map(function (photo) {
              if (photo.height >= 4000) {
                return (
                  <div
                    className="collection-img-span2"
                    onClick={e => handleClick(e, photo)}
                  >
                    <GatsbyImage
                      image={getImage(photo.gatsbyImageData)}
                      className="border-2 collection-img-span2 hover:border-blue-500 hover:cursor-pointer duration-500"
                      alt={photo.id}
                    />
                  </div>
                )
              } else {
                return (
                  <div
                    className="collection-img"
                    onClick={e => handleClick(e, photo)}
                  >
                    <GatsbyImage
                      image={getImage(photo.gatsbyImageData)}
                      alt={photo.id}
                      className="border-2 collection-img hover:border-blue-500 hover:cursor-pointer duration-500"
                    />
                  </div>
                )
              }
            })}
          </div>
        </div>
        {showModal && (
          <>
            <div className="fixed flex justify-center items-center h-screen w-full top-0 left-0 bg-blurred">
              <GatsbyImage
                image={currentImage.gatsbyImageData}
                className=" max-w-screen-xl h-[90vh] cursor-pointer p-16"
                alt={collection.title}
                key={currentImage.id}
                objectFit="contain"
              />
              <p className="text-white fixed xl:mt-[875px] lg:mt-[850px] md:mt-[850px] mt-52">
                {currentImage.description}
              </p>
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}

export const collections = graphql`
  query ($slug: String!) {
    contentfulPhotoCollection(slug: { eq: $slug }) {
      title
      slug
      date(formatString: "MMMM DD, YYYY")
      main {
        raw
      }
      photos {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        height
        id
        description
      }
    }
  }
`
export default Collections
