import React, { useState } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/SEO"
import Table from "../components/Table"
import Navigation from "../components/Navigation"
import Layout from "../components/Layout"
function Records({ data }) {
  const record = data.contentfulRecord
  return (
    <Layout>
      <SEO title={record.title} />
      <div className="lg:w-[900px] sm:w-[600px] overflow-hidden mx-auto main-wrapper">
        <GatsbyImage image={getImage(record.featuredImage)} />
        <section className="p-4">
          <h1 className="text-xl text-center">{record.title}</h1>
          <p>{record.description}</p>
          <p className="text-right">{record.date}</p>
          <Table />
        </section>
        <MDXRenderer>{record.prefaceDescription.childMdx.body}</MDXRenderer>
        <MDXRenderer>{record.dayOneDescription.childMdx.body}</MDXRenderer>
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
    }
  }
`

export default Records
