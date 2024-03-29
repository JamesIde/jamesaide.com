import React from "react"
import Banner from "../components/misc/Banner"
import Navigation from "../components/navigation&seo/Navigation"
import Helmet from "../components/navigation&seo/Helmet"
import FeaturedCollection from "../components/collections/FeaturedCollection"
import FeaturedRecords from "../components/records/FeaturedRecords"
import FeaturedEntries from "../components/entries/FeaturedEntries"
export default function Home() {
  return (
    <>
      <Helmet title="Home" />
      <Navigation />
      {/* <Banner /> */}
      {/* Nav goes once banner is updated after LP */}
      {/* <Navigation /> */}
      <FeaturedRecords />
      <FeaturedCollection />
      <FeaturedEntries />
    </>
  )
}
