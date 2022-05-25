import React from "react"
import Layout from "../components/navigation&seo/Layout"
import Banner from "../components/misc/Banner"
import Helmet from "../components/navigation&seo/Helmet"
import FeaturedCollection from "../components/collections/FeaturedCollection"
import FeaturedRecords from "../components/records/FeaturedRecords"
import FeaturedEntries from "../components/entries/FeaturedEntries"
export default function Home() {
  return (
    <Layout>
      <Helmet title="Home" />
      {/* <Banner /> */}
      {/* <FeaturedRecords /> */}
      <FeaturedEntries />
      {/* <FeaturedCollection /> */}
    </Layout>
  )
}
