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
        <h3>{title}</h3>
      </div>{" "}
      <GatsbyImage
        image={getImage(image)}
        alt={title}
        className="mx-auto border-2 mb-5 hover:border-blue-500 hover:cursor-pointer"
      />
    </div>
  )
}

export default FeaturedCollectionThumbnail
