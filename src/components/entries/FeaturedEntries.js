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
              gatsbyImageData(formats: WEBP, layout: CONSTRAINED, width: 1500)
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
      {latestEntries.edges.map(edge => {
        return (
          <FeaturedEntryThumbnail
            slug={edge.node.slug}
            title={edge.node.title}
            image={edge.node.featuredImage}
            blurb={edge.node.blurb}
            date={edge.node.date}
            key={edge.node.id}
          />
        )
      })}
    </div>
  )
}

export default FeaturedEntries
