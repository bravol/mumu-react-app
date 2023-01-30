import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import house from "../images/house.jpg";
import car from "../images/car.jpg";
import others from "../images/others.jpg";

const Premium = () => {
  return (
    <div className="  w-full h-full max-h-full content-wrapper ">
      <div className=" ">
        <div className=" mt-20 ml-14 grid justify-center  ">
          <h1 className="flex flex-row text-xl font-semibold text-headingColor mb-8">
            Increase your sales with MUMU Premium Services!
          </h1>
          <h1 className="flex flex-row text-lg font-semibold text-textColor -ml-10">
            Choose the right category for your adverts and start selling faster
          </h1>
        </div>
        <div className="space-y-3  md:flex ml-4 mt-10 gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className=" bg-orange-400 h-40 rounded-lg w-96 flex gap-5"
          >
            <p className=" pt-10 ml-10 ">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={house}
                className="w-20 h-20 drop-shadow-xl cursor-pointer rounded-full bg-slate-300 bg-cover"
                alt="userprofile"
              />
            </p>
            <h1 className="flex items-center justify-center text-white text-lg font-semibold">
              BOOST SALES IN PROPERTY
            </h1>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className=" bg-green-500 h-40 rounded-lg w-96 flex gap-5"
          >
            <p className=" pt-10 ml-10 ">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={car}
                className="w-20 h-20 drop-shadow-xl cursor-pointer rounded-full bg-slate-300 bg-cover"
                alt="userprofile"
              />
            </p>
            <h1 className="flex items-center justify-center text-white text-lg font-semibold">
              BOOST SALES IN CARS
            </h1>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className=" bg-black h-40 rounded-lg w-96 flex gap-5"
          >
            <p className=" pt-10 ml-10 ">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={others}
                className="w-20 h-20 drop-shadow-xl cursor-pointer rounded-full bg-slate-300 bg-cover"
                alt="userprofile"
              />
            </p>
            <h1 className="flex items-center justify-center text-white text-lg font-semibold">
              BOOST SALES IN OTHERS
            </h1>
          </motion.div>
        </div>
        <div className="mt-10 flex items-center justify-center">
          <Link to="/gopremiums">
            <motion.button
              whileHover={{ scale: 1.05 }}
              type="button"
              className=" hover:bg-orange-500 px-32 py-3 rounded-md text-white text-lg font-semibold bg-orange-400 transition-all duration-100 ease-in-out "
            >
              How does it work ?
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Premium;
