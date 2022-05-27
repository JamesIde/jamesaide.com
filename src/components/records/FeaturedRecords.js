import React from "react"
import Record from "../records/FeaturedRecordThumbnail"
import { graphql, useStaticQuery } from "gatsby"

function FeaturedRecords() {
  const records = useStaticQuery(graphql`
    query {
      allContentfulRecord(sort: { fields: id, order: ASC }) {
        edges {
          node {
            title
            location
            slug
            id
            featuredImage {
              gatsbyImageData(formats: WEBP)
            }
            description
            date
          }
        }
      }
    }
  `)
  const latestRecord = records.allContentfulRecord

  return (
    <div>
      <h1 className="text-center text-3xl mb-1 mt-4 nav-center text-bold">
        LATEST RECORDS
      </h1>
      {/* <p className="font-mono text-center w-1/2 mx-auto">
        [Longer, more sequenced and detailed records of my trips in various places]
      </p> */}
      <div className="mx-auto lg:w-2/3 h-auto mt-5 mb-5">
        <div className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-3 ">
          {latestRecord.edges.map(edge => {
            return (
              <Record
                slug={edge.node.slug}
                title={edge.node.title}
                location={edge.node.location}
                image={edge.node.featuredImage}
                description={edge.node.description}
                date={edge.node.date}
                key={edge.node.id}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FeaturedRecords
