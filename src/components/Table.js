import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ReactTable from "react-table"
import { Link } from "gatsby"
function Table() {
  const github = useStaticQuery(graphql`
    query {
      githubData {
        data {
          user {
            pinnedItems {
              nodes {
                name
                description
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
    <div>
      {info.slice(0, 3).map(function (item) {
        return (
          <Link to={item.url} target="#">
            <div className="mt-2 mb-2 hover:border-[1px]pl-0">
              <div className="pl-1">
                <h5 className="text-lg pl-0 mb-1 pr-1 font-semibold">
                  {item.name}
                </h5>
                <p className="mb-1 pr-1">{item.description}</p>
                <ul>
                  {item.repositoryTopics.edges.map(function (topic) {
                    return (
                      <span className="inline-block pr-1 italic">
                        {`${topic.node.topic.name}`}
                      </span>
                    )
                  })}
                </ul>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )

  // <>
  //   {info.map(function (item) {
  //     <div className="w-full border-2">
  //       <h1>The Name</h1>
  //     </div>
  // </>
  // <div className="w-full border-2">
  //   <h1>The Name</h1>
  //   <div className="flex flex-row">
  //     <p>Description</p>
  //     <p>Last Updated</p>
  //   </div>
  // </div>
}

export default Table
