import React from "react";
import { Search } from "lucide-react";
import { BsSliders } from "react-icons/bs";
import SideBar from "../components/SideBar";
import {RIGHT_SIDEBAR_DATA} from './../data/Right-Sidebar';
import Shedow from '../assets/imges/shadow.svg'

const LandingPage = () => {

  return (
    <main className="max-w-[1280px] mx-auto flex flex-col gap-8">
      <header className="flex h-[60px] justify-between mt-2">
        <div className="flex items-center bg-white w-[260px] rounded-[10px] p-1.5">
          <h1 className="text-[32px] ml-8">LOGO</h1>
        </div>
        <div className="flex items-center jus bg-white w-[620px] rounded-[10px] px-[30px] py-[33px]">
          <div className="relative items-center w-full ml-5">
            <input
              type="text"
              placeholder="Search here..."
              className="pl-8 p-2 w-full "
            />
            <Search className="absolute top-3 left-1 w-5 h-5 bg-opacity-40" />
          </div>
          <div className="flex items-center gap-2 justify-end w-full">
            <BsSliders className="w-5 h-5" />
            <p>Filters</p>
          </div>
        </div>
        <div className="flex items-center justify-center p-1.5 bg-[#88C2BB] w-[260px] rounded-[10px] ">
          <p className=" font-semibold text-base text-white">Become a Seller</p>
        </div>
      </header>

      <div className="flex gap-8 justify-between">
        <div className="flex items-center sticky left-0 bg-white w-[260px] rounded-[10px] ">
          <SideBar />
        </div>
        <div>
          hii
        </div>
        <div className="flex flex-col  left-0  w-[260px] rounded-[10px] ">
          <div className="flex  gap-5">
            <p className="text-base font-semibold text-black text-start">Artists</p>
            <p className="text-base text-[#8D8D8D]">Photographers</p>
          </div>
          <div className="mt-3 flex flex-col gap-6">
              {
                RIGHT_SIDEBAR_DATA.map( (item) => (
                  <div key={item.id} className="relative">
                    <img src={item.thumbnail} alt="" width={244} height={126}/>
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
                ))
              }
          </div>
        </div>
       
      </div>
    </main>
  );
};

export default LandingPage;
