import React from "react";
import "../styles/messages.css";

const Loading = () => {
  return (
    <div style={{ position: "relative" }}>
      <h2
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        className=" text-5xl text-blue-300 font-bold"
      >
        Loading MUMU........
      </h2>
    </div>
  );
};

export default Loading;
