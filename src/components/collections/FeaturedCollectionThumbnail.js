import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
function FeaturedCollectionThumbnail({ slug, title, image, date }) {
  return (
    <div className="mx-auto lg:w-1/3 xl:w-1/3 md:w-2/3 px-4 mt-5 mb-5">
      <div className="grid grid-cols-1">
        <div className="px-6 py-2">
          <div className="mb-1 mx-auto font-playfair text-[20px] text-[#343a40] leading-6 font-semibold text-center hover:text-ocre-red">
            <Link to={`collections/${slug}`}>{title}</Link>
          </div>
          <p className="text-center text-sm text-gray-600">{date}</p>
        </div>
        <Link to={`collections/${slug}`}>
          <GatsbyImage
            alt={title}
            image={getImage(image)}
            loading="lazy"
            placeholder="blurred"
            className="flex mx-auto "
          />
        </Link>
      </div>
    </div>
  )
}

export default FeaturedCollectionThumbnail

// <Link to={`collections/${slug}`} className="border-2">
// <GatsbyImage
//   alt={title}
//   image={getImage(image)}
//   loading="lazy"
//   placeholder="blurred"
//   className="w-2/4 mx-auto"
// />
// </Link>
