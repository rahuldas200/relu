import React from "react";
import home from "../assets/sidebar/home.svg";
import notification from "../assets/sidebar/notification.svg";
import heart from "../assets/sidebar/heart.svg";
import message from "../assets/sidebar/message.svg";
import favoriate from "../assets/sidebar/favorite.svg";
import profile from "../assets/sidebar/profile.svg";
import settings from "../assets/sidebar/setting.svg";
import Logout from "../assets/sidebar/logout.svg";

const SIDEBAR_DATA = [
  {
    icon: home,
    title: "Home",
    path: "/home",
  },
  {
    icon: notification,
    title: "Notification",
    path: "/notifications",
  },
  {
    icon: heart,
    title: "Shop",
    path: "/shop",
  },
  {
    icon: message,
    title: "Conversation",
    path: "/conversation",
  },
  {
    icon: message,
    title: "Wallet",
    path: "/wallet",
  },
  {
    icon: favoriate,
    title: "Subscription",
    path: "/subscription",
  },
  {
    icon: profile,
    title: "My Profile",
    path: "/profile",
  },
  {
    icon: settings,
    title: "Settings",
    path: "/settings",
  },
];

const SideBar = () => {
  return (
    <div className="h-[640px]  pt-7 pb-3 flex flex-col bg-white w-full justify-between rounded-[10px]">
      <div className="flex flex-col gap-2 ">
        {SIDEBAR_DATA.map((item, index) => (
          <div key={item.title} className="border-l-4 border-blue-700 ml-1 border-opacity-75">
            <div className="flex gap-2 p-2.5 ml-5 cursor-pointer">
              <img src={item.icon} alt="" className="w-6 h-6" />
              <h3 className="text-base ml-2">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="ml-1 mt-3">
        <div className="flex gap-2 p-2.5 ml-5 cursor-pointer">
          <img src={Logout} alt="" className="h-6 w-6"/>
          <p className='ml-2'>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
