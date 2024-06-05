import React from 'react'
import { RIGHT_SIDEBAR_DATA } from './../data/Right-Sidebar';
import Shedow from "../assets/imges/shadow.svg";

const RightSidebar = () => {
  return (
    <>
     <div className="mt-3 flex flex-col gap-6 overflow-auto max-h-[600px]  ">
            {RIGHT_SIDEBAR_DATA.map((item) => (
              <div key={item.id} className="relative">
                <img src={item.thumbnail} alt="" width={244} height={126} />
                <div className="absolute bottom-0">
                  <img src={Shedow} alt="" />
                  <div className="flex absolute top-3 left-3 gap-3 text-white text-base">
                    <img src={item.profile} alt="" className="h-12 w-12" />
                    <div className="flex flex-col">
                      <h3>{item.name}</h3>
                      <p className="text-sm">{item.userId}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
    </>
  )
}

export default RightSidebar
