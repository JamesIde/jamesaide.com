import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
function Card({ slug, title, image, date, description }) {
  return (
    <div
      className="
    container mx-auto"
    >
      {/* <div className = {}style={{ backgroundImage: `url(${snow})` }}></div> */}
      <div className="text-white pb-5">
        {/* <Link to={slug}></Link> */}
        <div className="md:w-[900px] sm:w-[600px] overflow-hidden shadow-lg mx-auto ">
          <Link to={slug}>
            <GatsbyImage alt={title} image={getImage(image)} loading="lazy" />
          </Link>
          <div className="px-6 py-4 bg-gray-700 max-w-fit mx-auto">
            <div className="font-bold text-xl mb-4 max-w-fit mx-auto hover:text-sky-700">
              <Link to={slug}>{title}</Link>
            </div>

            <p className="text-base ">{description}</p>
            <p className="text-right ">{date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
