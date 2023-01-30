import React from "react";
import { FcUpload } from "react-icons/fc";
import "../styles/messages.css";

const MessageForm = ({ handleSubmit, text, setText, setImg }) => {
  return (
    <>
      <form className="message_form" onSubmit={handleSubmit}>
        <label htmlFor="img">
          <FcUpload className=" w-6 h-6 cursor-pointer text-gray-500" />
        </label>
        <input
          onChange={(e) => setImg(e.target.files[0])}
          type="file"
          id="img"
          accept="image/*"
          style={{ display: "none" }}
        />
        <div>
          <input
            type="text"
            placeholder="Write Message"
            className=" text-textColor font-medium text-base"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <button className="btn">Send</button>
        </div>
      </form>
    </>
  );
};

export default MessageForm;
