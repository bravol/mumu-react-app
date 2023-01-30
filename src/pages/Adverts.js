import React from "react";
import LeftSide from "../components/LeftSide";
import "../styles/Adverts.css";

import { AiFillFire } from "react-icons/ai";
import NotFound from "../images/NotFound.svg";

import { BiRevision } from "react-icons/bi";
import { RiDraftFill } from "react-icons/ri";
import { HiLockClosed } from "react-icons/hi";
import { BsCheckAll } from "react-icons/bs";
import { VscFolderActive } from "react-icons/vsc";

const Adverts = () => {
  return (
    <div className="content-wrapper relative w-full h-full  ">
      <div className="mx-auto  mt-24 mb-5">
        <div className="w-full flex px-4 ">
          <LeftSide />
          <div className=" bg-white right mt-10 ml-12 rounded-md flex flex-col">
            <div className="flex my-8 pl-10">
              <div className="flex ">
                <p className="advert gap-1">
                  <VscFolderActive />
                  Adverts (0)
                </p>
              </div>
              <div className="flex">
                <p className="searchi text-orange-500 gap-1 ">
                  <span>
                    <BiRevision />
                  </span>
                  Reviewing (0)
                </p>
                <p className="searchi text-red-600 gap-1">
                  <span>
                    <AiFillFire />
                  </span>
                  Declined (0)
                </p>
                <p className="searchi text-black gap-1">
                  <span>
                    <RiDraftFill />
                  </span>
                  Draft (0)
                </p>
                <p className="searchi text-gray-400 gap-1">
                  <span>
                    {" "}
                    <HiLockClosed />{" "}
                  </span>
                  Closed (0)
                </p>
                <p className="searchi gap-1 text-gray-400">
                  <span>
                    {" "}
                    <BsCheckAll />{" "}
                  </span>
                  All (0)
                </p>
              </div>
            </div>
            <hr />
            <div className="flex flex-col items-center justify-center">
              <img src={NotFound} className="h-340" />
              <p className="text-xl text-headingColor font-semibold my-2">
                There are no adverts yet
              </p>
              <p className="text-xl text-headingColor font-semibold my-2">
                Create a new one now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adverts;
