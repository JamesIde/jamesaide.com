import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
function FeaturedEntryThumbnail({ slug, title, image, blurb, date, key }) {
  return (
    <div className="w-1/4">
      <div className="text-center">
        <p>This styling needs updating lmao</p>
        <Link to={`/entries/${slug}`}>
          <GatsbyImage image={getImage(image)} />
        </Link>
      </div>
      <h5 className="text-center font-mono text-xl">{title}</h5>
      <p>{date}</p>
    </div>
  )
}

export default FeaturedEntryThumbnail
