import React from "react";
import { MARKATING_DATA, USER_POSTS } from "../data/content";
import like from "../assets/sidebar/heart.svg";
import comment from "../assets/sidebar/comment.svg";
import share from "../assets/sidebar/share.svg";
import { BsThreeDotsVertical } from "react-icons/bs";
import star from '../assets/sidebar/star.svg'

const Content = () => {

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
       <img key={i} src={star} className="h-3 w-4" alt="img"/>
      ); 
    }
    return stars;
  };

  return (
    <div>
      {USER_POSTS.map((item) => (
        <>
          <div
            key={item.id}
            className="flex gap-5 flex-col p-8  bg-white rounded-[10px]"
          >
            <div className="flex justify-between">
              <div className="flex gap-3 items-center">
                <img src={item.userProfile} alt="" className="w-12 h-12" />
                <div>
                  <h3>{item.userName}</h3>
                  <p>{item.userId}</p>
                </div>
              </div>
              <div className="flex items-center cursor-pointer">
                <BsThreeDotsVertical className="h-6 w-6 opacity-70" />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <p>{item.posts.content}</p>
              </div>

              <div>
                <img src={item.posts.contentImg} alt="" />
              </div>
            </div>

            <div className="flex gap-8 items-center">
              <div className="flex gap-2 items-center">
                <img src={like} alt="" className="w-6 h-6 cursor-pointer" />
                <p>{item.posts.like}</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={comment} alt="" className="w-6 h-6 cursor-pointer" />
                <p>{item.posts.comment}</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={share} alt="" className="w-6 h-6 cursor-pointer" />
                <p>{item.posts.share}</p>
              </div>
            </div>
          </div>
        </>
      ))}
      <div className="max-w-[620px] overflow-hidden p-4">
        <div className="flex gap-2 h-[240px] w-[252px]">
        {MARKATING_DATA.map((data) => (
            <div
              key={data.id}
              className="flex-none w-[252px] h-[180px] p-4 rounded-lg "
            >
              <img
                src={data.thumbnail}
                alt={data.title}
                className=" rounded-md w-[252px] h-[180px]"
              />
              <h3 className="mt-2 text-[10px] font-semibold">{data.title}</h3>
              <div className="flex justify-between mt-1 text-gray-600">
                <p className="text-2xl">${data.price}</p>
                <p className="flex gap-0.5 items-center">
                  {renderStars(data.reting)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
