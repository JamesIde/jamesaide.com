import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
function Navigation({ title }) {
  return (
    <div class="navbar  bg-white text-black">
      <div className="container mx-auto ">
        <div className="flex-1">
          <div className="flex-none text-center nav-center mb-2">
            <Link to="/" className="text-4xl align-middle">
              {title}
            </Link>
          </div>
          <div className="lg:w-[900px] md:w-[600px] mx-auto">
            <hr />
          </div>

          <div className="flex justify-center mt-1 font-mono">
            <Link
              to="/About/"
              className="text-base hover:text-sky-700 duration-500 lg:mr-3 md:mr-3 sm:mr-3 mr-3"
              activeClassName="text-sky-700"
            >
              ABOUT
            </Link>
            <Link
              to="/"
              className="text-base hover:text-sky-700 duration-500 lg:mr-3 md:mr-3 sm:mr-3 mr-3"
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
