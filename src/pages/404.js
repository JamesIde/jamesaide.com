import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Link } from "gatsby"
function NotFound() {
  return (
    <>
      <Layout>
        <SEO title="404" />
        <div className="w-1/2">Page not found</div>
        <p>
          <Link to="/">Return home</Link>
        </p>
      </Layout>
    </>
  )
}

export default NotFound
