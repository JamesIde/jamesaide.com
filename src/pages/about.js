import React from "react"
import Helmet from "../components/navigation&seo/Helmet"
import Layout from "../components/navigation&seo/Layout"
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
    <Layout>
      <div>
        <Helmet title="About" />
      </div>
      <div className="w-4/5 mt-5 mx-auto ">
        <div className=" xl:ml-[270px] lg:ml-[270px] md:ml-[270px]mb-5">
          <p className="font-playfair text-3xl">About</p>
          <p className="mt-5">
            My name is <i className="font-playfair">James</i> and I'm a
            developer from Adelaide, SA.
          </p>
          <p className="mt-2">
            I studied a Bachelor of Information Technology, Networks and
            Cybersecurity Systems at Flinders University.
          </p>
          <p className="mt-2">
            I am an incoming consultant for a tech company based in Adelaide.
          </p>
          <p className="mt-2">
            In my free time, I am a keen hiker and photographer.
          </p>
          <p className="mt-2">
            This website is where I share photographs, trips, projects and
            anything I'm interested in.
          </p>
          <p className="font-playfair text-3xl mt-3 mb-3">Software</p>
        </div>
        <section className="about-table mx-auto">
          <div className="table mx-auto overflow-auto">
            <div className="font-bold">Name</div>
            <div className="font-bold mr-[20px]">Description</div>
            <div className="font-bold">Tech</div>
            <div className="font-bold">Links</div>
            {info.slice(1, 5).map(function (item) {
              return (
                <>
                  <div>
                    <Link
                      to={item.url}
                      className="hover:text-cyan-500 duration-500"
                      target="_#"
                    >
                      {item.name}
                    </Link>
                  </div>

                  <div>{item.description}</div>
                  <div>
                    {item.repositoryTopics.edges.map(function (topic) {
                      return (
                        <span className="inline-block pr-1 italic">
                          {`${topic.node.topic.name}`}
                        </span>
                      )
                    })}
                  </div>
                  <div>
                    <Link to={item.url} target="_#">
                      <FaGithub
                        size="1.2rem"
                        className="hover:text-cyan-500 duration-500 cursor-pointer mr-1 ml-1"
                      />
                    </Link>
                  </div>
                </>
              )
            })}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default About

{
}
