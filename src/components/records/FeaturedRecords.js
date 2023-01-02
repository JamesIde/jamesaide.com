import React from "react"
import Record from "../records/FeaturedRecordThumbnail"
import { graphql, useStaticQuery } from "gatsby"

function FeaturedRecords() {
  const records = useStaticQuery(graphql`
    query {
      allContentfulRecord(sort: { fields: posted, order: DESC }) {
        edges {
          node {
            title
            posted
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
      <div className="mx-auto xl:w-[35%] lg:w-[70%] md:w-[70%] h-auto mt-5 mb-5">
        <div className="grid grid-cols-1 gap-3 ">
          {latestRecord.edges.slice(1).map(edge => {
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
