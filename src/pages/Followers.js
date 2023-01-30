import React from "react";
import LeftSide from "../components/LeftSide";
import { MdOutlineFollowTheSigns } from "react-icons/md";
import { Link } from "react-router-dom";
import { RiUserFollowFill } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";

import { FaPaperPlane } from "react-icons/fa";

const Followers = () => {
  return (
    <div className=" relative w-full h-full py-5 ">
      <div className="mx-auto mt-24">
        <div className="w-full flex px-4">
          <LeftSide />
          <div className=" bg-white right mt-10 ml-12 rounded-md flex flex-col">
            <div className="flex my-8 pl-10">
              <p className="h font-semibold flex justify-between items-center text-2xl gap-2">
                <RiUserFollowFill className=" text-green-500" />
                My Followers
              </p>
              <div className="flex items-center justify-center pl-80 ">
                <p className="advert  gap-1">
                  <MdOutlineFollowTheSigns className=" text-xl" />
                  My Followers
                </p>
                <p className="search gap-1">
                  <MdOutlineFollowTheSigns className="text-xl" />
                  Following
                </p>
              </div>
            </div>
            <hr />
            <div className=" m-10">
              <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <BsSearch />
                </span>
                <input
                  className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-4 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Search for anything..."
                  type="text"
                  name="search"
                />
              </label>
            </div>
            <div>
              <Link to="/inviteFriends">
                <p className="flex gap-5 ml-10 mb-10 text-orange-400 font-semibold ">
                  <FaPaperPlane className="w-10 h-10 drop-shadow-xl cursor-pointer  hover:text-orange-500 hover:scale-110 transition-all duration-200 ease-in-out hover:font-extrabold  " />
                  <span className="text-sm  hover:text-orange-500 hover:scale-110 transition-all duration-200 ease-in-out hover:font-extrabold cursor-pointer ">
                    Invite your friends to MUMU
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Followers;
