import React from "react";
import LeftSide from "../components/LeftSide";
import { MdFeedback, MdOutlineSendToMobile } from "react-icons/md";
import { Link } from "react-router-dom";
import { RiFolderReceivedFill } from "react-icons/ri";
import image11 from "../images/image11.png";

const Feedback = () => {
  return (
    <div className=" relative w-full h-full py-5    ">
      <div className="mx-auto  mt-24 mb-5  ">
        <div className="w-full flex px-4 ">
          <LeftSide />
          <div className=" bg-white right mt-10 mr-12 rounded-md flex flex-col">
            <div className="flex my-8 pl-10">
              <p className="h font-semibold flex justify-between items-center text-2xl gap-2">
                <MdFeedback className=" text-green-500" />
                Feedback
              </p>
              <div className="flex items-center justify-center pl-80 ">
                <p className="advert  gap-1">
                  <RiFolderReceivedFill className=" text-xl" />
                  Received
                </p>
                <p className="search gap-1">
                  <MdOutlineSendToMobile className="text-xl" />
                  Sent
                </p>
              </div>
            </div>
            <hr />
            <div className=" m-10 flex items-center justify-center flex-col">
              <img className="b w-44 my-5" src={image11} />
              <p>There are no Feedback yet.</p>{" "}
              <p>Ask your customers leave feedback about you.</p>{" "}
              <p>Copy the link and send them.</p>
              <Link to="/feedbacking">
                <button className="font-semibold bg-green-600 text-white text-sm px-32 py-2 m-5 hover:bg-green-700 transition-all duration-100 ease-in-out">
                  Copy my Link
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
