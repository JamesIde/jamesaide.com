import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
function Navigation({ title }) {
  return (
    <div class="navbar bg-gray-800 pb-5 pt-5 text-white">
      <div className="container mx-auto ">
        <div className="flex-none px-2 mx-2 bold ">
          <Link
            to="/"
            className="text-3xl text-stone-100 font-bold align-middle"
          >
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost  text-lg text-stone-100">
              NAV
            </Link>
            <Link to="/" className="btn btn-ghost  text-lg text-stone-100">
              NAV
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
  title: "NAV",
}
Navigation.propTypes = {
  title: PropTypes.string,
}
export default Navigation
