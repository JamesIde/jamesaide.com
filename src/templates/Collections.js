import React, { useState } from "react"
import Helmet from "../components/Helmet"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
function Collections({ data }) {
  const collection = data.contentfulPhotoCollection
  const [modal, setModal] = useState(false)
  const [currImage, setImage] = useState()

  const imageModal = (e, photo) => {
    e.stopPropagation()
    setModal(true)
    setImage(photo)
  }
  const closeModal = () => {
    setModal(false)
  }

  return (
    <Layout>
      <Helmet title={collection.title} />
      <div className="mx-auto" onClick={closeModal}>
        <div className="text-center m-2 md:w-1/2 mx-auto pl-4 pr-4">
          <h1 className="font-playfair text-bold text-2xl">
            {collection.title}
          </h1>
          <MDXRenderer>{collection.description.childMdx.body}</MDXRenderer>
        </div>
        <div className="collection-grid-container">
          <div className="collection-grid pl-4 pr-4">
            {collection.photos.map(function (photo) {
              if (photo.height >= 4000) {
                return (
                  <>
                    <GatsbyImage
                      image={getImage(photo.gatsbyImageData)}
                      className="collection-img-span2 border-2 hover:border-blue-500 hover:cursor-pointer duration-500"
                      onClick={e => imageModal(e, photo)}
                    />
                  </>
                )
              } else {
                return (
                  <>
                    <GatsbyImage
                      image={getImage(photo.gatsbyImageData)}
                      className="collection-img border-2 hover:border-blue-500 hover:cursor-pointer duration-500"
                      onClick={e => imageModal(e, photo)}
                    />
                  </>
                )
              }
            })}
          </div>
        </div>
        {modal && (
          <div className="fixed flex justify-center items-center h-screen w-full top-0 left-0 bg-blurred">
            <GatsbyImage
              image={currImage.gatsbyImageData}
              className=" max-w-screen-lg h-[100vh] cursor-pointer p-16"
              alt={collection.title}
              key={currImage.id}
              objectFit="contain"
            />
          </div>
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
      date
      description {
        childMdx {
          body
        }
      }
      photos {
        gatsbyImageData
        height
      }
    }
  }
`
export default Collections
