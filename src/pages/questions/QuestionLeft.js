import React from "react";
import { BsSearch } from "react-icons/bs";

const QuestionLeft = () => {
  return (
    <div className=" relative h-full flex  mx-10">
      <div className="">
        <p className=" text-2xl text-headingColor font-bold">
          Frequently Asked Questions
        </p>
        <div className=" mt-10">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <BsSearch />
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-4 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search in Frequently asked questions"
              type="text"
              name="search"
            />
          </label>
        </div>
        <div className=" bg-gray-200 py-1">
          <p className=" text-xs font-extrabold ml-5 py-1 ">POPULAR</p>
        </div>
        <div className=" bg-white h-fit py-5 px-3 cursor-pointer ">
          <p className=" pb-5 text-sm font-medium text-textColor hover:text-green-500 ">
            How do I contact Support Team?
          </p>
          <hr />
          <p className=" py-5 text-sm font-medium text-textColor hover:text-green-500 ">
            How can I sell on MUMU?
          </p>
          <hr />
          <p className=" py-5 text-sm font-medium text-textColor hover:text-green-500 ">
            How do I buy something on MUMU
          </p>
          <hr />
          <p className=" py-5 text-sm font-medium text-textColor hover:text-green-500 ">
            How to report illegal activity on MUMU
          </p>
          <hr />
          <p className=" py-5 text-sm font-medium text-textColor hover:text-green-500 ">
            What does 'ads limit' mean?
          </p>
          <hr />
          <p className=" py-5 text-sm font-medium text-textColor hover:text-green-500 ">
            What are premium services
          </p>
          <hr />
        </div>
        <div className=" bg-gray-200 py-1">
          <p className=" text-xs font-extrabold ml-5 py-1">
            GENERAL INFORMATION
          </p>
        </div>
        <div className=" bg-white h-fit py-5 px-3 cursor-pointer ">
          <p className=" pb-5 text-sm font-medium text-textColor hover:text-green-500 ">
            What is a 'Marketplace'?
          </p>
          <hr />
          <p className=" py-5 text-sm font-medium text-textColor hover:text-green-500 ">
            Do you have any stores?
          </p>
          <hr />
          <p className=" py-5 text-sm font-medium text-textColor hover:text-green-500 ">
            Do you have a delivery?
          </p>
          <hr />
          <p className=" py-5 text-sm font-medium text-textColor hover:text-green-500 ">
            Can I unsubscribe from the newsletter?
          </p>
        </div>
        <div className=" bg-gray-200 py-1">
          <p className=" text-xs font-extrabold ml-5 py-1">FOR SELLERS</p>
        </div>
        <div className=" bg-white h-fit py-5 px-3 cursor-pointer ">
          <p className=" pb-5 text-sm font-medium text-textColor hover:text-green-500 ">
            I've posted my ad but I can't find it on MUMU. Why?
          </p>
          <hr />
          <p className=" py-5 text-sm font-medium text-textColor hover:text-green-500 ">
            What can i do to sell better?
          </p>
          <hr />
        </div>
        <div className=" bg-gray-200 py-1">
          <p className=" text-xs font-extrabold ml-5 py-1">POSTING AD</p>
        </div>
        <div className=" bg-white h-fit py-5 px-3 cursor-pointer ">
          <p className=" pb-5 text-sm font-medium text-textColor hover:text-green-500 ">
            What happens after I click on 'Post ad'?
          </p>
          <hr />
          <p className=" py-5 text-sm font-medium text-textColor hover:text-green-500 ">
            Posting rules
          </p>
          <hr />
          <p className=" py-5 text-sm font-medium text-textColor hover:text-green-500 ">
            Tips for creating an effective ad
          </p>
          <hr />
          <p className=" py-5 text-sm font-medium text-textColor hover:text-green-500 ">
            Prohibited items on MUMU
          </p>
          <hr />
        </div>
        <div className=" bg-gray-200 py-1">
          <p className=" text-xs font-extrabold ml-5 py-1">MANAGING ADS</p>
        </div>
        <div className=" bg-white h-fit py-5 px-3 cursor-pointer ">
          <p className=" pb-5 text-sm font-medium text-textColor hover:text-green-500 ">
            My advert has been declined. Why?
          </p>
          <hr />
          <p className=" py-5 text-sm font-medium text-textColor hover:text-green-500 ">
            Can I share ads on Facebook or Twitter?
          </p>
          <hr />
          <p className=" py-5 text-sm font-medium text-textColor hover:text-green-500 ">
            How long will my ads stay on MUMU?
          </p>
          <hr />
        </div>
        <div className=" bg-gray-200 py-1">
          <p className=" text-xs font-extrabold ml-5 py-1">PREMIUM SERVICES</p>
        </div>
        <div className=" bg-white h-fit py-5 px-3 cursor-pointer ">
          <p className=" pb-5 text-sm font-medium text-textColor hover:text-green-500 ">
            What are types of Premium Services on MUMU?
          </p>
          <hr />
          <p className=" py-5 text-sm font-medium text-textColor hover:text-green-500 ">
            How to buy Premium Services?
          </p>
          <hr />
        </div>
        <div className=" bg-gray-200 py-1">
          <p className=" text-xs font-extrabold ml-5 py-1">FOR BUYERS</p>
        </div>
        <div className=" bg-white h-fit py-5 px-3 cursor-pointer ">
          <p className=" pb-5 text-sm font-medium text-textColor hover:text-green-500 ">
            Should I pay before or after?
          </p>
          <hr />
          <p className=" py-5 text-sm font-medium text-textColor hover:text-green-500 ">
            How can I protect myself from being scammed?
          </p>
          <hr />
          <p className=" py-5 text-sm font-medium text-textColor hover:text-green-500 ">
            How can I be sure that I will get what I requested?
          </p>
          <hr />
        </div>
        <div className=" bg-gray-200 py-1">
          <p className=" text-xs font-extrabold ml-5 py-1">FEEDBACK</p>
        </div>
        <div className=" bg-white h-fit py-5 px-3 cursor-pointer ">
          <p className=" pb-5 text-sm font-medium text-textColor hover:text-green-500 ">
            What is 'feedback', and why is it important?
          </p>
          <hr />
          <p className=" py-5 text-sm font-medium text-textColor hover:text-green-500 ">
            How to leave feedback about the seller?
          </p>
          <hr />
          <p className=" py-5 text-sm font-medium text-textColor hover:text-green-500 ">
            Is there any moderation of feedback?
          </p>
          <hr />
          <p className=" py-5 text-sm font-medium text-textColor hover:text-green-500 ">
            How can I react to feedback about sellers that other people posted?
          </p>
          <hr />
          <p className=" py-5 text-sm font-medium text-textColor hover:text-green-500 ">
            Can I edit my feedback after it is published?
          </p>
          <hr />
          <p className=" py-5 text-sm font-medium text-textColor hover:text-green-500 ">
            I received negative feedback. What's the best way to solve this?
          </p>
          <hr />
          <p className=" py-5 text-sm font-medium text-textColor hover:text-green-500 ">
            What is 'Appeal on feedback', and when should I use it?
          </p>
          <hr />
        </div>
        <div className=" bg-gray-200 py-1">
          <p className=" text-xs font-extrabold ml-5 py-1">JOBS & SERVICES</p>
        </div>
        <div className=" bg-white h-fit py-5 px-3 cursor-pointer ">
          <p className=" pb-5 text-sm font-medium text-textColor hover:text-green-500 ">
            How to find a Job on MUMU?
          </p>
          <hr />
          <p className=" py-5 text-sm font-medium text-textColor hover:text-green-500 ">
            How to find good candidates for Jobs on MUMU?
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default QuestionLeft;
