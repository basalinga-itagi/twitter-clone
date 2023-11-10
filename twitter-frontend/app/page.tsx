import React from "react";
import Image from "next/image";
import { BsTwitter } from "react-icons/bs";
import { BiHomeCircle } from "react-icons/bi";
import { BsEnvelopeOpen } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { BsHash } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

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
      title: "Profile",
      icon: <AiOutlineUser />,
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-48">
        <div className="col-span-3  pt-8 pr-4">
          <BsTwitter className="text-4xl  hover:bg-sky-700 rounded-full p-1 cursor-pointer transition-all" />
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
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-grey-400 "></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
