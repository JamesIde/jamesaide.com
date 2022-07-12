import React from "react"
import Helmet from "../components/navigation&seo/Helmet"
import Layout from "../components/navigation&seo/Layout"
import Navigation from "../components/navigation&seo/Navigation"
import { Link } from "gatsby"
import { FaGithub } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
function About() {
  const github = useStaticQuery(graphql`
    query {
      githubData {
        data {
          user {
            pinnedItems {
              nodes {
                name
                description
                createdAt(formatString: "D/MM/YY")
                url
                repositoryTopics {
                  edges {
                    node {
                      topic {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const info = github.githubData.data.user.pinnedItems.nodes
  return (
    <>
      <Navigation />
      <div>
        <Helmet title="About" />
      </div>
      <div className="xl:w-5/12 lg:w-5/12 md:w-5/12 h-40 mx-auto xl:mt-32 p-2 ">
        <h1 className="font-bold text-xl mb-3">About</h1>
        <p className="text-gray-600">
          Hello! I'm James Ide, a web developer from Adelaide, South Australia.
        </p>
        <p className="text-gray-600">
          This website is where I share hiking trips, projects, photos and
          anything else I am interested in.
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
        </p>
      </div>
    </>
  )
}

export default About

{
}
