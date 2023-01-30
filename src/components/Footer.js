import React from "react";
import "../styles/globalStyles.css";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaFacebookMessenger, FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 @MUMU APP All rights reserved</p>
      <p className="icons">
        <motion.p whileTap={{ scale: 0.6 }}>
          <AiFillInstagram />
        </motion.p>
        <motion.p whileTap={{ scale: 0.6 }}>
          <AiOutlineTwitter />
        </motion.p>
        <motion.p whileTap={{ scale: 0.6 }}>
          <AiOutlineWhatsApp />
        </motion.p>
        <motion.p whileTap={{ scale: 0.6 }}>
          <BsFacebook />
        </motion.p>
        <motion.p whileTap={{ scale: 0.6 }}>
          <FaFacebookMessenger />
        </motion.p>
        <motion.p whileTap={{ scale: 0.6 }}>
          <FaTelegram style={{ style: " #6CC1E3" }} />
        </motion.p>
        <motion.p whileTap={{ scale: 0.6 }}>
          <AiOutlineLinkedin />
        </motion.p>
      </p>
    </div>
  );
};

export default Footer;
