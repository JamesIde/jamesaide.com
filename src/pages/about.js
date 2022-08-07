import React from "react"
import Helmet from "../components/navigation&seo/Helmet"
import Layout from "../components/navigation&seo/Layout"
import Navigation from "../components/navigation&seo/Navigation"
import { graphql, useStaticQuery } from "gatsby"
function About() {
  return (
    <>
      <Navigation />
      <div>
        <Helmet title="About" />
      </div>
      <div className="xl:w-5/12 lg:w-5/12 md:w-5/12 h-40 mx-auto xl:mt-32 p-2 ">
        <h1 className="font-bold text-xl mb-3">About</h1>
        <p className="text-gray-600">
          Developer, hiker and photographer. Sharing trips, projects, photos and
          anything I'm interested in.
        </p>
        <h1 className="font-bold text-xl mb-3 mt-4">Contact</h1>
        <p className="text-gray-600">
          Want to reach out? Contact me by{" "}
          <a
            href="mailto:james.ide775@gmail.com"
            target="_#"
            className="text-black underline"
          >
            Email
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/james-ide-a92368180/"
            target="_#"
            className="text-black underline"
          >
            LinkedIn
          </a>
          , or{" "}
          <a
            href="https://github.com/JamesIde"
            target="_#"
            className="text-black underline"
          >
            Github
          </a>
          {""}.
          {/* {" "}
          or{" "}
          <a
            href="https://www.jameside.info/"
            target="_#"
            className="text-black underline"
          >
            See More
          </a> */}
        </p>
      </div>
    </>
  )
}

export default About

{
}
