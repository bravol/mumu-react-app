import React from "react";

const Input = () => {
  return (
    <div>
      <input
        className=" placeholder:italic placeholder:text-slate-400 border-none outline-none bg-white w-full py-2 lg:py-3 px-4  focus:ring-4 focus:ring-sky-500 sm:text-sm rounded-md"
        placeholder="Search for anything..."
        type="text"
        name="search"
      />
    </div>
  );
};

export default Input;
