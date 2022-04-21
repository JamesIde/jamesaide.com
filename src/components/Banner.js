import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

function Banner() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBanner {
        edges {
          node {
            title
            slug
            Banner {
              gatsbyImageData(formats: WEBP, layout: CONSTRAINED, quality: 100)
            }
          }
        }
      }
    }
  `)
  const banner = data.allContentfulBanner.edges
  return (
    <div>
      <div>
        {banner.map(function (edge) {
          return (
            <BgImage
              image={getImage(edge.node.Banner)}
              className=" object-contain p-0 m-0"
            >
              <div
                className="flex justify-center items-center"
                style={{ height: `76vh` }}
              >
                <div className="text-center">
                  <h1 className="text-3xl text-white">{edge.node.title}</h1>
                  <p className="text-1xl text-white">SEE MORE</p>
                </div>
              </div>
            </BgImage>
          )
        })}
      </div>
    </div>
  )
}

export default Banner
