import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Nav.css";
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const Nav = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="">
      <motion.nav
        animate={show ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <motion.div className="inner-nav">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
          </ul>
        </motion.div>
      </motion.nav>
      <motion.button
        className="toggle "
        onClick={() => setShow((show) => !show)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        btn Toggle
      </motion.button>
    </div>
  );
};

export default Nav;
