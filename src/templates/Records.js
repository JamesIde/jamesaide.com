import React from "react"
import Helmet from "../components/navigation&seo/Helmet"
import Layout from "../components/navigation&seo/Layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { useState } from "react"
import ReturnToHome from "../components/misc/ReturnToHome"
function Records({ data }) {
  const record = data.contentfulRecord
  const [modal, setModal] = useState(false)
  const [currImage, setImage] = useState()
  const imageModal = (e, photo) => {
    e.stopPropagation()
    setModal(showModal => !showModal)
    setImage(photo)
  }
  const closeModal = () => {
    setModal(false)
  }

  const title = record.title.split("|")[0]

  return (
    <Layout>
      <Helmet title={record.title} />
      <div
        className="lg:w-[900px] sm:w-[600px] overflow-hidden mx-auto main-wrapper text-black mt-2 mb-3"
        onClick={closeModal}
      >
        <GatsbyImage image={getImage(record.featuredImage)} alt={title} />
        <section className="p-4">
          <h1 className="text-xl text-center nav-center">{title}</h1>
          <p className="text-center mb-2 mt-2 font-mono">[{record.location}]</p>
          <p>{record.description}</p>
          <p className="text-right">{record.date}</p>
          <hr className="mb-2 mt-2" />
        </section>
        <MDXRenderer>{record.prefaceDescription.childMdx.body}</MDXRenderer>
        <MDXRenderer>{record.dayOneDescription.childMdx.body}</MDXRenderer>
        <div className="record-grid-container">
          <div className="record-grid">
            {record.imageBlock1 &&
              record.imageBlock1.map(function (photo) {
                if (photo.height >= 4000 && photo.width === 3024) {
                  return (
                    <div
                      className="collection-img-span2 border-red-500"
                      onClick={e => imageModal(e, photo)}
                    >
                      <GatsbyImage
                        image={getImage(photo.gatsbyImageData)}
                        className=" collection-img-span2 hover:cursor-pointer duration-500"
                        alt={photo.id}
                      />
                    </div>
                  )
                } else if (photo.height >= 4000 && photo.width === 4000) {
                  return (
                    <div
                      className="collection-img-col2"
                      onClick={e => imageModal(e, photo)}
                    >
                      <GatsbyImage
                        image={getImage(photo.gatsbyImageData)}
                        alt={photo.id}
                        className="collection-img hover:cursor-pointer duration-500"
                      />
                    </div>
                  )
                } else {
                  return (
                    <div
                      className="collection-img"
                      onClick={e => imageModal(e, photo)}
                    >
                      <GatsbyImage
                        image={getImage(photo.gatsbyImageData)}
                        alt={photo.id}
                        className="collection-img hover:cursor-pointer duration-500"
                      />
                    </div>
                  )
                }
              })}
          </div>
        </div>

        <MDXRenderer>{record.dayTwoDescription.childMdx.body}</MDXRenderer>
        <div className="record-grid-container">
          <div className="record-grid-container">
            <div className="record-grid">
              {record.imageBlock2 &&
                record.imageBlock2.map(function (photo) {
                  if (photo.height >= 4000 && photo.width === 3024) {
                    return (
                      <div
                        className="collection-img-span2 border-red-500"
                        onClick={e => imageModal(e, photo)}
                      >
                        <GatsbyImage
                          image={getImage(photo.gatsbyImageData)}
                          className=" collection-img-span2 hover:cursor-pointer duration-500"
                          alt={photo.id}
                        />
                      </div>
                    )
                  } else if (photo.height >= 4000 && photo.width === 4000) {
                    return (
                      <div
                        className="collection-img-col2"
                        onClick={e => imageModal(e, photo)}
                      >
                        <GatsbyImage
                          image={getImage(photo.gatsbyImageData)}
                          alt={photo.id}
                          className="collection-img hover:cursor-pointer duration-500"
                        />
                      </div>
                    )
                  } else {
                    return (
                      <div
                        className="collection-img"
                        onClick={e => imageModal(e, photo)}
                      >
                        <GatsbyImage
                          image={getImage(photo.gatsbyImageData)}
                          alt={photo.id}
                          className="collection-img hover:cursor-pointer duration-500"
                        />
                      </div>
                    )
                  }
                })}
            </div>
          </div>
        </div>
        <MDXRenderer>{record.dayThreeDescription.childMdx.body}</MDXRenderer>
        <div className="record-grid-container">
          <div className="record-grid">
            {record.imageBlock3 &&
              record.imageBlock3.map(function (photo) {
                if (photo.height >= 4000 && photo.width === 3024) {
                  return (
                    <div
                      className="collection-img-span2 border-red-500"
                      onClick={e => imageModal(e, photo)}
                    >
                      <GatsbyImage
                        image={getImage(photo.gatsbyImageData)}
                        className=" collection-img-span2 hover:cursor-pointer duration-500"
                        alt={photo.id}
                      />
                    </div>
                  )
                } else if (photo.height >= 4000 && photo.width === 4000) {
                  return (
                    <div
                      className="collection-img-col2"
                      onClick={e => imageModal(e, photo)}
                    >
                      <GatsbyImage
                        image={getImage(photo.gatsbyImageData)}
                        alt={photo.id}
                        className="collection-img hover:cursor-pointer duration-500"
                      />
                    </div>
                  )
                } else {
                  return (
                    <div
                      className="collection-img"
                      onClick={e => imageModal(e, photo)}
                    >
                      <GatsbyImage
                        image={getImage(photo.gatsbyImageData)}
                        alt={photo.id}
                        className="collection-img hover:cursor-pointer duration-500"
                      />
                    </div>
                  )
                }
              })}
          </div>
        </div>
        <MDXRenderer>{record.dayFourDescription.childMdx.body}</MDXRenderer>
        <div className="record-grid-container">
          <div className="record-grid">
            {record.imageBlock4 &&
              record.imageBlock4.map(function (photo) {
                if (photo.height >= 4000 && photo.width === 3024) {
                  return (
                    <div
                      className="collection-img-span2 border-red-500"
                      onClick={e => imageModal(e, photo)}
                    >
                      <GatsbyImage
                        image={getImage(photo.gatsbyImageData)}
                        className=" collection-img-span2 hover:cursor-pointer duration-500"
                        alt={photo.id}
                      />
                    </div>
                  )
                } else if (photo.height >= 4000 && photo.width === 4000) {
                  return (
                    <div
                      className="collection-img-col2"
                      onClick={e => imageModal(e, photo)}
                    >
                      <GatsbyImage
                        image={getImage(photo.gatsbyImageData)}
                        alt={photo.id}
                        className="collection-img hover:cursor-pointer duration-500"
                      />
                    </div>
                  )
                } else {
                  return (
                    <div
                      className="collection-img"
                      onClick={e => imageModal(e, photo)}
                    >
                      <GatsbyImage
                        image={getImage(photo.gatsbyImageData)}
                        alt={photo.id}
                        className="collection-img hover:cursor-pointer duration-500"
                      />
                    </div>
                  )
                }
              })}
          </div>
        </div>
        <MDXRenderer>{record.dayFiveDescription.childMdx.body}</MDXRenderer>
        <div className="record-grid-container">
          <div className="record-grid">
            {record.imageBlock5 &&
              record.imageBlock5.map(function (photo) {
                if (photo.height >= 4000 && photo.width === 3024) {
                  return (
                    <div
                      className="collection-img-span2 border-red-500"
                      onClick={e => imageModal(e, photo)}
                    >
                      <GatsbyImage
                        image={getImage(photo.gatsbyImageData)}
                        className=" collection-img-span2 hover:cursor-pointer duration-500"
                        alt={photo.id}
                      />
                    </div>
                  )
                } else if (photo.height >= 4000 && photo.width === 4000) {
                  return (
                    <div
                      className="collection-img-col2"
                      onClick={e => imageModal(e, photo)}
                    >
                      <GatsbyImage
                        image={getImage(photo.gatsbyImageData)}
                        alt={photo.id}
                        className="collection-img hover:cursor-pointer duration-500"
                      />
                    </div>
                  )
                } else {
                  return (
                    <div
                      className="collection-img"
                      onClick={e => imageModal(e, photo)}
                    >
                      <GatsbyImage
                        image={getImage(photo.gatsbyImageData)}
                        alt={photo.id}
                        className="collection-img hover:cursor-pointer duration-500"
                      />
                    </div>
                  )
                }
              })}
          </div>
        </div>
        <MDXRenderer>{record.map.childMdx.body}</MDXRenderer>
        <br />
        <MDXRenderer>{record.travelDescription.childMdx.body}</MDXRenderer>
        <MDXRenderer>{record.aboutDescription.childMdx.body}</MDXRenderer>
        <ReturnToHome />
        {modal && (
          <div className="fixed flex justify-center items-center h-screen w-in top-0 left-0 bg-blurred flex-row">
            <GatsbyImage
              image={currImage.gatsbyImageData}
              className="cursor-pointer p-16 h-[96vh]  object-contain"
              alt={records.title}
              key={currImage.id}
              objectFit="contain"
            />
            <p className="text-white fixed 2xl:mt-[1250px] xl:mt-[800px] lg:mt-[850px] md:mt-[850px] mt-[800px]">
              {currImage.description}
            </p>
          </div>
        )}
      </div>
    </Layout>
  )
}
export const records = graphql`
  query ($slug: String!) {
    contentfulRecord(slug: { eq: $slug }) {
      title
      slug
      date
      description
      location
      featuredImage {
        gatsbyImageData(formats: WEBP, quality: 100, placeholder: BLURRED)
      }
      prefaceDescription {
        childMdx {
          body
        }
      }
      dayOneDescription {
        childMdx {
          body
        }
      }
      imageBlock1 {
        gatsbyImageData
        height
        width
        description
      }
      dayTwoDescription {
        childMdx {
          body
        }
      }
      imageBlock2 {
        gatsbyImageData
        height
        width
        description
      }
      dayThreeDescription {
        childMdx {
          body
        }
      }
      imageBlock3 {
        gatsbyImageData
        width
        height
        description
      }
      map {
        childMdx {
          body
        }
      }
      gearDescription
      travelDescription {
        childMdx {
          body
        }
      }
      aboutDescription {
        childMdx {
          body
        }
      }
      dayFourDescription {
        childMdx {
          body
        }
      }
      imageBlock4 {
        gatsbyImageData
        height
        width
        description
      }
      dayFiveDescription {
        childMdx {
          body
        }
      }
      imageBlock5 {
        gatsbyImageData
        height
        width
        description
      }
    }
  }
`

export default Records
