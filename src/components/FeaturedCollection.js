import React from "react"
import FeaturedCollectionThumbnail from "./FeaturedCollectionThumbnail"
import { graphql, useStaticQuery, Link } from "gatsby"

export default function FeaturedCollection() {
  const collections = useStaticQuery(graphql`
    query {
      allContentfulPhotoCollection {
        edges {
          node {
            slug
            title
            featuredImage {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  const featuredCollection = collections.allContentfulPhotoCollection
  return (
    <div className="mx-auto h-auto w-3/5 mt-5">
      <div>
        <h1 className="text-center text-3xl mb-3 mt-3">
          LATEST PHOTO COLLECTIONS
        </h1>
      </div>
      <div class="grid grid-cols-2 gap-3">
        {featuredCollection.edges.map(edge => {
          return (
            <Link to={`/collections/${edge.node.slug}`}>
              <FeaturedCollectionThumbnail
                slug={edge.node.slug}
                title={edge.node.title}
                image={edge.node.featuredImage}
                description={edge.node.description}
                date={edge.node.date}
              />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
