import React, { useState } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Helmet from "../components/Helmet"
import Layout from "../components/Layout"
function Records({ data }) {
  const record = data.contentfulRecord
  return (
    <Layout>
      <Helmet title={record.title} />
      <div className="lg:w-[900px] sm:w-[600px] overflow-hidden mx-auto main-wrapper text-black mt-2">
        <GatsbyImage
          image={getImage(record.featuredImage)}
          alt={record.title}
        />
        <section className="p-4">
          <h1 className="text-xl text-center nav-center">{record.title}</h1>
          <p className="text-center mb-2 font-mono">[{record.location}]</p>
          <p className="">{record.description}</p>
          <p className="text-right">{record.date}</p>
        </section>
        <hr className="mb-5" />
        <MDXRenderer>{record.prefaceDescription.childMdx.body}</MDXRenderer>
        <MDXRenderer>{record.dayFourDescription.childMdx.body}</MDXRenderer>
        <MDXRenderer>{record.dayOneDescription.childMdx.body}</MDXRenderer>
        {/* <div className="record-grid">
          {record.imageBlock4 &&
            record.imageBlock4.map(function (photo) {
              if (photo.height >= 4000) {
                return (
                  <>
                    <GatsbyImage
                      image={getImage(photo.gatsbyImageData)}
                      className="record-img-span2 hover:border-blue-500 hover:cursor-pointer duration-500"
                    />
                  </>
                )
              } else {
                return (
                  <>
                    <GatsbyImage
                      image={getImage(photo.gatsbyImageData)}
                      className="record-img hover:border-blue-500 hover:cursor-pointer duration-500"
                    />
                  </>
                )
              }
            })}
        </div> */}
        <div className="record-grid">
          {record.imageBlock1.map(function (photo) {
            if (photo.height >= 4000) {
              return (
                <>
                  <GatsbyImage
                    image={getImage(photo.gatsbyImageData)}
                    className="record-img-span2 hover:border-blue-500 hover:cursor-pointer duration-500"
                  />
                </>
              )
            } else {
              return (
                <>
                  <GatsbyImage
                    image={getImage(photo.gatsbyImageData)}
                    className="record-img hover:border-blue-500 hover:cursor-pointer duration-500"
                  />
                </>
              )
            }
          })}
        </div>
        <MDXRenderer>{record.dayTwoDescription.childMdx.body}</MDXRenderer>
        <div className="record-grid">
          {record.imageBlock2.map(function (photo) {
            if (photo.height >= 4000) {
              return (
                <>
                  <GatsbyImage
                    image={getImage(photo.gatsbyImageData)}
                    className="record-img-span2 hover:border-blue-500 hover:cursor-pointer duration-500"
                  />
                </>
              )
            } else {
              return (
                <>
                  <GatsbyImage
                    image={getImage(photo.gatsbyImageData)}
                    className="record-img hover:border-blue-500 hover:cursor-pointer duration-500"
                  />
                </>
              )
            }
          })}
        </div>
        <MDXRenderer>{record.dayThreeDescription.childMdx.body}</MDXRenderer>
        <div className="record-grid">
          {record.imageBlock3.map(function (photo) {
            if (photo.height >= 4000) {
              return (
                <>
                  <GatsbyImage
                    image={getImage(photo.gatsbyImageData)}
                    className="record-img-span2 hover:border-blue-500 hover:cursor-pointer duration-500"
                  />
                </>
              )
            } else {
              return (
                <>
                  <GatsbyImage
                    image={getImage(photo.gatsbyImageData)}
                    className="record-img hover:border-blue-500 hover:cursor-pointer duration-500"
                  />
                </>
              )
            }
          })}
        </div>
        <MDXRenderer>{record.map.childMdx.body}</MDXRenderer>
        <MDXRenderer>{record.travelDescription.childMdx.body}</MDXRenderer>
        <MDXRenderer>{record.aboutDescription.childMdx.body}</MDXRenderer>
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
      imageBlock4 {
        gatsbyImageData
        height
      }
    }
  }
`

export default Records
