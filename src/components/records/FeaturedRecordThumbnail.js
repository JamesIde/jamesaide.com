import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
function Card({ slug, title, location, image, date, description }) {
  return (
    <div
      className="
    container mx-auto"
    >
      <div className="col-span-1 ml-5 mr-5 border-[1px]">
        <Link to={`records/${slug}`}>
          <GatsbyImage
            alt={title}
            image={getImage(image)}
            loading="lazy"
            placeholder="blurred"
            className="md:h-[450px] "
          />
        </Link>
        <div className="px-6 py-4 max-w-fit mx-auto ">
          <div className="mb-1 max-w-fit mx-auto font-playfair text-[1.5rem] text-[#343a40] leading-6 font-semibold text-center hover:text-sky-700">
            <Link to={`records/${slug}`} className="duration-500">
              {title}
            </Link>
          </div>
          <p className="text-center mb-3 mt-2 font-mono">[{location}]</p>
          <hr className="mb-5" />
          <p className="text-base">{description}</p>
          <p className="text-right ">{date}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
