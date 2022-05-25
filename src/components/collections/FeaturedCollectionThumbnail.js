import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
function FeaturedCollectionThumbnail({
  slug,
  title,
  image,
  description,
  date,
}) {
  return (
    <section class="m-2 leading-normal lg:w-1/2 mx-auto">
      <div class="overflow-hidden m-4 md:flex sm:flex border-[1px]">
        <Link to={`collections/${slug}`}>
          <div class="sm:w-48 md:w-64 lg:w-80 h-full flex-none overflow-hidden">
            <GatsbyImage
              alt={title}
              image={getImage(image)}
              loading="lazy"
              className=""
            />
          </div>
        </Link>
        <div class="lg:text-left md:text-left lg:p-6 md:p-6 lg:pt-20 md:pt-12 sm:pt-8 sm:p-4 sm:text-center xs:text-center">
          <Link to={`collections/${slug}`}>
            {" "}
            <h2 class="mb-2 font-playfair text-xl font-bold hover:text-blue-500 cursor-pointer duration-500">
              {title}
            </h2>
          </Link>
          <p class="mb-4 text-grey-dark text-sm font-mono">[{date}]</p>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCollectionThumbnail
