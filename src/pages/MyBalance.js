import React from "react";
import LeftSide from "../components/LeftSide";

import { MdHistory, MdStayCurrentPortrait } from "react-icons/md";
import { Link } from "react-router-dom";

const MyBalance = () => {
  return (
    <div className=" relative w-full h-full py-5 ">
      <div className="mx-auto mt-24  ">
        <div className="w-full flex px-4">
          <LeftSide />
          <div className=" bg-white right mt-10 ml-12 rounded-md flex flex-col mr-10 ">
            <div className="flex my-8 pl-10">
              <p className="h font-semibold flex justify-between items-center text-2xl">
                My Balance
              </p>
              <div className="flex items-center justify-center pl-80 ">
                <p className="advert  gap-1">
                  <MdStayCurrentPortrait className=" text-xl" />
                  Current
                </p>
                <p className="search gap-1">
                  <MdHistory className="text-xl" />
                  History
                </p>
              </div>
            </div>
            <hr />
            <div className="flex justify-between">
              <p className="m-4 bg-orange-200 px-10 py-5 text-2xl rounded-xl font-semibold">
                Ush: 0
              </p>
              <button
                type="button"
                className="m-4 bg-orange-500 py-3 px-12 items-center justify-center flex rounded-xl text-white hover:bg-orange-300"
              >
                Recharge
              </button>
            </div>
            <div className="flex items-center  justify-center flex-col mt-32 mb-72 gap-2 text-lg ">
              <p className="t text-headingColor">Want to sell faster?</p>
              <Link to="/premium">
                <button className=" text-green-300">
                  Subscribe to Boost Plan
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBalance;
