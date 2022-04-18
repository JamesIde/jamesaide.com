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
    <div className="lg:w-4/5 sm:w-[600px] overflow-hidden mx-auto">
      <div>
        <h1 className="text-center text-3xl mt-3">LATEST PHOTO COLLECTIONS</h1>
      </div>
      <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-3">
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
