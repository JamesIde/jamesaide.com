import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import Card from "../components/Card"
import SEO from "../components/SEO"
import FeaturedCollection from "../components/FeaturedCollection"

import { graphql, useStaticQuery } from "gatsby"

export default function Home() {
  const records = useStaticQuery(graphql`
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
  const latestRecord = records.allContentfulRecord

  return (
    <Layout>
      <SEO title="Home" />
      <Banner />
      <div>
        <h1 className="text-center text-3xl mb-3 mt-3">LATEST RECORDS</h1>
      </div>
      {latestRecord.edges.map(edge => {
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
      <FeaturedCollection />
    </Layout>
  )
}
