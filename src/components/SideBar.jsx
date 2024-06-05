import React from "react";
import home from "../assets/sidebar/home.svg";
import notification from "../assets/sidebar/notification.svg";
import heart from "../assets/sidebar/heart.svg";
import message from "../assets/sidebar/message.svg";
import favoriate from "../assets/sidebar/favorite.svg";
import profile from "../assets/sidebar/profile.svg";
import settings from "../assets/sidebar/setting.svg";
import Logout from "../assets/sidebar/logout.svg";
import { useState } from "react";

const SIDEBAR_DATA = [
  {
    id:1,
    icon: home,
    title: "Home",
    path: "/home",
  },
  {
    id:2,
    icon: notification,
    title: "Notification",
    path: "/notifications",
  },
  {
    id:3,
    icon: heart,
    title: "Shop",
    path: "/shop",
  },
  {
    id:4,
    icon: message,
    title: "Conversation",
    path: "/conversation",
  },
  {
    id:5,
    icon: message,
    title: "Wallet",
    path: "/wallet",
  },
  {
    id:6,
    icon: favoriate,
    title: "Subscription",
    path: "/subscription",
  },
  {
    id:7,
    icon: profile,
    title: "My Profile",
    path: "/profile",
  },
  {
    id:8,
    icon: settings,
    title: "Settings",
    path: "/settings",
  },
];

const SideBar = () => {

  const [currentPath ,setCurrentPath] = useState(1);



  return (
    <div className="h-[640px]  pt-7 pb-3 flex flex-col bg-white w-full justify-between rounded-[10px]">
      <div className="flex flex-col gap-2 ">
        {SIDEBAR_DATA.map((item) => {
          return (
            <div
              onClick={()=>setCurrentPath(item.id)}
              key={item.id}
              className={`${item.id === currentPath ? "border-l-4 border-blue-700  border-opacity-75 bg-gray-100":""}` }
            >
              <div className="flex gap-2 p-2.5 ml-5 cursor-pointer">
                <img src={item.icon} alt="" className="w-6 h-6" />
                <h3 className="text-base ml-2">{item.title}</h3>
              </div>
            </div>
          );
        })}
      </div>

      <div className="ml-1 mt-3">
        <div className="flex gap-2 p-2.5 ml-5 cursor-pointer">
          <img src={Logout} alt="" className="h-6 w-6" />
          <p className="ml-2">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
