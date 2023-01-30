import React from "react";
// import Subtotal from "./Subtotal"
import "../../styles/CheckOut.css";
import { useStateValue } from "../../stateProvider";
import CheckOutProduct from "./CheckOutProduct";
import NotFound from "../../images/NotFound.svg";
import { Link } from "react-router-dom";

function CheckOut() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <>
      <div className="checkout w-full">
        <div className="checkout__left">
          <div className=" ">
            <h3 className=" text-sm font-medium text-textColor">
              {" "}
              Hello, {user?.email}{" "}
            </h3>
            <h2 className="checkout__title font-bold text-headingColor text-base md:text-3xl uppercase -ml-2">
              Your Saved Items
            </h2>
            {basket && basket.length > 0 ? (
              basket.map((item, id) => (
                <CheckOutProduct
                  key={id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))
            ) : (
              <div className="w-full flex flex-col items-center justify-center ">
                <img
                  src={NotFound}
                  className="   mt-3 object-contain "
                  alt={""}
                />
                <p className=" text-base md:text-xl text-headingColor font-semibold my-2">
                  You dont have any saved Item
                </p>
                <Link to="/">
                  <p className=" w-full md:w-fit bg-orange-400 hover:bg-orange-500 cursor-pointer px-44 py-2 font-semibold text-white text-xl rounded-2xl">
                    GO SHOPPING
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
