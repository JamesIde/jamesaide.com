import React from "react"
import FeaturedCollectionThumbnail from "./FeaturedCollectionThumbnail"
import { graphql, useStaticQuery, Link } from "gatsby"

export default function FeaturedCollection() {
  const collections = useStaticQuery(graphql`
    query {
      allContentfulPhotoCollection(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            slug
            title
            featuredImage {
              gatsbyImageData
            }
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  const featuredCollection = collections.allContentfulPhotoCollection
  return (
    <>
      <h1 className="text-center text-3xl mb-1 mt-3 nav-center text-bold">
        LATEST PHOTO COLLECTIONS
      </h1>
      {featuredCollection.edges.map(edge => {
        return (
          <FeaturedCollectionThumbnail
            slug={edge.node.slug}
            title={edge.node.title}
            image={edge.node.featuredImage}
            date={edge.node.date}
          />
        )
      })}
    </>
  )
}
