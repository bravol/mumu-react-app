import React from "react";
import LeftSide from "../components/LeftSide";

import { Link } from "react-router-dom";

import { FcSalesPerformance } from "react-icons/fc";

const Performance = () => {
  return (
    <div className=" relative w-full h-full py-5  ">
      <div className="mx-auto mt-24 pb-5">
        <div className="w-full flex px-4">
          <LeftSide />
          <div className=" bg-white right mt-10 ml-12 rounded-md flex flex-col">
            <div className="flex my-8 pl-10">
              <p className=" font-semibold flex justify-between items-center text-3xl gap-2">
                <FcSalesPerformance className=" text-green-500" />
                My Performance
              </p>
            </div>
            <hr />
            <div className=" m-10 flex items-center justify-center flex-col">
              <p>You have not performed yet for the last months.</p>{" "}
              <p>Post adverts to sell anything to people.</p>{" "}
              <Link to="/posts">
                <button className="font-semibold bg-green-600 text-white text-sm px-32 py-2 m-5 hover:bg-green-700 transition-all duration-100 ease-in-out">
                  POST AN ADVERT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
