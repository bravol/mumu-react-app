import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DefaultImg from "../images/avatar.png";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import "../styles/messages.css";

const User = ({ user, selectUser, user1, chat }) => {
  //querying the last message/unread messages
  //note. noSnapShot is a realtime listener , one of the best functions of firebase
  const user2 = user?.uid;
  const [data, setData] = useState("");

  useEffect(() => {
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;
    let unsub = onSnapshot(doc(db, "lastMsg", id), (doc) => {
      setData(doc.data());
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <>
      <div
        className={`user_wrapper ${
          chat.name === user.name && "selected_user"
        } `}
        onClick={() => selectUser(user)}
      >
        <div className="user_info">
          <div className="user_detail">
            <img
              src={user.avatar || DefaultImg}
              alt="avatar"
              className="avatar"
            />
            <h4> {user.name} </h4>

            {data?.from !== user1 && data?.unread && (
              <small className="unread">New</small>
            )}
          </div>
          <div
            className={`user_status ${user.isOnline ? "online" : "offline"}`}
          ></div>
        </div>

        {data && (
          <p className="truncate">
            <strong>{data.from === user1 && "Me"}</strong>
            {data.text}
          </p>
        )}
      </div>
      <div
        onClick={(e) => selectUser(user)}
        className={`sm_container ${
          chat.name === user.name && "selected_user"
        } `}
      >
        <img
          src={user.avatar || DefaultImg}
          alt="avatar"
          className="avatar sm_screen"
        />
      </div>
    </>
  );
};

export default User;
