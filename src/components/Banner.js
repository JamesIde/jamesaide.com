import React from "react"
import background from "../images/mountain.jpg"
import * as indexStyle from "../styles/modules/Index.module.scss"
function Banner() {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className={indexStyle.banner}
      >
        <div
          className="flex justify-center items-center"
          style={{ height: `76vh` }}
        >
          <div className="text-center">
            <h1 className="text-3xl">MAIN TEXT</h1>
            <p className="text-xl">MAIN TEXT</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
