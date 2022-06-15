import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
function FeaturedEntryThumbnail({ slug, title, image, blurb, date, key }) {
  return (
    <>
      <Link to={`entries/${slug}`}>
        <div class="xl:w-[45%] lg:w-2/3 md:w-2/3 mb-8 mx-auto">
          <div class="flex flex-col justify-between md:flex-row">
            <h4 class="w-[90%] mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
              {title}
            </h4>
            <p class="w-32 mb-4 text-left text-gray-500 md:text-right md:mb-0">
              {date}
            </p>
          </div>
          <p class="text-gray-600 dark:text-gray-400">{blurb}</p>
        </div>
      </Link>
    </>
  )
}

export default FeaturedEntryThumbnail
