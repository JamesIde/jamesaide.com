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
  return (
    <Layout>
      <Helmet title={record.title} />
      <div
        className="lg:w-[900px] sm:w-[600px] overflow-hidden mx-auto main-wrapper text-black mt-2"
        onClick={closeModal}
      >
        <GatsbyImage
          image={getImage(record.featuredImage)}
          alt={record.title}
        />
        <section className="p-4">
          <h1 className="text-xl text-center nav-center">{record.title}</h1>
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
                if (photo.height >= 4000) {
                  return (
                    <>
                      <GatsbyImage
                        image={getImage(photo.gatsbyImageData)}
                        className="record-img-span2 hover:border-blue-500 hover:cursor-pointer duration-500"
                        alt={records.title}
                        onClick={e => imageModal(e, photo)}
                      />
                    </>
                  )
                } else {
                  return (
                    <>
                      <GatsbyImage
                        image={getImage(photo.gatsbyImageData)}
                        className="record-img hover:border-blue-500 hover:cursor-pointer duration-500"
                        alt={records.title}
                        onClick={e => imageModal(e, photo)}
                        loading="lazy"
                        placeholder="blurred"
                      />
                    </>
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
                  if (photo.height >= 4000) {
                    return (
                      <>
                        <GatsbyImage
                          image={getImage(photo.gatsbyImageData)}
                          className="record-img-span2 hover:border-blue-500 hover:cursor-pointer duration-500"
                          alt={records.title}
                          onClick={e => imageModal(e, photo)}
                          loading="lazy"
                          placeholder="blurred"
                        />
                      </>
                    )
                  } else {
                    return (
                      <>
                        <GatsbyImage
                          image={getImage(photo.gatsbyImageData)}
                          className="record-img hover:border-blue-500 hover:cursor-pointer duration-500"
                          alt={records.title}
                          onClick={e => imageModal(e, photo)}
                          loading="lazy"
                          placeholder="blurred"
                        />
                      </>
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
                if (photo.height >= 4000) {
                  return (
                    <>
                      <GatsbyImage
                        image={getImage(photo.gatsbyImageData)}
                        className="record-img-span2 hover:border-blue-500 hover:cursor-pointer duration-500"
                        alt={records.title}
                        onClick={e => imageModal(e, photo)}
                        loading="lazy"
                        placeholder="blurred"
                      />
                    </>
                  )
                } else {
                  return (
                    <>
                      <GatsbyImage
                        image={getImage(photo.gatsbyImageData)}
                        className="record-img hover:border-blue-500 hover:cursor-pointer duration-500"
                        alt={records.title}
                        onClick={e => imageModal(e, photo)}
                        loading="lazy"
                        placeholder="blurred"
                      />
                    </>
                  )
                }
              })}
          </div>
        </div>
        <MDXRenderer>{record.dayFourDescription.childMdx.body}</MDXRenderer>
        {/* <div className="record-grid">
          {record.imageBlock4 &&
            record.imageBlock4.map(function (photo) {
              if (photo.height >= 4000) {
                return (
                  <>
                    <GatsbyImage
                      image={getImage(photo.gatsbyImageData)}
                      className="record-img-span2 hover:border-blue-500 hover:cursor-pointer duration-500"
                      alt={records.title}
                      onClick={e => imageModal(e, photo)}
                    />
                  </>
                )
              } else {
                return (
                  <>
                    <GatsbyImage
                      image={getImage(photo.gatsbyImageData)}
                      className="record-img hover:border-blue-500 hover:cursor-pointer duration-500"
                      alt={records.title}
                      onClick={e => imageModal(e, photo)}
                    />
                  </>
                )
              }
            })}
        </div> */}
        <MDXRenderer>{record.map.childMdx.body}</MDXRenderer>
        <br />
        <MDXRenderer>{record.travelDescription.childMdx.body}</MDXRenderer>
        <MDXRenderer>{record.aboutDescription.childMdx.body}</MDXRenderer>
        <ReturnToHome />
        {modal && (
          <div className="fixed flex justify-center items-center h-screen w-full top-0 left-0 bg-blurred">
            <GatsbyImage
              image={currImage.gatsbyImageData}
              className=" max-w-screen-lg h-[100vh] cursor-pointer p-16"
              alt={records.title}
              key={currImage.id}
              objectFit="contain"
            />
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
        gatsbyImageData
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
      }
      dayTwoDescription {
        childMdx {
          body
        }
      }
      imageBlock2 {
        gatsbyImageData
        height
      }
      dayThreeDescription {
        childMdx {
          body
        }
      }
      imageBlock3 {
        gatsbyImageData
        height
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
    }
  }
`

export default Records
