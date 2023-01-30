import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import image5 from "../../images/image5.jpg";
import image6 from "../../images/image6.jpg";
import image8 from "../../images/image8.jpg";
import image9 from "../../images/image9.jpg";
import image10 from "../../images/image10.webp";
import { Link } from "react-router-dom";

const HowTosell = () => {
  return (
    <div className="bg-white relative h-full w-full py-5 ">
      <div className="pt-10 ml-32 flex mr-80 mt-14">
        <div>
          <p className=" font-semibold text-black text-3xl">
            MUMU is the best place to sell
            <p className=" mb-8">anything to real people.</p>
          </p>
          <p className="b text-lg mb-8">
            It is the biggest free online classified with an advanced security
            system. We provide a simple hassle-free solution to sell and buy
            almost anything.
          </p>
          <h6 className="t text-xs text-gray-400 ">Table of content</h6>
          <button className=" flex  justify-between w-3/5 px-3 py-2 text-sm font-extrabold mt-3 bg-green-100 rounded-sm mb-2  ">
            How to sell on MUMU <MdKeyboardArrowDown />
          </button>
          <button className=" flex  justify-between w-3/5 px-3 py-2 text-sm font-extrabold mt-3 bg-green-100 rounded-sm mb-2  ">
            How to buy on MUMU <MdKeyboardArrowDown />
          </button>
          <button className=" flex  justify-between w-3/5 px-3 py-2 text-sm font-extrabold mt-3 bg-green-100 rounded-sm mb-2  ">
            Safety <MdKeyboardArrowDown />
          </button>
          <button className=" flex  justify-between w-3/5 px-3 py-2 text-sm font-extrabold mt-3 bg-green-100 rounded-sm mb-2  ">
            Sell like a pro! <MdKeyboardArrowDown />
          </button>
        </div>

        <img className="w-2/5 h-420 " src={image5} />
      </div>

      {/* another section */}
      <div className="mx-32 flex mt-10">
        <img className="w-2/5 h-510" src={image6} />
        <span>
          <p className="font-semibold text-black text-3xl mb-8">
            How to sell on MUMU?
          </p>
          <Link to="/register">
            <p className="f font-semibold text-black text-lg">
              1.{" "}
              <span className="cursor-pointer text-green-500 text-lg">
                Register
              </span>
            </p>
          </Link>

          <p className="mb-6 text-lg">
            Register using your e-mail and phone number (or do it via Facebook
            or Google). Make sure you’re entering a correct phone number, so
            your clients could reach you!
          </p>
          <p className="f font-semibold text-black text-lg">
            2.{" "}
            <span className=" text-black text-lg">
              Make photos of your item.
            </span>
          </p>
          <p className="mb-6 text-lg">
            Feel free to make a lot of photos using your smartphone. Make sure
            they show your item in the best light.
          </p>
          <p className="f font-semibold text-black text-lg">
            3. <span className="t text-lg">Press </span>{" "}
            <Link to="/posts">
              <span className=" text-green-500 text-lg"> SELL .</span>{" "}
            </Link>
          </p>
          <p className="mb-6 text-lg">
            Choose a proper category, upload your photos and write a clear title
            and full description of your item. Enter a fair price, select
            attributes and send your advert to review!
          </p>
          <p className=" font-semibold text-black text-lg">
            {" "}
            4.{" "}
            <span className="t text-black">
              Answer the messages and calls from your clients!
            </span>
          </p>
          <p className=" text-lg">
            If everything is ok with your advert, it will be on Jiji in a couple
            of hours after sending to moderation. We will send you a letter and
            notification when your advert goes live. Check your messages and be
            ready to earn money! Do you want to sell like a pro? Check out our
            Premium Services .
          </p>
          <Link to="/posts">
            <button className=" mt-5 bg-green-500 px-14 py-2 rounded-md text-white text-lg hover:bg-green-600">
              Sell
            </button>
          </Link>
        </span>
      </div>

      {/* another section */}
      <div className="mx-32 flex mt-10">
        <span>
          <p className="font-semibold text-black text-3xl mb-8">
            How to buy on MUMU?
          </p>

          <p className="f font-semibold text-black text-lg">
            1. Search for the item.
          </p>

          <p className="mb-6 text-lg">
            Find what you need using search panel and filters. We have over a
            million adverts, choose exactly what you are looking for.
          </p>
          <p className="f font-semibold text-black text-lg">
            2. <span className=" text-black text-lg">Contact a seller.</span>
          </p>
          <p className="mb-6 text-lg">
            You may use chat on Jiji or call them via phone. Discuss all the
            details, negotiate about the price.
          </p>
          <p className="  font-semibold text-black text-lg">
            3. Take your item or order a delivery.
          </p>
          <p className="mb-6 text-lg">
            We check our sellers carefully, but it’s always better to check
            twice, right? Meet a seller in public place and be sure to pay only
            after collecting your item.
          </p>
          <p className=" font-semibold text-black text-lg">
            {" "}
            4.{" "}
            <span className="t text-black">
              Leave your feedback about the seller.
            </span>
          </p>
          <p className=" text-lg">
            Feel free to tell us about your purchase. Your feedback will be
            published online on the seller’s page and will be very helpful for
            other buyers. Let’s build a safe and professional business community
            together!
          </p>
          <Link to="/">
            <button className=" mt-5 bg-green-500 px-5 py-2 rounded-md text-white text-lg hover:bg-green-600">
              GO SHOPPING
            </button>
          </Link>
        </span>
        <img className="w-2/5 h-510" src={image8} />
      </div>

      {/* another section */}
      <div className=" mx-10 flex mt-10">
        <img className="w-3/5 h-510" src={image9} />
        <span>
          <p className="font-semibold text-black text-3xl mb-8">Safety</p>

          <p className="f font-semibold text-black text-lg">1. General</p>

          <p className="mb-6 text-lg">
            We are highly focused on the security and can solve any issues in
            short-terms. That’s why we ask you, kindly, to leave a review after
            purchasing. If you run into any problems with a seller, you can
            report us and Jiji Team will check this seller as soon as possible.
          </p>
          <p className="f font-semibold text-black text-lg">
            2.{" "}
            <span className=" text-black text-lg">Personal safety tips.</span>
          </p>
          <p className="mb-6 text-lg">
            <p>- Do not pay in advance, even for the delivery </p>
            <p>- Try to meet at a safe, public location</p>
            <p>- Check the item BEFORE you buy it</p>
            <p> - Pay only after collecting the item</p>
          </p>
          <p className="  font-semibold text-black text-lg">
            3. Secure payments.
          </p>
          <p className="mb-6 text-lg">
            MUMU provides{" "}
            <Link to="/premium">
              <span className=" text-green-500 cursor-pointer">
                Premium Services
              </span>
            </Link>{" "}
            for those who want to sell and earn more. We accept both online and
            offline payments for these services. We guarantee secure and
            reliable payments on MUMU.
          </p>
        </span>
      </div>

      {/* another section */}
      <div className=" ml-32 mr-10 flex mt-10">
        <span>
          <p className="font-semibold text-black text-3xl mb-8">
            Sell like a pro!
          </p>

          <p className="f font-semibold text-black text-lg">
            1. Pay attention to the details.
          </p>

          <p className="mb-6 text-lg">
            Make good photos of your goods, write clear and detailed
            description.
          </p>
          <p className="f font-semibold text-black text-lg">
            2. <span className=" text-black text-lg">Answer quickly.</span>
          </p>
          <p className="mb-6 text-lg">
            Don’t make your buyer wait for your message for days. Be online or
            get{" "}
            <Link to="/notifications">
              {" "}
              <span className=" text-green-500 font-semibold">
                SMS notifications
              </span>
            </Link>{" "}
            on your messages.
          </p>
          <p className="  font-semibold text-black text-lg">
            3. Use {""}
            <Link to="/premium">
              <span className=" text-green-500">Premium Services</span>
            </Link>{" "}
            {""}
            to get 15x more customers!
          </p>
          <p className="mb-6 text-lg">
            Your adverts will appear at the top of the page and you will sell
            faster!{" "}
            <Link to="/gopremiums">
              <span className=" text-green-500 font-semibold">
                How does it work?
              </span>
            </Link>
          </p>
          <Link to="/gopremiums">
            <button className="  bg-green-500 px-5 py-2 rounded-md text-white text-lg hover:bg-green-600">
              GO PREMIUM
            </button>
          </Link>
        </span>
        <img className="w-3/5 h-510" src={image10} />
      </div>
      <div className="flex items-center justify-center cursor-pointer">
        <Link to="/contact">
          <button
            type="button"
            className=" bg-green-200 text-sm font-extrabold px-8 py-1 rounded-md hover:bg-green-300 transition-all duration-100 ease-in-out"
          >
            Still have Questions? Read FAQ
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HowTosell;
