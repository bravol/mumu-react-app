import React from "react";
import "../../styles/CheckOutProduct.css";
import { useStateValue } from "../../stateProvider";
import { MdLocationPin } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "../../utils/ProductsData";
import { useState } from "react";

function CheckOutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const [showContact, setShowContact] = useState(false);

  let singleProduct = products.find((item) => item.id === id);

  const showingContact = () => {
    setShowContact(true);
  };

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="group/item hover:bg-green-300 grid rounded-lg pb-3 pr-3 border-2 border-green-400 mb-4"
      >
        <div className="flex  ">
          <img className="checkoutProduct__image mt-2" src={image} />
          <div className="grid">
            <p className="checkoutProduct__title mt-2 text-sm md:text-base text-textColor font-bold">
              {title}
            </p>
            <p className=" text-xl md:text-3xl ">
              <small className=" font-bold mr-2">$</small>
              <strong>{price}</strong>
            </p>
            <div className="flex  flex-1 items-center justify-center w-max ">
              <h2 className="my-1 text-xs bg-green-400 mr-28 p-1 rounded-md w-fit text-white font-medium">
                {singleProduct.condition}
              </h2>

              <h2 className=" mb-2 text-xs flex gap-1 text-textColor font-semibold -ml-28 lg:ml-0 flex-wrap">
                <span>
                  <MdLocationPin />
                </span>
                {singleProduct.location}
              </h2>
            </div>
          </div>
        </div>

        <div className="checkoutProduct__info">
          <div className=" lg:flex lg:gap-6 ">
            {!hideButton && (
              <button
                onClick={removeFromBasket}
                className=" w-full lg:w-fit bg-orange-500  mt-2 px-2 py-2 md:px-3 md:py-2 rounded-xl text-white hover:shadow-md"
              >
                <p className="text-sm font-semibold md:text-base">
                  Remove from Saved
                </p>
              </button>
            )}
            <span className=" group/buttons invisible group-hover/item:visible flex space-x-4 mt-2 ">
              <Link to="/chatpage">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="w-full bg-gray-200 px-8 py-2 rounded-xl text-green-600 hover:shadow-md"
                >
                  <p className="text-sm font-semibold md:text-base"> Chat</p>
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className=" w-full bg-orange-500 px-3 py-2 md:px-3 md:py-2 rounded-xl text-white hover:shadow-md"
                onClick={showingContact}
                disabled={showContact}
              >
                <p className=" text-sm font-semibold md:text-base">
                  {showContact ? `${singleProduct.contact}` : `show Phone`}
                </p>
              </motion.button>
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default CheckOutProduct;
