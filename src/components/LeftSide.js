import React, { useState } from "react";
import Avatar from "../images/avatar.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AiFillQuestionCircle, AiFillSetting } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";
import {
  MdFeedback,
  MdOutlineAddIcCall,
  MdOutlineFollowTheSigns,
} from "react-icons/md";
import { FaMoneyBillWaveAlt, FaServer } from "react-icons/fa";

const LeftSide = () => {
  const [filter, setFilter] = useState("");
  return (
    <div className="hidden md:block mr-8 bg-white  mt-10 md:w-2/6">
      <div className=" bg-green-500 h-40 rounded-tr-md rounded-tl-md">
        <Link to="/settings">
          <div className="flex items-center justify-end text-white text-xs gap-1 pr-1 cursor-pointer ml-52 rounded-md py-2 hover:bg-gray-300 transition-all duration-100 ease-in-out">
            SETTINGS
            <AiFillSetting />
          </div>
        </Link>

        <p className="flex items-center justify-center pt-0 pb-5">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={Avatar}
            className="w-16 h-16 drop-shadow-xl cursor-pointer rounded-full bg-slate-300 bg-cover"
            alt="userprofile"
          />
        </p>
        <h1 className="flex items-center justify-center text-white">
          Lumala Brian
        </h1>
      </div>
      <div>
        <div className="b bg-orange-400 text-white py-3">
          <p className="flex justify-between">
            <span className="m ml-4 mr-4 text-x">Advice</span>
            <span className="mr-4 bg-orange-600 px-2 py-1 text-xs rounded-md">
              HIDE 1
            </span>
          </p>

          <p className="flex items-center justify-center text-orange-300 bg-white mr-5 ml-2 rounded-sm p-2 mt-2 text-sm">
            Learn How to create an effective ad
            <TiDelete className />
          </p>
        </div>
      </div>
      <Link to="/makeMoney">
        <div className="flex py-5 ml-4 text-sm text-textColor">
          <p className="w-4 h-4">🤑 </p>
          <p
            className={`ml-3 hover:text-green-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg ${
              filter === "Make Money" ? "text-green-500" : "text-textColor"
            } `}
            onClick={() => setFilter("Make Money")}
          >
            Make Money
          </p>
        </div>
      </Link>

      <div className="py-3 bg-slate-200"></div>
      <Link to="/myBalance">
        <div className="flex  py-5 ml-4   ">
          <FaMoneyBillWaveAlt className="w-4 h-4 mt-3  " />
          <div className=" text-sm ml-3 hover:text-green-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg">
            <p className=" text-headingColor hover:text-green-500">USh: 0</p>
            <p
              className={`   text-xs text-textColor ${
                filter === "MY BALANCE" ? "text-green-500" : "text-textColor"
              } `}
              onClick={() => setFilter("MY BALANCE")}
            >
              MY BALANCE
            </p>
          </div>
        </div>
      </Link>

      <div className="py-3 bg-slate-200"></div>
      <Link to="/followers">
        <div className="flex py-5 ml-4 text-sm text-headingColor">
          <MdOutlineFollowTheSigns className="w-4 h-4" />
          <p className="ml-3 hover:text-green-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg">
            Followers
          </p>
        </div>
      </Link>

      <div className="py-3 bg-slate-200"></div>
      <Link to="/adverts">
        <div className="flex py-5 ml-4 text-sm text-headingColor">
          <FaServer className="w-4 h-4" />
          <p className="ml-3 hover:text-green-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg">
            My Adverts
          </p>
        </div>
      </Link>

      <div className="py-3 bg-slate-200"></div>
      <Link to="/feedback">
        <div className="flex py-5 ml-4 text-sm text-headingColor">
          <MdFeedback className="w-4 h-4" />
          <p className="ml-3 hover:text-green-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg">
            Feedback
          </p>
        </div>
      </Link>
      <div className="py-3 bg-slate-200"></div>
      <Link to="/manager">
        <div className="flex py-5 ml-4 text-sm text-headingColor">
          <MdOutlineAddIcCall className="w-4 h-4" />
          <p className="ml-3 hover:text-green-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg">
            Manager's call
          </p>
        </div>
      </Link>

      <div className="py-3 bg-slate-200"></div>
      <Link to="/contact">
        <div className=" flex  py-5 ml-4 text-sm text-headingColor">
          <AiFillQuestionCircle className="w-4 h-4" />
          <p className=" ml-3 hover:text-green-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg">
            Frequently asked questions
          </p>
        </div>
      </Link>
    </div>
  );
};

export default LeftSide;
