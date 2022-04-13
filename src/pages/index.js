import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import Card from "../components/Card"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { graphql, useStaticQuery } from "gatsby"

export default function Home() {
  const hike = useStaticQuery(graphql`
    query MyQuery {
      allContentfulRecord {
        edges {
          node {
            title
            slug
            featuredImage {
              gatsbyImageData(formats: WEBP, width: 900)
            }
            description
            date
          }
        }
      }
    }
  `)
  const trips = hike.allContentfulRecord

  return (
    <Layout>
      <Banner />
      <div
        className="
    container mx-auto"
      >
        <div className="text-center p-2 pt-10 pb-10 ">LATEST ADVENTURE</div>
      </div>
      {trips.edges.map(function (edge) {
        return (
          <Card
            slug={edge.node.slug}
            title={edge.node.title}
            image={edge.node.featuredImage}
            description={edge.node.description}
            date={edge.node.date}
          />
        )
      })}
    </Layout>
  )
}
