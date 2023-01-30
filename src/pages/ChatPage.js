import React, { useEffect, useState } from "react";

import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  Timestamp,
  orderBy,
  setDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db, storage } from "../firebase";
import User from "../components/User";
import MessageForm from "../components/MessageForm";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Message from "../components/Message";
import { useStateValue } from "./../stateProvider";

import NavBar from "./../components/NavBar";
import "../styles/messages.css";

function ChatPage() {
  const [{ user }] = useStateValue();
  const [msgs, setMsgs] = useState([]);
  const [img, setImg] = useState(); // for storing media files
  const [chat, setChat] = useState(""); //for chats/imges

  const [text, setText] = useState("");
  //here we are executing/retrieving users from the database excluding the current User/me

  const [users, setUsers] = useState([]); //for auth users

  const user1 = auth.currentUser.uid; //this is a currently logged in User
  const date = Timestamp.fromDate(new Date()); // this is now date whill be used every where we need

  useEffect(() => {
    const userRef = collection(db, "users");
    //create query object

    const q = query(userRef, where("uid", "not-in", [user1]));
    //execute the query
    const unsub = onSnapshot(q, (querySnapshot) => {
      let users = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      setUsers(users);
    });
    return () => {
      unsub();
    };
  }, []);

  //getting users information
  const selectUser = async (user) => {
    setChat(user);

    //converstation between a logged user and a selected user
    const user2 = user.uid;
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`; // unique identifier for messages
    const msgsRef = collection(db, "messages", id, "chat"); // reference for messages
    const q = query(msgsRef, orderBy("createdAt", "asc"));

    //executing
    onSnapshot(q, (querySnapshot) => {
      let msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push(doc.data());
      });
      setMsgs(msgs);
    });

    //now a user who recived the message will see 'New' and when he clicks the sender name, unread will become false
    // get last message between logged in user and selected user
    const docSnap = await getDoc(doc(db, "lastMsg", id));
    // if last message exists and message is from selected user
    if (docSnap.data() && docSnap.data().from !== user1) {
      // update last message doc, set unread to false
      await updateDoc(doc(db, "lastMsg", id), { unread: false });
    }
  };

  //a function to send a message
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user2 = chat.uid;

    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;

    //uploading the image nd saving it to firebase storage
    let url;
    const date2 = new Date().getTime();
    if (img) {
      const imgRef = ref(storage, `images/${date2} - ${img.name} `); //creaing the reference for the image
      //now upload it to storage, get the url so that it can be added to firestore by the url coz firestore databs uses url
      const snap = await uploadBytes(imgRef, img);
      const dlUrl = await getDownloadURL(ref(storage, snap.ref.fullPath)); // puting the image to storage
      url = dlUrl;
    }
    //storing the data in firebase frestore
    await addDoc(collection(db, "messages", id, "chat"), {
      text,
      from: user1,
      to: user2,
      createdAt: date,
      media: url || "",
    });

    //how to see the unread messages/last messages fromthe chats
    await setDoc(doc(db, "lastMsg", id), {
      text,
      from: user1,
      to: user2,
      createdAt: date,
      media: url || "",
      unread: true,
    });

    setText("");
  };

  return (
    <>
      <NavBar />
      <div className="home_container mt-6 ml-10  mb-10 pb-5 rounded-md shadow-md ">
        <div className="users_container bg-white">
          {users.map((user) => (
            <User
              key={user.uid}
              user={user}
              selectUser={selectUser}
              user1={user1}
              chat={chat}
            />
          ))}
        </div>
        <div className="messages_container">
          {chat ? (
            <>
              <div className="messages_user">
                <h3> {chat.name} </h3>
              </div>
              <div className="messages">
                {msgs.length
                  ? msgs.map((msg, i) => (
                      <Message key={i} msg={msg} user1={user1} />
                    ))
                  : null}
              </div>
              <MessageForm
                handleSubmit={handleSubmit}
                text={text}
                setText={setText}
                setImg={setImg}
              />
            </>
          ) : (
            <>
              <h3 className="no_conv">Select a user to start conversation</h3>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ChatPage;
