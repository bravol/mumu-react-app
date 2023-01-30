import React from "react";
import LeftSide from "../components/LeftSide";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";

import { BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";

import { FaFacebookF } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const InviteFriends = () => {
  return (
    <div className=" relative w-full h-full py-5 ">
      <div className="mx-auto mt-24 ">
        <div className="w-full flex px-4">
          <LeftSide />
          <div className=" bg-white right mt-10 ml-12 rounded-md flex flex-col">
            <div className="flex my-8 pl-10">
              <p className=" font-semibold flex justify-between items-center text-2xl gap-2">
                <Link to="/followers">
                  <MdArrowBackIosNew className=" text-black text-4xl" />
                </Link>
                <span className="text-xl">Invite your Friends</span>
              </p>
            </div>
            <hr />
            <div className=" flex  justify-between hover:bg-gray-200  ">
              <p className="flex gap-3 m-6">
                <BsWhatsapp className=" text-green-500 text-4xl " />
                <span className="pt-2 text-sm text-headingColor">WhatsApp</span>
              </p>
              <Link to="">
                <span className=" bg-green-500 flex items-center py-2 px-4 m-6 rounded-2xl text-white text-sm cursor-pointer hover:bg-green-600">
                  Invite
                </span>
              </Link>
            </div>
            <hr />
            <div className=" flex  justify-between  hover:bg-gray-200">
              <p className="flex gap-3 m-6">
                <FaFacebookF className=" text-blue-800 text-4xl" />
                <span className="pt-2 text-sm text-headingColor">Facebook</span>
              </p>
              <Link to="">
                <span className=" bg-green-500 flex items-center py-2 px-4 m-6 rounded-2xl text-white text-sm cursor-pointer hover:bg-green-600">
                  Invite
                </span>
              </Link>
            </div>
            <hr />
            <div className=" flex  justify-between hover:bg-gray-200">
              <p className="flex gap-3 m-6">
                <TfiEmail className=" text-orange-400 text-4xl" />
                <span className="pt-2 text-sm text-headingColor">
                  send by Email
                </span>
              </p>
              <Link to="">
                <span className="bg-green-500 flex items-center py-2 px-4 m-6 rounded-2xl text-white text-sm cursor-pointer hover:bg-green-600">
                  Invite
                </span>
              </Link>
            </div>
            <hr />
            <div className=" flex  justify-between hover:bg-gray-200 ">
              <p className="flex gap-3 m-6">
                <BsTwitter className=" text-blue-400 text-4xl" />
                <span className="pt-2 text-sm text-headingColor">Twitter</span>
              </p>
              <Link to="">
                <span className=" bg-green-500 flex items-center py-2 px-4 m-6 rounded-2xl text-white text-sm cursor-pointer hover:bg-green-600">
                  Invite
                </span>
              </Link>
            </div>
            <hr />

            <div className=" flex  justify-between hover:bg-gray-200 ">
              <p className="flex gap-3 m-6">
                <BsInstagram className=" text-fuchsia-700 text-4xl" />
                <span className="pt-2 text-sm text-headingColor">
                  Instagram
                </span>
              </p>
              <Link to="">
                <span className=" bg-green-500 flex items-center py-2 px-4 m-6 rounded-2xl text-white text-sm cursor-pointer hover:bg-green-600">
                  Invite
                </span>
              </Link>
            </div>
            <hr className=" mb-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteFriends;
