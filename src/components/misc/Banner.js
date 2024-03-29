import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { Link } from "gatsby"
import { HiExternalLink } from "react-icons/hi"

function Banner() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBanner {
        edges {
          node {
            title
            slug
            bannerDescription
            id
            Banner {
              gatsbyImageData(
                placeholder: BLURRED
                formats: WEBP
                quality: 100
                layout: CONSTRAINED
                width: 1920
              )
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
              className="object-cover p-0 m-0"
              style={{ height: "100vh" }}
            >
              <div className="navbar text-black mb-2 banner-animation">
                <div className="container mx-auto ">
                  <div className="flex-1">
                    <div className="flex-none text-center nav-center mb-2">
                      <Link to="/" className="text-4xl align-middle text-black">
                        James Ide
                      </Link>
                    </div>
                    <div className="lg:w-[900px] md:w-[600px] mx-auto">
                      <div class="w-full border-t border-gray-700"></div>
                    </div>
                    <div className="flex justify-center mt-1 font-mono">
                      <Link
                        to="/about"
                        className="text-base hover:text-sky-700 duration-500 lg:mr-3 md:mr-3 sm:mr-3 mr-3"
                        activeClassName="text-sky-700"
                      >
                        ABOUT
                      </Link>
                      <Link
                        to="/gear"
                        className="text-base hover:text-sky-700 duration-500 lg:mr-3 md:mr-3 sm:mr-3 mr-3"
                        activeClassName="text-sky-700"
                      >
                        GEAR
                      </Link>
                      <a
                        href="mailto:james.ide775@gmail.com"
                        target="_#"
                        className="text-base hover:text-sky-700 duration-500 lg:mr-3 md:mr-3 sm:mr-3 mr-3 p-0"
                      >
                        CONTACT
                        <HiExternalLink
                          size="0.7rem"
                          className="inline-block"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex justify-center items-center"
                style={{ height: `83vh` }}
              >
                <div className="text-center">
                  <h1 className="text-6xl text-white font-playfair">
                    {edge.node.title}
                  </h1>
                  {/* TODO STYLING */}
                  <p className="text-white text-lg mt-2 mb-5 font-medium">
                    {edge.node.bannerDescription}
                  </p>
                  <Link
                    to={`records/${edge.node.slug}`}
                    className="text-md w-max border-2 mx-auto font-medium
                  p-2 bg-white text-black rounded hover:cursor-pointer duration-500 mt-4
                  hover:bg-neutral-300 "
                  >
                    READ MORE
                  </Link>
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
