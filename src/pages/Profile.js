import React, { useState, useEffect } from "react";
import DefaultImg from "../images/avatar.png";
import { AiFillCamera } from "react-icons/ai";
import { storage, auth, db } from "../firebase";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { FaTrash } from "react-icons/fa";
import "../styles/messages.css";
import {
  ref,
  getDownloadURL,
  uploadBytes,
  deleteObject,
} from "firebase/storage";

import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

function Profile() {
  const navigate = useNavigate();
  const [img, setImg] = useState("");
  //   console.log(img);
  const [user, setUser] = useState();

  useEffect(() => {
    //also get url
    getDoc(doc(db, "users", auth.currentUser.uid)).then((docSnap) => {
      if (docSnap.exists) {
        setUser(docSnap.data());
      }
    });

    if (img) {
      //uploading the image
      const date = new Date().getTime();
      const uploadImg = async () => {
        const imgRef = ref(storage, `avatar/${date} - ${img.name}`);
        try {
          //delete the image if it exists
          if (user.avatarPath) {
            await deleteObject(ref(storage, user.avatarPath));
          }
          const snap = await uploadBytes(imgRef, img);
          //then download url
          const url = await getDownloadURL(ref(storage, snap.ref.fullPath));

          //updating the document in firestore
          //f24957
          await updateDoc(doc(db, "users", auth.currentUser.uid), {
            avatar: url,
            avatarPath: snap.ref.fullPath,
          });
          console.log(url);
          setImg("");
        } catch (err) {
          console.log(err.message);
        }
      };
      uploadImg();
    }
  }, [img]);

  //a user deleting his image if he clicks on trash
  const deleteImage = async () => {
    try {
      const confirm = window.confirm("Delete Avatar");
      if (confirm) {
        await deleteObject(ref(storage, user.avatarPath));
        //updaing the firestore database and storage after deleting the image
        await updateDoc(doc(db, "users", auth.currentUser.uid), {
          avatar: "",
          avatarPath: "",
        });
        navigate("/");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="h-510">
      <NavBar />
      {user && (
        <section>
          <div className="profile_container">
            <div className="img_container">
              <img src={user.avatar || DefaultImg} alt="avatar" />
              <div className="overlay">
                <div className="">
                  <span className="flex space-x-2 ">
                    <label htmlFor="photo">
                      <AiFillCamera className=" w-6 h-6 cursor-pointer" />
                    </label>
                    {user.avatar ? (
                      <FaTrash
                        onClick={deleteImage}
                        className=" w-5 h-5 cursor-pointer text-red-500"
                      />
                    ) : null}
                  </span>

                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    id="photo"
                    onChange={(e) => setImg(e.target.files[0])}
                  />
                </div>
              </div>
            </div>
            <div className="text_container">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <hr />
              <small>Joined on: {user.createdAt.toDate().toDateString()}</small>
            </div>
          </div>
          <p className=" text-xs font-semibold text-green-600">
            Your Profile Picture will be seen by other people who chat with you.
            So try to Upload a nice picture
          </p>
        </section>
      )}
    </div>
  );
}

export default Profile;
