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
            id
            Banner {
              gatsbyImageData(formats: JPG, layout: CONSTRAINED, quality: 75)
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
            // Swiper component with background URL as this
            // Rather than BG image (?)
            <BgImage
              image={getImage(edge.node.Banner)}
              className="object-contain p-0 m-0"
            >
              <div
                className="flex justify-center items-center"
                style={{ height: `83vh` }}
              >
                <div className="text-center">
                  <h1 className="text-3xl text-white">{edge.node.title}</h1>
                  {/* TODO STYLING */}
                  <p className="text-1xl text-white">
                    SEE MORE
                    {/* TODO: BUTTON LINK TO SLUG */}
                  </p>
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
