import React from 'react'
import home from '../assets/sidebar/home.svg'
import notification from '../assets/sidebar/notification.svg'
import heart from '../assets/sidebar/heart.svg'
import message from '../assets/sidebar/message.svg'
import favoriate from '../assets/sidebar/favorite.svg'
import profile from '../assets/sidebar/profile.svg'
import settings from '../assets/sidebar/setting.svg'
import Logout from '../assets/sidebar/logout.svg'

const SIDEBAR_DATA = [
    {
        icon:home,
        title:"Home",
        path:"/home",
    },
    {
        icon:notification,
        title:"Notification",
        path:"/notifications",
    },
    {
        icon:heart,
        title:"Shop",
        path:"/shop",
    },
    {
        icon:message,
        title:"Conversation",
        path:"/conversation",
    },
    {
        icon:message,
        title:"Wallet",
        path:"/wallet",
    },
    {
        icon:favoriate,
        title:"Subscription",
        path:"/subscription",
    },
    {
        icon:profile,
        title:"My Profile",
        path:"/profile",
    },
    {
        icon:settings,
        title:"Settings",
        path:"/settings",
    }
]

const SideBar = () => {
   
  return (
    <div className='h-[707px] px-8 flex flex-col w-full justify-between'>
      <div className='flex flex-col gap-7'>
      {
        SIDEBAR_DATA.map((item,index) =>(
            <div key={item.title} className='flex gap-2'>
               <img src={item.icon} alt="" className='w-6 h-6'/>
                <h3 className='text-base ml-5'>{item.title}</h3>
            </div>
        ))
      }
      </div>

      <div>
        <div className='flex gap-3'>
            <img src={Logout} alt="" />
            <p>Logout</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar
