import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { HiExternalLink } from "react-icons/hi"
function Navigation({ title }) {
  return (
    <div className="navbar text-black mb-2">
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
            {/* <Link
              to="/"
              className="text-base hover:text-sky-700 duration-500 lg:mr-3 md:mr-3 sm:mr-3 mr-3"
            >
              CONTACT
            </Link> */}
            <a
              href="mailto:james.ide775@gmail.com"
              target="_#"
              className="text-base hover:text-sky-700 duration-500 lg:mr-3 md:mr-3 sm:mr-3 mr-3 p-0"
            >
              CONTACT
              <HiExternalLink size="0.7rem" className="inline-block" />
            </a>
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
