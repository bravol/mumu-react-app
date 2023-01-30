import React, { useState } from "react";
import "../styles/SingleProduct.css";
import { Link, useParams } from "react-router-dom";
import { products } from "../utils/ProductsData";
import {
  AiFillInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";

import {
  BsFacebook,
  BsFillChatLeftDotsFill,
  BsTelephoneFill,
} from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import { FaFacebookMessenger } from "react-icons/fa";

import {
  MdFeedback,
  MdReport,
  MdReportProblem,
  MdSwapCalls,
} from "react-icons/md";
import { FcAdvertising, FcCallback } from "react-icons/fc";
import { RiAdvertisementFill } from "react-icons/ri";
import { TbBrandTelegram } from "react-icons/tb";
import { motion } from "framer-motion";
import RequestModal from "../dialogModels/RequestModal";
import MakeOffer from "../dialogModels/MakeOffer";
import Unavailable from "./../dialogModels/UnAvailable";
import Report from "./../dialogModels/Report";
const SingleProductLeft = () => {
  const [showContact, setShowContact] = useState(false);

  //request call back
  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false);

  //Make an Offer
  const [showMyModalM, setShowMyModalM] = useState(false);
  const handleOnCloseM = () => setShowMyModalM(false);

  //mark unavailable products
  const [showMyModalU, setShowMyModalU] = useState(false);
  const handleOnCloseU = () => setShowMyModalU(false);

  //report product dialog
  const [showMyModalR, setShowMyModalR] = useState(false);
  const handleOnCloseR = () => setShowMyModalR(false);

  let { id } = useParams();
  let singleProduct = products.find((item) => item.id === id);

  const showingContact = () => {
    setShowContact(true);
  };
  return (
    <div className="single-product-container ">
      <div>
        <div className="single-product-title text-sm">
          {singleProduct.title}
        </div>
        <div className="single-product-image">
          <img src={singleProduct.image} alt="" />
        </div>
        <div className="related-single-product-image">
          Other images of the same product to be posted here
        </div>

        <div className="single-product-info text-[13px] md:text-sm lg:text-base ">
          <div className="single-product-rating pt-3">
            <p className=" text-sm md:text-base xl:text-lg">Rating</p>
            {Array(singleProduct.rating)
              .fill()
              .map((_, index) => (
                <p key={index}>⭐</p>
              ))}
          </div>
          <p className="single-product-price text-xl md:text-2xl font-extrabold">
            Price: <strong>$</strong>
            <strong>{singleProduct.price}</strong>
          </p>
          <div className="single-product-specification  ">
            <h4 className=" text-sm md:text-base xl:text-lg font-bold pb-3">
              Specification
            </h4>
            {singleProduct.specification &&
              singleProduct.specification.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </div>
          <div className="single-product-description">
            <h4 className=" text-sm font-bold md:text-base xl:text-lg pb-3">
              Product Description
            </h4>
            <p> {singleProduct.detail} </p>
          </div>
        </div>
        <div className="px-3 ">
          <hr />
          <div className="xl:flex gap-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              type="button"
              className="border-2 ring-2 border-green-400 ring-green-400  rounded-md px-5 w-full py-2 text-green-300 font-bold my-3"
            >
              <div className="flex justify-between">
                <span>
                  <BsTelephoneFill className=" text-lg md:text-2xl" />
                </span>
                <span
                  className=" text-sm md:text-base"
                  disabled={showContact}
                  onClick={showingContact}
                >
                  {showContact ? `${singleProduct.contact}` : `show contact`}
                </span>
                <span>
                  <IoIosContact className="  text-lg md:text-2xl" />
                </span>
              </div>
            </motion.button>

            <hr />
            <motion.button
              onClick={() => setShowMyModal(true)}
              whileHover={{ scale: 1.05 }}
              type="button"
              className="w-full py-2 px-5 bg-green-500 rounded-md text-white mb-3 md:hidden"
            >
              <div className="flex justify-between">
                <FcCallback className=" text-lg md:text-2xl" />
                <span className=" text-sm md:text-base">Request call back</span>
                <MdSwapCalls className="  text-lg md:text-2xl" />
              </div>
            </motion.button>
            <RequestModal visible={showMyModal} onClose={handleOnClose} />
            <hr />
            <Link to="/chatpage">
              <motion.button
                whileHover={{ scale: 1.05 }}
                type="button"
                className=" md:hidden w-full py-2 px-5 bg-green-500 rounded-md text-white"
              >
                <div className="flex justify-between gap-1 w-full">
                  <span>
                    <AiOutlineWhatsApp className="  text-lg md:text-2xl" />
                  </span>
                  <span className=" text-sm md:text-base">WhatsApp Chat</span>
                  <span>
                    <BsFillChatLeftDotsFill className="  text-lg md:text-2xl" />
                  </span>
                </div>
              </motion.button>
            </Link>

            <hr />
            <div className="b-advert-seller-block md:hidden">
              <h3 className="font-bold flex items-center justify-center text-sm md:text-base ">
                Safety tips
              </h3>
              <div className="safety-tips text-xs sm:text-sm md:text-base">
                <li> Remember, do not send any pre-payments</li>
                <li>Meet the seller at a safe public place</li>
                <li>Inspect the goods to make sure they meet your needs</li>
                <li>check all documentation and pay if you are satisfied</li>
              </div>
            </div>
            <hr />
            <Link to="/feedback" className=" md:hidden">
              <motion.button
                whileHover={{ scale: 1.05 }}
                type="button"
                className=" md:hidden w-full py-2 px-5 bg-green-500 rounded-md text-white"
              >
                <div className="flex justify-between">
                  <span>
                    <MdFeedback className=" text-sm  md:text-2xl" />
                  </span>
                  <span className=" text-sm md:text-base">Feedback</span>
                  <span className=" text-cyan-50">
                    <p className="underline text-yellow-300 text-sm md:text-base">
                      view all
                    </p>
                  </span>
                </div>
              </motion.button>
            </Link>

            <hr />

            <motion.button
              onClick={() => setShowMyModalM(true)}
              whileHover={{ scale: 1.05 }}
              type="button"
              className="  w-full py-2 px-5 bg-green-500 rounded-md text-white my-3"
            >
              <div className=" text-sm md:text-base">
                <p>Make an Offer</p>
              </div>
            </motion.button>
          </div>
          <MakeOffer visibleM={showMyModalM} onCloseM={handleOnCloseM} />
          <hr />
          <div className="md:hidden b-advert-seller-block flex items-center justify-center gap-3">
            <motion.button
              onClick={() => setShowMyModalU(true)}
              whileHover={{ scale: 1.05 }}
              type="button"
              className=" border-2 ring-2 border-green-400 ring-green-400  rounded-md px-5 w-full py-2 text-green-300 font-bold "
            >
              <span className=" font-bold text-sm md:text-base">
                Mark unavailable
              </span>
            </motion.button>
            <Unavailable visibleU={showMyModalU} onCloseU={handleOnCloseU} />

            <motion.button
              onClick={() => setShowMyModalR(true)}
              whileHover={{ scale: 1.05 }}
              type="button"
              className=" border-2 ring-2 border-green-400 ring-green-400  rounded-md px-5 w-full py-2  font-bold"
            >
              <div className="flex justify-between">
                <MdReport className=" text-red-600 text-lg md:text-2xl " />
                <span className=" text-red-600 text-sm font-bold md:text-base">
                  Report Abuse
                </span>
                <MdReportProblem className=" text-red-600 text-lg md:text-2xl" />
              </div>
            </motion.button>
            <Report visibleR={showMyModalR} onCloseR={handleOnCloseR} />
          </div>

          <div className="md:hidden b-advert-seller-block ">
            <Link to="/posts">
              <motion.button
                whileHover={{ scale: 1.05 }}
                type="button"
                className=" bg-gray-300 rounded-2xl px-5 w-full py-2 text-white font-bold"
              >
                <div className="flex justify-between">
                  <RiAdvertisementFill className=" text-lg md:text-2xl" />
                  <span>POST AN ADVERT LIKE THIS</span>
                  <FcAdvertising className=" text-lg md:text-2xl" />
                </div>
              </motion.button>
            </Link>
          </div>

          <div className="icons">
            <motion.p whileTap={{ scale: 0.6 }}>
              <AiFillInstagram style={{ color: "#E1306C" }} />
            </motion.p>
            <motion.p whileTap={{ scale: 0.6 }}>
              <AiOutlineTwitter style={{ color: "#1DA1F2" }} />
            </motion.p>
            <motion.p whileTap={{ scale: 0.6 }}>
              <AiOutlineWhatsApp style={{ color: "#25D366" }} />
            </motion.p>
            <motion.p whileTap={{ scale: 0.6 }}>
              <BsFacebook style={{ color: "#1877F2" }} />
            </motion.p>
            <motion.p whileTap={{ scale: 0.6 }}>
              <FaFacebookMessenger style={{ color: "#00c6ff" }} />
            </motion.p>
            <motion.p whileTap={{ scale: 0.6 }}>
              <TbBrandTelegram style={{ style: " #6CC1E3" }} />
            </motion.p>
            <motion.p whileTap={{ scale: 0.6 }}>
              <AiOutlineLinkedin style={{ color: "#0077B5" }} />
            </motion.p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default SingleProductLeft;
