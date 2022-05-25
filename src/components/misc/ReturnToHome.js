import React from "react"
import { Link } from "gatsby"
function ReturnToHome() {
  return (
    <Link to="/" className="hover:text-sky-700 duration-500">
      <p className="text-center font-mono">[Return to home]</p>
    </Link>
  )
}

export default ReturnToHome
