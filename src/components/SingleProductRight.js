import React, { useState } from "react";
import "./../styles/SingleProduct.css";
import { Link, useParams } from "react-router-dom";
import { products } from "../utils/ProductsData";
import { AiOutlineWhatsApp } from "react-icons/ai";

import { BsFillChatLeftDotsFill, BsTelephoneFill } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";

import {
  MdFeedback,
  MdReport,
  MdReportProblem,
  MdSwapCalls,
} from "react-icons/md";
import { FcAdvertising, FcCallback } from "react-icons/fc";
import { RiAdvertisementFill } from "react-icons/ri";

import { motion } from "framer-motion";
import RequestModal from "./../dialogModels/RequestModal";
import Unavailable from "./../dialogModels/UnAvailable";
import Report from "./../dialogModels/Report";

const SingleProductRight = () => {
  const [showContacts, setShowContacts] = useState(false);
  let { id } = useParams();
  let singleProduct = products.find((item) => item.id === id);
  const showingContacts = () => {
    setShowContacts(true);
  };
  //RequestCall Back
  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false);

  //mark unavailable products
  const [showMyModalU, setShowMyModalU] = useState(false);
  const handleOnCloseU = () => setShowMyModalU(false);

  //report product dialog
  const [showMyModalR, setShowMyModalR] = useState(false);
  const handleOnCloseR = () => setShowMyModalR(false);

  return (
    <div className=" ml-2 ">
      <div className="b-advert-seller-block ">
        <p className="w font-bold">Market Price Here</p>
        <motion.button
          onClick={() => setShowMyModal(true)}
          whileHover={{ scale: 1.05 }}
          type="button"
          className="w-full py-2 px-5 bg-green-500 rounded-md text-white my-3 "
        >
          <div className="flex justify-between">
            <FcCallback className=" text-base lg:text-2xl" />
            <span>Request call back</span>
            <MdSwapCalls className=" text-2xl" />
          </div>
        </motion.button>
        <RequestModal visible={showMyModal} onClose={handleOnClose} />
      </div>
      <div className="b-advert-seller-block">
        <div className="b-alt-advert-price__container h-nowrap ">
          <strong style={{ fontWeight: "700" }}>Heading Here</strong>
        </div>
        <p className=" font-bold">Typically replies within few hours</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          type="button"
          className="border-2 ring-2 border-green-400 ring-green-400  rounded-md px-5 w-full py-2 text-green-300 font-bold my-3"
        >
          <div className="flex justify-between">
            <span>
              <BsTelephoneFill className=" text-2xl" />
            </span>
            <span disabled={showContacts} onClick={showingContacts}>
              {showContacts ? `${singleProduct.contact}` : `show contact`}
            </span>
            <span>
              <IoIosContact className=" text-2xl" />
            </span>
          </div>
        </motion.button>
        <Link to="https://api.whatsapp.com/send?phone`${singleProduct.contact}">
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="button"
            className="b-request-callback-button h-width-100p qa-request-to-callback fw-button qa-fw-button fw-button--type-success fw-button--size-medium fw-button--plain"
          >
            <div className="flex justify-between">
              <span>
                <AiOutlineWhatsApp className=" text-2xl" />
              </span>
              <span>WhatsApp Chat</span>
              <span>
                <BsFillChatLeftDotsFill className=" text-2xl" />
              </span>
            </div>
          </motion.button>
        </Link>
      </div>

      <div className="b-advert-seller-block">
        <Link to="/feedback">
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="button"
            className="b-request-callback-button h-width-100p qa-request-to-callback fw-button qa-fw-button fw-button--type-success fw-button--size-medium fw-button--plain"
          >
            <div className="flex justify-between">
              <span>
                <MdFeedback className=" text-base lg:text-2xl" />
              </span>
              <span className="text-base lg:text-lg">Feedback</span>
              <span className=" text-cyan-50">
                <p className="underline text-yellow-300 text-base lg:text-2xl">
                  view all
                </p>
              </span>
            </div>
          </motion.button>
        </Link>
      </div>
      <div className="b-advert-seller-block">
        <h3 className="font-bold flex items-center justify-center">
          Safety tips
        </h3>
        <div className="safety-tips md:text-sm lg:text-base ">
          <li> Remember, do not send any pre-payments</li>
          <li>Meet the seller at a safe public place</li>
          <li>Inspect the goods to make sure they meet your needs</li>
          <li>check all documentation and pay if you are satisfied</li>
        </div>
      </div>
      <div className="b-advert-seller-block">
        <motion.button
          onClick={() => setShowMyModalU(true)}
          whileHover={{ scale: 1.05 }}
          type="button"
          className="border-2 ring-2 border-green-400 ring-green-400  rounded-md px-5 w-full py-2 text-green-300 font-bold"
        >
          <span className=" font-bold">Mark Unavailable</span>
        </motion.button>
        <Unavailable visibleU={showMyModalU} onCloseU={handleOnCloseU} />

        <motion.button
          onClick={() => setShowMyModalR(true)}
          whileHover={{ scale: 1.05 }}
          type="button"
          className="border-2 ring-2 border-green-400 ring-green-400  rounded-md px-5 w-full py-2 text-green-300 font-bold mt-4"
        >
          <div className="flex justify-between">
            <MdReport className=" text-red-600 text-2xl" />
            <span className=" text-red-600 font-bold">Report Abuse</span>
            <MdReportProblem className=" text-red-600 text-2xl" />
          </div>
        </motion.button>
        <Report visibleR={showMyModalR} onCloseR={handleOnCloseR} />
      </div>
      <div className="b-advert-seller-block">
        <Link to="/posts">
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="button"
            className="b-request-callback-button h-width-100p qa-request-to-callback fw-button qa-fw-button fw-button--type-success fw-button--size-medium fw-button--plain"
          >
            <div className="flex justify-between">
              <RiAdvertisementFill className="text-2xl" />
              <span>POST AN ADVERT LIKE THIS</span>
              <FcAdvertising className="text-2xl" />
            </div>
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default SingleProductRight;
