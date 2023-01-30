import React from "react";
import "../styles/Header.css";
import { FaServer } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import MUMU from "../images/mumu1.png";
import Avatar from "../images/avatar.png";
import { useStateValue } from "../stateProvider";
import { Link, useNavigate } from "react-router-dom";
import {
  MdMessage,
  MdOutlineFavorite,
  MdOutlineNotificationsNone,
} from "react-icons/md";
import { signOut } from "firebase/auth";
import { auth, db } from "./../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { AiTwotoneCrown } from "react-icons/ai";
import Input from "./Input";

const Header = () => {
  const navigate = useNavigate();
  const [{ user }] = useStateValue();

  const handleAuthentication = async () => {
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      isOnline: false,
    });
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="flex z-30 h-[65px] bg-[#00b53f]  fixed w-full items-center  ">
      <Link to="/" className=" max-w-[60px]  object-fill ">
        <img src={MUMU} alt="logo_image" />
      </Link>
      <div className="-mr-[10px]">
        <GoLocation className=" text-white text-xs md:text-sm" />
      </div>
      <div className="grid ml-3 mr-1 text-white">
        <span className="text-xs md:text-sm font-bold">Pick Address</span>
      </div>
      <div className=" flex-1 items-center hidden lg:block ">
        <Input />
      </div>

      <div className=" relative flex items-center justify-end mr-2 text-white space-x-1 md:space-x-2   ">
        <Link to={!user && "/login"} className="">
          <div className="grid md:grid-flow-col space-x-5 ml-1 ">
            <span className="hidden md:block text-sm ">
              <span className="hidden md:block">Hello </span>{" "}
              {!user ? "Customer" : user.email}
            </span>
            <span className="text-sm font-bold" onClick={handleAuthentication}>
              {user ? "SignOut" : "SignIn"}
            </span>
          </div>
        </Link>

        <Link to="/register">
          <p className="header-option">
            <span className="header-option2 mt-2">
              {!user ? " Register " : ""}
            </span>
          </p>
        </Link>

        {user && (
          <>
            <Link to="/saved" className="hidden md:block">
              <p className="group/item grid justify-items-center   ">
                <MdOutlineFavorite className="md:w-8 md:h-8 w-7 h-7 cursor-pointer rounded-full bg-slate-300 hover:scale-110 transition-all ease-out duration-200" />
                <p className=" absolute  bg-slate-400 px-2 py-1 rounded-md group/edit invisible group-hover/item:visible text-xs font-medium text-white mt-8 ">
                  My Favorites
                </p>
              </p>
            </Link>
            <Link to="/adverts" className="hidden md:block">
              <p className="group/item grid justify-items-center ">
                <FaServer className="md:w-8 md:h-8 w-7 h-7 cursor-pointer rounded-full bg-slate-300 hover:scale-110 transition-all ease-out duration-200" />
                <p className=" absolute  bg-slate-400 px-2 py-1 rounded-md group/edit invisible group-hover/item:visible text-xs font-medium text-white mt-8 ">
                  My Posts
                </p>
              </p>
            </Link>
            <Link to="/chatpage">
              <p className="group/item grid justify-items-center  ">
                <MdMessage className="md:w-8 md:h-8 w-7 h-7  cursor-pointer rounded-full bg-slate-300 hover:scale-110 transition-all ease-out duration-200" />
                <p className=" absolute grid-cols-1  bg-slate-400 px-2 py-1 rounded-md group/edit invisible group-hover/item:visible text-xs font-medium text-white mt-8 ">
                  My Messages
                </p>
              </p>
            </Link>
            <Link to="/notifications">
              <p className="group/item grid justify-items-center ">
                <MdOutlineNotificationsNone className="md:w-8 md:h-8 w-7 h-7  cursor-pointer rounded-full bg-slate-300 hover:scale-110 transition-all ease-out duration-200" />
                <p className=" absolute  bg-slate-400 px-2 py-1 rounded-md group/edit invisible group-hover/item:visible text-xs font-medium text-white mt-8 ">
                  Notifications
                </p>
              </p>
            </Link>

            <Link to="/premium">
              <p
                style={{ color: "#ffd700" }}
                className="group/item grid justify-items-center "
              >
                <AiTwotoneCrown className="md:w-8 md:h-8 w-7 h-7  cursor-pointer rounded-full bg-slate-300 hover:scale-110 transition-all ease-out duration-200" />
                <p className=" absolute  bg-slate-400 px-2 py-1 rounded-md group/edit invisible group-hover/item:visible text-xs font-medium text-white mt-8 ">
                  Premium Services
                </p>
              </p>
            </Link>

            <Link className="md:w-10 md:h-10 w-8 h-8 shrink-0">
              <span className="group/item grid lg:justify-items-start md:justify-items-center justify-items-end ">
                <img
                  src={Avatar}
                  className="  cursor-pointer rounded-full bg-slate-300 shrink-0 hover:scale-110 transition-all ease-out duration-200"
                  alt={"hello"}
                />
                <div className="absolute group/edit hidden group-hover/item:block rounded-md w-fit h-fit py-1  bg-white mt-8  ">
                  <ul className=" grid grid-cols-2 md:grid-cols-1 text-sm md:text-base cursor-pointer   ">
                    <Link to="myshop">
                      <li className=" px-4 py-2 flex items-center  hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor rounded-2xl   ">
                        My Account
                      </li>
                    </Link>

                    <Link to="/saved">
                      <li className=" px-4 py-2 flex items-center md:hidden  hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor rounded-2xl   ">
                        My Favorites
                      </li>
                    </Link>

                    <Link to="/adverts">
                      <li className=" md:hidden px-4 py-2 flex items-center  hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor rounded-2xl   ">
                        My Posts
                      </li>
                    </Link>

                    <Link to="myBalance">
                      <li className=" px-4 py-2 flex items-center  hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor rounded-2xl ">
                        My Balance
                      </li>
                    </Link>

                    <Link to="feedback">
                      <li className=" pl-4 pr-20 py-2 flex items-center  hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor rounded-2xl ">
                        Feedback
                      </li>
                    </Link>

                    <Link to="performance">
                      <li className=" px-4 py-2 flex items-center  hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor rounded-2xl">
                        Performance
                      </li>
                    </Link>

                    <Link to="settings">
                      <li className=" px-4 py-2 flex items-center gap-3 hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor rounded-2xl ">
                        Settings
                      </li>
                    </Link>
                  </ul>
                </div>
              </span>
            </Link>
          </>
        )}

        <Link to="/posts">
          <button className="bg bg-yellow-500 md:px-6 px-2  py-1 rounded font-semibold text-sm md:text-base lg:text-xl hover:scale-110 transition-all ease-out duration-200">
            SELL
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
