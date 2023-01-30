import React from "react";
import image12 from "../../images/image12.png";
import { motion } from "framer-motion";
import image13 from "../../images/image13.png";
import { Link } from "react-router-dom";
import v84 from "../../images/v84.png";
import samsung from "../../images/samsung1.png";
import royce from "../../images/royce1.png";
const Gopremium = () => {
  return (
    <div className="relative w-full h-full py-5 bg-white">
      <div className=" mt-24">
        <p className=" flex items-center justify-center font-bold text-4xl">
          How do Premium Services work?
        </p>
        <div className="flex items-center justify-center my-10 mx-80 ">
          <img className="w-56 h-56 drop-shadow-xl" src={image12} />
          <div className="ml-10 ">
            <p className=" text-textColor text-lg font-medium mb-5 leading-7">
              Premium services are the promotion tools for the sellers which
              help to advertise the items as much as possible in the particular
              category, to sell all the goods faster and get in several times
              more clients.
            </p>
            <p className=" text-headingColor text-lg font-extrabold">
              Step up your sales with Premium Services and make money easier!
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              className=" mt-5 bg-green-500 px-20 py-3 rounded-2xl text-xl font-bold text-white hover:bg-green-600 transition-all duration-100 ease-in-out"
            >
              REQUEST MANAGER'S CALL
            </motion.button>
          </div>
        </div>
      </div>

      <div className=" bg-black w-full h-44"></div>
      <div className="flex items-center justify-center -mt-48 space-x-28">
        <div className=" bg-yellow-400 w-80  p-4 ml-10 h-225 rounded-3xl">
          <p className=" underline mb-5 flex items-center justify-center text-white font-semibold text-lg">
            TOP ADS PROMO
          </p>

          <p className=" text-white  mb-4">
            TOP package is the best choice if you want to push certain ads to
            the top of page and get 15x clients.
          </p>
          <p className=" text-white font-semibold ">
            Recommended for sellers with up to 5 adverts.
          </p>
        </div>
        <div className=" bg-green-400 w-80 p-4 ml-10 h-fit rounded-3xl">
          <p className=" underline mb-5 flex items-center justify-center text-white font-semibold text-lg">
            BOOST PLANS
          </p>

          <p className=" text-white  mb-4">
            Boost Plan is a great solution to promote all your ads for more than
            a month
          </p>
          <p className=" text-white font-semibold ">
            Recommended for sellers with more than 5 adverts.
          </p>
        </div>
      </div>
      <div className="flex m-10 h-screen w-fit  ">
        <div>
          <img src={image13} />
        </div>

        <div className=" rounded-full bg-orange-300 w-2/3 ">
          <div className="mt-28  mx-40 leading-7">
            <p className=" text-xl font-medium mb-3">
              TOP+/VIP TOP+ keeps the ads on the highest positions in the search
              results to provide the maximum ads visibility. Each Boost package
              has a certain number of TOP+/VIP TOP+ depending on the plan you
              choose.
            </p>
            <p className=" text-white">
              ------------------------------------------------------------------------------------
            </p>
            <p className="  font-medium mb-3">
              Promotion in search results and categories.
            </p>
            <p className=" text-white">
              ------------------------------------------------------------------------------------
            </p>
            <p className="  font-medium mb-3">
              Placing your boosted ads on the first pages.
            </p>
            <p className=" text-white">
              ------------------------------------------------------------------------------------
            </p>
            <p className=" font-medium mb-3">
              Boosted ads get up to 50 times more clients for all your ads in
              the particular category.
            </p>
            <p className=" text-white">
              ------------------------------------------------------------------------------------
            </p>
            <p className=" font-medium mb-3">
              Opportunity to post more ads in the chosen category.
            </p>
          </div>
        </div>
      </div>
      <div className="flex my-10 px-6  bg-gradient-to-r from-green-400 to-green-800 h-fit">
        <div className="">
          <button className=" mt-10 text-headingColor font-bold text-lg bg-white px-5 py-2 rounded-3xl mb-7">
            What is TOP+ and VIP TOP+?
          </button>
          <div className="flex text-white leading-7 mb-20 text-lg font-semibold mr-60 ">
            <div className=" mr-32 ">
              <p>
                TOP+/VIP TOP+ is a tool for the sellers that makes your ads a
                priority showing them above all other ads.
              </p>
              <p className=" text-white">
                ----------------------------------------------------------------------
              </p>
              <p>
                Each package has a certain number of TOP+/VIP TOP+ depending on
                the Boost package you choose.
              </p>
              <p className=" text-white">
                ------------------------------------------------------------------------
              </p>
              <p>
                TOP+/VIP TOP+ is applied to one of your ads immediately after
                the purchase. You can move TOP+/VIP TOP+ to any ad as many times
                as you want till the end of your main Boost package.
              </p>
            </div>

            <div className=" ">
              <p>
                If the number of TOP+/VIP TOP+ in packages exceeds the number of
                your ads, then some TOP+/VIP TOP+ will be applied to the same
                ads.
              </p>
              <p className=" text-white">
                -------------------------------------------------------
              </p>
              <p>
                TOP+/VIP TOP+ never remain unused, they constantly work for
                making high promotion.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* another section */}
      <div className="flex">
        <div className=" mx-10 w-2/5">
          <p className="  bg-black text-white flex items-center justify-center px-5 py-2 w-fit rounded-3xl font-semibold">
            Auto-renew feature
          </p>
          <p className=" my-5 text-textColor mr-20">
            We show boosted ads even higher with auto-renew feature. You don’t
            need to spend your time on renewing ads, we do that automatically
            for you.
          </p>
          <p className=" bg-black text-white flex items-center justify-center px-5 py-2 w-fit rounded-3xl font-semibold">
            Ads posting in categories
          </p>
          <p className=" my-5 text-textColor mr-20">
            There are restrictions in posting ads for free in some categories,
            but Boost package allows to post more ads.
          </p>
          <p className=" bg-black text-white flex items-center justify-center px-5 py-2 w-fit rounded-3xl font-semibold">
            MS notifications on new messages
          </p>
          <p className=" my-5 text-textColor mr-20">
            Even if you are not logged into your MUMU profile, you never miss
            new messages from the clients as we will send you SMS notifications
            each time someone contacts you.
          </p>
          <p className=" bg-black text-white flex items-center justify-center px-5 py-2 w-fit rounded-3xl font-semibold">
            The best marketing tools: email and social media promotion
          </p>
          <p className=" my-5 text-textColor mr-20">
            We send and post Boosted ads with higher priority, so you have
            access up to 3 millions of MUMU registered users.
          </p>

          <p className=" bg-black text-white flex items-center justify-center px-5 py-2 w-fit rounded-3xl font-semibold">
            Personal manager assistance
          </p>
          <p className=" my-5 text-textColor mr-20">
            Personal manager is always ready to answer all your questions and
            help with all your issues.
          </p>
          <p className=" bg-black text-white flex items-center justify-center px-5 py-2 w-fit rounded-3xl font-semibold">
            Website URL on Boost VIP package
          </p>
          <p className=" my-5 text-textColor mr-20">
            Drive buyers directly to your site and make it visible on your
            seller's page.
          </p>
          <Link to="/premium">
            <motion.p
              whileHover={{ scale: 1.03 }}
              className="w-fit rounded-md px-52 py-3 cursor-pointer bg-green-400 hover:bg-green-300 transition-all duration-100 ease-in-out text-white font-semibold text-lg"
            >
              TRY NOW
            </motion.p>
          </Link>
        </div>
        <div className="s space-y-20">
          <img src={samsung} className=" -mt-20 w-656" />
          <div className=" bg-yellow-300 rounded-full">
            <img src={royce} className=" drop-shadow-2xl w-656" />
          </div>
        </div>
      </div>
      <div>
        <p className=" mx-10 rounded-2xl my-10 px-5 py-3 w-fit bg-white text-textColor">
          The more advanced package you have, the more views you get and vistors
          attract
        </p>
      </div>
      <div className="flex items-center justify-center">
        <p className=" mx-10 rounded-2xl my-5 px-5 py-3 w-fit bg-white text-textColor font-bold text-2xl ">
          Top Ad is the best way to draw maximum clients to your ad.
        </p>
      </div>
      <div className="flex bg-white pt-10 gap-32  ">
        <div className="w-4/5 ml-10 rounded-full bg-orange-500 p-20 flex items-center justify-center ">
          <img src={v84} className=" h-300 w-full" />
        </div>
        <div className=" text-black mx-20 ">
          <p className=" mb-5">
            <span className=" font-extrabold text-2xl">1.</span>
            Place your ad in prime position so you can boost your sales fast.
          </p>
          <p className=" mb-5">
            {" "}
            <span className=" font-extrabold text-2xl">2.</span> Up to 15x times
            more views than free ads.
          </p>
          <p className=" mb-5">
            {" "}
            <span className=" font-extrabold text-2xl">3.</span>
            Display your ad in the Top Ad section of its category for 7/30 days.
          </p>
          <p className=" mb-7 text-headingColor font-bold text-xl">
            About Multiple TOP Ads Promo
          </p>
          <p className=" mb-5">
            Multiple Top is your solution for winning. Be one step ahead of
            other TOP sellers using multiple TOPs on one advert. Press “Top Ad”
            (2X TOP, 3X TOP…) on the advert you want to promote. The more tops
            you use on one advert, the more clients you get.
          </p>
          <motion.p
            whileHover={{ scale: 1.03 }}
            className="w-fit  px-32 my-5 py-3 rounded-md cursor-pointer bg-green-500 hover:bg-green-300 transition-all duration-100 ease-in-out text-white font-semibold text-lg"
          >
            REQUEST MANAGER'S CALL
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Gopremium;
