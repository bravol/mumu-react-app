import React from "react";
import LeftSide from "../components/LeftSide";

const Notifications = () => {
  return (
    <div className="content-wrapper relative w-full h-full">
      <div className="mx-auto  mt-24 mb-5">
        <div className="w-full flex px-4 ">
          <LeftSide />
          <div className=" bg-white right mt-10 ml-12 rounded-md flex flex-col">
            <div className="flex my-8 pl-10">
              adverts posted by sellers according to your favourate will go here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
