import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
function Card({ slug, title, image, date, description }) {
  return (
    <div
      className="
    container mx-auto"
    >
      <div className="text-black pb-5">
        <div className="lg:w-[900px] md:w-[600px] overflow-hidden shadow-lg mx-auto">
          <Link to={`records/${slug}`}>
            <GatsbyImage
              alt={title}
              image={getImage(image)}
              loading="lazy"
              className="md:h-[550px]"
            />
          </Link>
          <div className="px-6 py-4 bg-white max-w-fit mx-auto">
            <div className="font-bold text-xl mb-4 max-w-fit mx-auto hover:text-sky-700">
              <Link to={`records/${slug}`} className="duration-500">
                {title}
              </Link>
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
