import React from "react";
import { headerItems, products } from "../utils/ProductsData";
import Banner1 from "../BannerImages/Banner1.jpg";

import Banner3 from "../BannerImages/Banner3.jpg";
import Banner4 from "../BannerImages/Banner4.jpg";
import Banner5 from "../BannerImages/Banner5.jpg";
import Banner6 from "../BannerImages/Banner6.jpg";
import Slider from "../components/slider/Slider";
import Product from "./../components/Product";
import BackToTop from "./../components/BackToTop";
import TwoImages from "../components/TwoImages";
// import SideBar from "./sideBar/SideBar";
import Headings from "./../components/Headings";
import Input from "./../components/Input";

const Home = () => {
  const bannerImages = [Banner1, Banner3, Banner4, Banner5, Banner6];
  return (
    <div className="w-full ">
      <div className="flex items-center justify-between">
        <Headings />
      </div>

      <div className=" -mt-[217px] sm:-mt-[190px] md:-mt-[70px] z-10  ">
        <Slider images={bannerImages} />
      </div>
      <div className="lg:hidden">
        <Input />
      </div>
      <div>
        <TwoImages />
      </div>
      <div className="mx-1 sm:mx-2 md:mx-3 gap-2 md:gap-3 lg:gap-4 xl:gap-5 grid grid-cols-2 overflow-auto md:overflow-hidden md:grid-cols-3 lg:grid-cols-4 mt-[25rem] lg:-mt-[2rem]  ">
        {products.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image={item.image}
            specification={item.specification}
            detail={item.detail}
          />
        ))}
      </div>
      <div style={{ marginTop: "48px" }}>
        <BackToTop />
      </div>
    </div>
  );
};

export default Home;
