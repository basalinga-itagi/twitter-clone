import Image from "next/image";
import React from "react";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUpload } from "react-icons/ai";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-gray-600 p-4 hover:bg-gray-800 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/110653707?v=4"
            alt="user image"
            height={40}
            width={40}
            className="rounded-full"
          />
        </div>
        <div className="col-span-11">
          <h5>Basalingappa Itagi</h5>
          <p>
            Even the longest non-stop flight in the world is no match for the
            battery of MacBook Pro, with up to 22 hours of power.
          </p>
          <div className="flex justify-between mt-6 text-lg p-2 w-[80%]">
            <BiMessageRounded />
            <AiOutlineRetweet />
            <AiOutlineHeart />
            <AiOutlineUpload />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
