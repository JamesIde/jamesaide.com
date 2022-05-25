import React from "react"
import Helmet from "../components/navigation&seo/Helmet"
import Layout from "../components/navigation&seo/Layout"
import ReturnToHome from "../components/misc/ReturnToHome"
import { Link } from "gatsby"
function gear() {
  return (
    <Layout>
      <Helmet title="Gear" />
      <div className="mx-auto lg:w-2/3 h-auto mt-5 mb-5">
        <div className="mx-auto ml-5 mr-5">
          <div id="wwar9x"></div>
          <a
            href="https://lighterpack.com/r/wwar9x"
            className="hover:text-sky-700 duration-500 italic"
          >
            Not loaded? Click here
          </a>
        </div>
        {/* <ReturnToHome /> */}
        <Link to="/" className="hover:text-sky-700 duration-500">
          <p className="text-center font-mono">[Return to home]</p>
        </Link>
      </div>
    </Layout>
  )
}

export default gear
