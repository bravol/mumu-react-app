import React, { useState } from "react";

import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { FacebookSignIn, GoogleSignIn } from "google-facebook-signin-react";

import "../styles/Login.css";
import { doc, setDoc, Timestamp } from "firebase/firestore";

const Register = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    error: null,
    loading: false,
  });
  const { name, error, email, password, loading } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const Registers = async (e) => {
    e.preventDefault();
    setData({ ...data, error: null, loading: true });

    if (!name || !email || !password) {
      setData({ ...data, error: "All fields are required" });
    }

    try {
      //regester
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //storing the users in firestore database/ setting the document on firestore
      await setDoc(doc(db, "users", result.user.uid), {
        uid: result.user.uid,
        name,
        email,
        createdAt: Timestamp.fromDate(new Date()),
        isOnline: true,
      });
      //redirect the page to home page
      navigate("/");
      //after setting the document,clear the fields
      setData({
        name: "",
        email: "",
        password: "",
        error: null,
        loading: false,
      });
      console.log(result.user);
    } catch (err) {
      setData({ ...data, error: err.message, loading: false });
    }
  };

  return (
    <>
      <div className="login mt-32">
        <div className="form">
          <form>
            <span className="form-span">REGISTER</span>
            {error && <p className="error border-2 border-rose-500">{error}</p>}
            <input
              name="name"
              type="text"
              value={name}
              onChange={handleChange}
              placeholder="Your Username"
            />

            <input
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="Email"
              className="invalid:border-pink-500 invalid:text-pink-600
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                  "
            />

            <input
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              placeholder="Create Password"
              className="invalid:border-pink-500 invalid:text-pink-600
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                  "
            />

            <button
              onClick={Registers}
              className="form-button hover:bg-blue-600 "
              disabled={loading}
            >
              {loading ? "Creating..." : "Register"}
            </button>

            <p className="flex items-center justify-center uppercase my-1">
              or
            </p>

            <div className=" space-y-2">
              <GoogleSignIn className="form-button-login ">
                SignUp with Google
              </GoogleSignIn>

              <FacebookSignIn className="form-button-login">
                SignUp with Facebook
              </FacebookSignIn>
            </div>
            <div>
              Already have an account?
              <Link to="/login">
                <span style={{ color: "red" }}>Log In</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
