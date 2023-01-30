import React from "react";
import "../../styles/Saved.css";
import LeftSide from "../../components/LeftSide";

import CheckOut from "./CheckOut";
import SideBar from "../sideBar/SideBar";

const Saved = () => {
  return (
    <div className="content-wrapper relative w-full h-full">
      <div className="mx-auto mt-24 mb-5">
        <div className="w-full flex px-4 ">
          <LeftSide />
          <CheckOut />
        </div>
      </div>
    </div>
  );
};

export default Saved;
