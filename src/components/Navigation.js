import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
function Navigation({ title }) {
  return (
    <div class="navbar bg-gray-800 text-white">
      <div className="container mx-auto ">
        <div className="flex-1">
          <div className="flex-none text-center bold mb-1">
            <Link
              to="/"
              className="text-3xl text-stone-100 font-bold align-middle"
            >
              {title}
            </Link>
          </div>
          <div className="lg:w-[900px] md:w-[600px] mx-auto">
            <hr />
          </div>

          <div className="flex justify-center mt-1">
            <Link
              to="/"
              className="text-lg font-bold text-stone-100 hover:text-sky-700 duration-500 lg:mr-3 md:mr-3 sm:mr-3 mr-3"
            >
              ABOUT
            </Link>
            <Link
              to="/"
              className="text-lg font-bold text-stone-100 hover:text-sky-700 duration-500 lg:mr-3 md:mr-3 sm:mr-3 mr-3"
            >
              CONTACT
            </Link>
            {/* Instagram Icon */}
            {/* MailTo with icon */}
          </div>
        </div>
      </div>
    </div>
  )
}

Navigation.defaultProps = {
  title: "James Ide",
}
Navigation.propTypes = {
  title: PropTypes.string,
}
export default Navigation
