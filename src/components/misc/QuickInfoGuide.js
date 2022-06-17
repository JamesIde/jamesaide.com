import React from "react"
import { RiPinDistanceFill } from "react-icons/ri"
import { FaCampground } from "react-icons/fa"
import { BiStreetView } from "react-icons/Bi"
import { IoMdTrendingUp } from "react-icons/io"
import { IoMdTrendingDown } from "react-icons/io"
function QuickInfoGuide() {
  return (
    <>
      {/* Trail Statistics */}
      <div className="mx-auto xl:w-2/6 mt-5">
        <div className="flex justify-evenly">
          {/* Distance */}
          <div id="Distance" className="w-max ">
            <div id="wrapper" className="flex">
              <div>
                <RiPinDistanceFill size={33} />
              </div>
              <div className="font-bold text-3xl">
                <p>Itinerary</p>
              </div>
            </div>
          </div>
          {/* Days */}
          <div id="Days" className="w-max ">
            <div id="wrapper" className="flex">
              <div>
                <FaCampground size={33} />
              </div>
              <div className="font-bold text-3xl">
                <p>Days</p>
              </div>
            </div>
          </div>
          {/* Grade */}
          <div id="Grade">
            <div id="wrapper" className="flex">
              <div>
                <BiStreetView size={33} />
              </div>
              <div className="font-bold text-3xl">
                <p>Grade</p>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End of 3 div */}
        <div className="flex justify-evenly mt-2">
          {/* Ascent */}
          <div id="Ascent">
            <div id="wrapper" className="flex">
              <div>
                <IoMdTrendingUp size={33} />
              </div>
              <div className="font-bold text-3xl">
                <p>Ascent</p>
              </div>
            </div>
          </div>
          {/* Descent */}
          <div id="Descent">
            <div id="wrapper" className="flex">
              <div>
                <IoMdTrendingDown size={33} />
              </div>
              <div className="font-bold text-3xl">
                <p>Descent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuickInfoGuide
