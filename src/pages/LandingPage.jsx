import React from "react";
import { Search } from "lucide-react";
import { BsSliders } from "react-icons/bs";
import SideBar from "../components/SideBar";
import Content from "../components/Content";
import RightSidebar from "../components/RightSidebar";


const LandingPage = () => {
  return (
    <main className="max-w-[1240px] mx-auto flex flex-col gap-8 sticky">
      <header className="flex h-[60px] justify-between mt-5">
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

        {/* left side */}
        <div className=" w-[260px] rounded-[10px] ">
          <SideBar />
          <div className="flex justify-between mt-3 text-[10px] px-2 text-[#8D8D8D]">
            <p>2022©logo name</p>
            <p>Developed by Rahul Das</p>
          </div>
        </div>

        {/* middle content  */}
        <div className="max-w-[620px] max-h-[640px] rounded-[10px] overflow-y-scroll  h-full flex flex-col gap-5 ">
          <Content/>
        </div>

        {/* Right side */}
        <div className="flex flex-col  left-0  w-[260px] rounded-[10px] ">
          <div className="flex  gap-5">
            <p className="text-base font-semibold text-black text-start cursor-pointer">
              Artists
            </p>
            <p className="text-base text-[#8D8D8D] cursor-pointer">Photographers</p>
          </div>
         
          <RightSidebar/>
          <div className="flex text-[10px] text-[#8D8D8D] justify-between mt-3 pr-3">
            <p>Privacy </p>
            <p>Terms of Service</p>
            <p>Cookie Notice</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
