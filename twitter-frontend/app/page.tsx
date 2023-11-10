import React from "react";
import Image from "next/image";
import { BsTwitter } from "react-icons/bs";
import { BiHomeCircle } from "react-icons/bi";
import { BsEnvelopeOpen } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { BsHash } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { CiMoneyBill } from "react-icons/ci";
import { CiCircleMore } from "react-icons/ci";

import FeedCard from "@/components/FeedCard";

export default function Home() {
  interface TwitterSidebarButton {
    title: string;
    icon: React.ReactNode;
  }

  const sideBarMenuItems: TwitterSidebarButton[] = [
    {
      title: "Home",
      icon: <BiHomeCircle />,
    },
    {
      title: "Explore",
      icon: <BsHash />,
    },
    {
      title: "Notification",
      icon: <BsBell />,
    },
    {
      title: "Messages",
      icon: <BsEnvelopeOpen />,
    },
    {
      title: "Bookmarks",
      icon: <BsBookmark />,
    },
    {
      title: "Twitter Blue",
      icon: <CiMoneyBill />,
    },
    {
      title: "Profile",
      icon: <AiOutlineUser />,
    },
    {
      title: "More",
      icon: <CiCircleMore />,
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-48">
        <div className="col-span-3 pt-1 pr-4 ml-30">
          <BsTwitter className="text-3xl  hover:bg-sky-700 rounded-full p-1 cursor-pointer transition-all" />
          <ul className="text-xl mt-6 ">
            {sideBarMenuItems.map((items) => (
              <li className="flex justify-start items-center gap-3 hover:bg-sky-700 px-4 py-1 w-fit rounded-full cursor-pointer mt-3">
                <span>{items.icon}</span>
                <span>{items.title}</span>
              </li>
            ))}
          </ul>
          <button className="bg-sky-700 p-4 font-semibold rounded-full w-full mt-4">
            Tweet
          </button>
        </div>
        <div className="col-span-6 h-screen overflow-scroll ">
          {/* <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard /> */}
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
