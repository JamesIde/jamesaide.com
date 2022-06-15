import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import FeaturedEntryThumbnail from "./FeaturedEntryThumbnail"
function FeaturedEntries() {
  const entries = useStaticQuery(graphql`
    query {
      allContentfulEntries {
        edges {
          node {
            title
            featuredImage {
              gatsbyImageData
            }
            slug
            contentful_id
            blurb {
              blurb
            }
            date(formatString: "MMMM Do, YYYY")
            id
          }
        }
      }
    }
  `)
  const latestEntries = entries.allContentfulEntries
  return (
    <div className="w-4/5 mx-auto">
      <h1 className="text-center text-3xl mb-3 mt-3 nav-center text-bold">
        LATEST ENTRIES
      </h1>
      {latestEntries.edges.map(edge => {
        return (
          <FeaturedEntryThumbnail
            slug={edge.node.slug}
            title={edge.node.title}
            image={edge.node.featuredImage}
            blurb={edge.node.blurb.blurb}
            date={edge.node.date}
            key={edge.node.id}
          />
        )
      })}
    </div>
  )
}

export default FeaturedEntries
