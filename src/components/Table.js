import React from "react"
import info from "../svg/tableicons/info.svg"
import map from "../svg/tableicons/map.svg"
import plane from "../svg/tableicons/plane.svg"
import cal from "../svg/tableicons/calendar-week.svg"
import gear from "../svg/tableicons/gear.svg"
function Table() {
  return (
    <div className="text-center text-black mt-5 mb-4">
      <hr />
      <table class="table-auto mx-auto mt-3 mb-3">
        <thead>
          <>
            <th className="md:p-6 sm:p-6 lg:pl-10 lg:pr-20 p-6 ">
              <img src={cal} alt="" className="h-7 mx-auto" />
              <a href="#" className="tbl-link">
                Itinerary
              </a>
            </th>
            <th className="md:p-6 sm:p-6 lg:pl-10 lg:pr-20 p-6">
              <img src={map} alt="" className="h-7 mx-auto" />
              <a href="#">Map</a>
            </th>
            <th className="md:p-6 sm:p-6 lg:pl-10 lg:pr-20 p-6">
              <img src={plane} alt="" className="h-7 mx-auto" />
              <a href="#">Travel</a>
            </th>
            <th className="md:p-6 sm:p-6 lg:pl-10 lg:pr-20 p-6">
              <img src={gear} alt="" className="h-7 mx-auto" />
              <a href="#">Gear</a>
            </th>
            <th className="md:p-6 sm:p-6 lg:pl-10 lg:pr-20 p-6">
              <img src={info} alt="" className="h-7 mx-auto" />
              <a href="#">About</a>
            </th>
          </>
        </thead>
      </table>
      <hr />
    </div>
  )
}

export default Table
