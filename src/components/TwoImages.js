import React from "react";
import Women from "../images/people1.png";
import Man from "../images/people2.png";
import Input from "./Input";
const TwoImages = () => {
  return (
    <div>
      <div className="flex items-center justify-between -mt-[20rem] -mb-[5rem] ">
        <img
          src={Man}
          className=" hidden lg:block h-420  -ml-[14rem] -mt-[3rem] contrast-100 brightness-95 drop-shadow-lg object-contain"
          alt={""}
        />

        <img
          src={Women}
          className=" hidden lg:block h-420 w-508 mt-[3rem]  -mr-5 contrast-100 brightness-95 drop-shadow-lg object-contain "
          alt={""}
        />
      </div>
    </div>
  );
};

export default TwoImages;
