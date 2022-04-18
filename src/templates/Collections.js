import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SEO from "../components/SEO"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Navigation from "../components/Navigation"
import Layout from "../components/Layout"
function Collections({ data }) {
  const collection = data.contentfulPhotoCollection

  return (
    <Layout>
      <SEO title={collection.title} />
      <div className="mx-auto w-4/5">
        <div className="text-center m-2 w-1/2 mx-auto">
          {/* <h1 className="text-xl text-white decorated">
            <span>{collection.title}</span>
          </h1> */}
          <h1 className="text-xl text-white ">{collection.title}</h1>
          <MDXRenderer>{collection.description.childMdx.body}</MDXRenderer>
        </div>
        <div className="container collection-grid">
          {collection.photos.map(function (photo) {
            if (photo.height >= 4000) {
              return (
                <>
                  <GatsbyImage
                    image={getImage(photo.gatsbyImageData)}
                    className="collection-img-span2 border-2 hover:border-blue-500 hover:cursor-pointer duration-500"
                  />
                </>
              )
            } else {
              return (
                <>
                  <GatsbyImage
                    image={getImage(photo.gatsbyImageData)}
                    className="collection-img border-2 hover:border-blue-500 hover:cursor-pointer duration-500"
                  />
                </>
              )
            }
          })}
        </div>
      </div>
    </Layout>
  )
}
// 16/04
// Whenever I add className in contentful, mdx breaks and doesnt show up in graphql. Will investigate, for no the queries are disabned
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
