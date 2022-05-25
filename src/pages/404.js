import React from "react"
import Layout from "../components/navigation&seo/Layout"
import Helmet from "../components/navigation&seo/Helmet"
import { Link } from "gatsby"
function NotFound() {
  return (
    <>
      <Layout>
        <Helmet title="404" />
        <div className="container w-4/5 mx-auto text-center">
          <h1 className="font-playfair text-3xl mt-5 mb-5">Page Not Found</h1>
          <p className="mt-2 mb-2 font-mono">
            You have stumbled into the domain of the non-existant.
          </p>
          <p>
            <Link
              to="/"
              className="hover:text-sky-500 hover:cursor-pointer duration-500 font-mono"
            >
              Click here to return home
            </Link>
          </p>
        </div>
      </Layout>
    </>
  )
}

export default NotFound
