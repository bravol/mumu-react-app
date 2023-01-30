import React from "react";
import { Link } from "react-router-dom";
import "../styles/messages.css";

const NavBar = () => {
  return (
    <nav className=" pt-24 pl-10  ">
      <div>
        <Link
          to="/chatpage"
          className=" bg-orange-400 px-5 py-2 rounded-xl text-white font-medium text-sm hover:bg-orange-500 transition-all duration-100 ease-in-out"
        >
          Chats
        </Link>
        <Link
          to="/profile"
          className=" bg-orange-400 px-5 py-2 rounded-xl text-white font-medium text-sm hover:bg-orange-500 transition-all duration-100 ease-in-out"
        >
          My Profile
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
