import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
function FeaturedEntryThumbnail({ slug, title, image, blurb, date, key }) {
  return (
    <div
      className="
    container mx-auto max-w-xl px-2 mt-2"
    >
      <div className="px-6 py-2 mx-auto ">
        <div className="mb-1 mx-auto font-playfair text-[20px] text-[#343a40] leading-6 font-semibold text-center hover:text-sky-700">
          <Link to={`records/${slug}`} className="duration-500">
            {title}
          </Link>
        </div>
        <p className="text-center text-sm text-gray-600">{date}</p>
      </div>

      <Link to={`entries/${slug}`}>
        <GatsbyImage
          alt={title}
          image={getImage(image)}
          loading="lazy"
          placeholder="blurred"
          className="object-contain"
        />
      </Link>
    </div>
  )
}

export default FeaturedEntryThumbnail
