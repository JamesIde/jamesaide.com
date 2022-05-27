import React, { useState } from "react"
import Helmet from "../components/navigation&seo/Helmet"
import Layout from "../components/navigation&seo/Layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
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

  return (
    <Layout>
      <Helmet title={collection.title} />
      <div className="mx-auto" onClick={handleClose}>
        <div className="m-2 md:w-2/4 mx-auto pl-4 pr-4 ">
          <h5 className="font-playfair text-bold text-[20px] mb-4 mt-4">
            {collection.title}
          </h5>
          <MDXRenderer>{collection.description.childMdx.body}</MDXRenderer>
          <p className="mt-3 mb-4 text-gray-400">{collection.date}</p>
        </div>
        <div className="collection-grid-container">
          <div className="collection-grid pl-4 pr-4">
            {collection.photos.map(function (photo) {
              if (photo.height >= 4000) {
                return (
                  <div className="collection-img-span2" onClick={e => handleClick(e, photo)}>
                    <GatsbyImage
                      image={getImage(photo.gatsbyImageData)}
                      className="border-2 collection-img-span2 hover:border-blue-500 hover:cursor-pointer duration-500"
                      alt={photo.id}
                    />
                  </div>
                )
              } else {
                return (
                  <div className="collection-img" onClick={e => handleClick(e, photo)}>
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
          <div className="fixed flex justify-center items-center h-screen w-full top-0 left-0 bg-blurred">
            <GatsbyImage
              image={currentImage.gatsbyImageData}
              className=" max-w-screen-lg h-[100vh] cursor-pointer p-16"
              alt={collection.title}
              key={currentImage.id}
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
      date(formatString: "MMMM DD, YYYY")
      description {
        childMdx {
          body
        }
      }
      photos {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        height
        id
      }
    }
  }
`
export default Collections
