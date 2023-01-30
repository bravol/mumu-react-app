import React from "react";
import { BsEmojiNeutral, BsEmojiSmile } from "react-icons/bs";
import { FaRegSadCry } from "react-icons/fa";
import { motion } from "framer-motion";
import image11 from "../images/image11.png";

const Feedbacking = () => {
  return (
    <div className="flex mt-32">
      <div className=" bg-white w-3/5 h-max m-10 rounded-md">
        <div>
          <p className="b text-xl font-bold text-headingColor pt-8 pl-5">
            Leave a feedback for{" "}
            <span className="t text-green-500 underline font-extrabold">
              Lumala Brian
            </span>
          </p>
        </div>
        <div>
          <p className="flex items-center justify-center text-xl mt-10">
            How was your experience?
          </p>
        </div>
        <div className="flex items-center justify-center space-x-5 my-5">
          <button className="flex gap-2 bg-green-600 px-3 py-2 text-white font-bold rounded-md  hover:bg-green-700 transition-all duration-100 ease-in-out">
            <span>
              <BsEmojiSmile />
            </span>
            Postive
          </button>
          <button className="flex gap-2 bg-orange-600 px-3 py-2 text-white font-bold rounded-md  hover:bg-orange-700 transition-all duration-100 ease-in-out">
            <span>
              <BsEmojiNeutral />
            </span>
            Neutral
          </button>
          <button className="flex gap-2 bg-red-600 px-3 py-2 text-white font-bold rounded-md hover:bg-red-700 transition-all duration-100 ease-in-out">
            <span>
              <FaRegSadCry />
            </span>
            Negative
          </button>
        </div>
        <div className=" mb-5 flex items-center justify-center  ">
          <select className=" outline-none w-2/5  text-base border-2 border-gray-200 p-2 rounded-md cursor-pointer space-y-4">
            <option value="other" className="bg-white">
              Select a suitable answer
            </option>

            <option
              className="text-base border-0 outline-none capitalize bg-white text-headingColor"
              value=""
            >
              Successful Purchase
            </option>
            <option
              className="text-base border-0 outline-none capitalize bg-white text-headingColor"
              value=""
            >
              The deal failed
            </option>
            <option
              className="text-base border-0 outline-none capitalize bg-white text-headingColor"
              value=""
            >
              You did not come to a deal
            </option>
            <option
              className="text-base border-0 outline-none capitalize bg-white text-headingColor"
              value=""
            >
              I cannot reach to the seller in time
            </option>
          </select>
        </div>
        <div className="flex items-center justify-center mb-10">
          <textarea
            className="border-2 outline-none w-2/5 h-44 rounded-md  "
            placeholder="Please write a detailed feedback"
            type="text"
          />
        </div>
        <div className="flex items-center justify-center pb-10">
          <motion.button
            whileHover={{ scale: 1.03 }}
            className=" bg-orange-500 w-2/5 py-2 rounded-md text-white font-semibold hover:bg-orange-600 drop-shadow-md "
          >
            Send Feedback
          </motion.button>
        </div>
      </div>
      <div className=" bg-white w-2/6  m-10 h-fit rounded-md text-textColor font-semibold">
        <div className="m-10">
          <p>
            Your feedback is very important for the seller review. Please, leave
            the honest review to help other buyers and the seller in the
            customer attraction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feedbacking;
