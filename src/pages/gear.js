import React from "react"
import Helmet from "../components/navigation&seo/Helmet"
import Layout from "../components/navigation&seo/Layout"
import { Link } from "gatsby"
function gear() {
  const refresh = () => {
    window.location.reload()
  }
  return (
    <Layout>
      <Helmet title="Gear" />
      <div className="mx-auto lg:w-2/3 h-auto mt-5 mb-5">
        <div className="mx-auto ml-5 mr-5">
          <div id="0bu8zl"></div>
          <a
            onClick={refresh}
            className="hover:text-sky-700 duration-500 italic cursor-pointer"
          >
            Not loaded? Click here
          </a>
        </div>
        <div>
          <Link
            to="/"
            className="hover:text-sky-700 duration-500 font-mono text-center"
          >
            <p className="text-center font-mono">[Return to home]</p>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default gear
