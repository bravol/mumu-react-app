import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useStateValue } from "./../stateProvider";

const Product = ({
  id,
  title,
  image,
  price,
  rating,
  specification,
  details,
}) => {
  const [{ basket }, dispatch] = useStateValue();
  const [saving, setSaving] = useState(false);

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    setSaving(true);
  };
  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className=" flex flex-col items-center max-h-[400px] min-w-[100px]   p-4 w-full bg-white rounded-md z-20 relative ">
      <Link to={`/product/${id}`}>
        <img
          className="  max-w-full marker: max-h-[200px] object-cover "
          src={image}
          alt=""
        />
      </Link>

      <div className="h-[50px] sm:h-[60px] md:h-[80px] lg:min-h-[100px]  my-1 md:mt-[15px] ">
        <Link
          to={`/product/${id}`}
          className=" text-black text-sm md:text-lg lg:text-xl font-bold"
        >
          <p>{truncateString(title, 25)}</p>
        </Link>
        <p className="mt-[5px]">
          <strong>$</strong>
          <strong>{price}</strong>
        </p>

        <button
          onClick={addToBasket}
          disabled={saving}
          className=" bg-orange-500  px-3 md:px-5 py-1 md:py-2 mb-2 mr-2 absolute bottom-0 right-0  rounded-md md:rounded-xl text-white hover:shadow-md hover:bg-orange-400 transition-all duration-100 ease-in-out font-bold text-xs md:text-sm"
        >
          {saving ? "saved" : "Save"}
        </button>
      </div>
    </div>
  );
};

export default Product;
