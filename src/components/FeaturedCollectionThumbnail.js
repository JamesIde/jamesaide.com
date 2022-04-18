import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function FeaturedCollectionThumbnail({
  slug,
  title,
  image,
  description,
  date,
}) {
  return (
    <div class="col-span-1">
      <div>
        <h3 className="text-left text-xl m-3 ml-0">{title}</h3>
      </div>{" "}
      <GatsbyImage
        image={getImage(image)}
        alt={title}
        className="mx-auto border-2 mb-5 hover:border-blue-500 hover:cursor-pointer duration-500"
      />
    </div>
  )
}

export default FeaturedCollectionThumbnail
