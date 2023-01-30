import React from "react";
import Avatar2 from "../images/avatar2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import { Link } from "react-router-dom";

const MakeMoney = () => {
  return (
    <div className=" bg-white pb-10 h-fit ">
      <div className="pt-20 ml-52 flex">
        <span>
          <p className="text-4xl font-semibold text-headingColor ">
            Short on money?
          </p>
          <p className="text-4xl font-semibold text-headingColor mt-3">
            We know how to fix it.
          </p>
          <p className="text-xl ">
            There’re a couple of ways to{" "}
            <span className=" bg-orange-300">make money</span>
          </p>
          <p className="text-xl ">
            <span className=" bg-orange-300">with Jiji</span> and provide for
            your family.
          </p>
        </span>

        <img
          whileHover={{ scale: 1.05 }}
          src={Avatar2}
          className="w-52 h-52  bg-slate-300 bg-cover"
          alt="userprofile"
        />
      </div>
      <div className="pt-20 ml-64 flex">
        <img className="w-56 h-56" src={image3} />

        <span className="flex flex-col ml-10 mr-80">
          <p className="text-4xl font-semibold text-headingColor pb-5">
            Sell things you don't use anymore
          </p>
          <p className="text-xl">
            Take a careful look around! Old phone, a guitar you never play,
            fancy chair or jewelry you can{" "}
            <span className=" bg-orange-300">sell anything</span> on Jiji to
            real people around you.
          </p>
          <p className="text-xl">
            Buyers tend to buy used items in difficult times because it's
            cheaper. Now you have more opportunities of{" "}
            <span className="b bg-orange-300">turning things into cash</span>!
          </p>
          <span className="flex items-end justify-end space-x-4">
            <Link to="/howToSell">
              <button className="b bg-orange-500 hover:bg-orange-600 transition-all duration-100 ease-in-out text-white px-7 py-2 rounded-md font-medium">
                How to sell on MUMU
              </button>
            </Link>

            <Link to="/posts">
              <button className=" hover:bg-green-600 transition-all duration-100 ease-in-out bg-green-500 px-5 py-2 rounded-md text-white font-medium">
                Sell
              </button>
            </Link>
          </span>
        </span>
      </div>
      <div className="pt-20 ml-64 flex mr-80">
        <div>
          <p className="text-4xl font-semibold text-headingColor pb-5 mr-5">
            Offer your service to your people
          </p>
          <p className="text-xl mr-5 ">
            Think of your strongest skills that could be useful to someone else;
            perhaps you can sew, drive a truck, tutor kids, or anything else.
          </p>
          <p className="text-xl mr-5">
            Post an advert in Services and get paid for your skills !
          </p>
          <span className="flex items-end justify-end space-x-4 mt-10 -mr-52">
            <Link to="/howToSell">
              <button className=" bg-orange-500 hover:bg-orange-600 duration-100 transition-all ease-in-out text-white px-7 py-2 rounded-md font-medium">
                How to sell on MUMU
              </button>
            </Link>

            <Link to="/posts">
              <button className="b bg-green-500 px-5 py-2 rounded-md text-white font-medium hover:bg-green-600 transition-all duration-100 ease-in-out">
                Post an advert
              </button>
            </Link>
          </span>
        </div>

        <img className="w-56 h-56 pb-8" src={image4} />
      </div>
    </div>
  );
};

export default MakeMoney;
