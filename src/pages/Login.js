import React, { useState } from "react";

import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { FacebookSignIn, GoogleSignIn } from "google-facebook-signin-react";

import "../styles/Login.css";
import { doc, updateDoc } from "firebase/firestore";

const Register = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
    error: null,
    loading: false,
  });
  const { error, email, password, loading } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const Logins = async (e) => {
    e.preventDefault();
    setData({ ...data, error: null, loading: true });

    if (!email || !password) {
      setData({ ...data, error: "All fields are required" });
    }

    try {
      //regester
      const result = await signInWithEmailAndPassword(auth, email, password);

      //UPDATING the users in firestore database/ setting the document on firestore
      await updateDoc(doc(db, "users", result.user.uid), {
        isOnline: true,
      });
      //redirect the page to home page
      navigate("/");
      //after setting the document,clear the fields
      setData({
        email: "",
        password: "",
        error: null,
        loading: false,
      });
    } catch (err) {
      setData({ ...data, error: err.message, loading: false });
    }
  };

  return (
    <>
      <div className="login mt-32 ">
        <div className="form ">
          <form>
            <span className="form-span">LOGIN</span>
            {error && (
              <p className="error border-2 border-rose-500 mb-1">{error}</p>
            )}
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
              placeholder=" Password"
              className="invalid:border-pink-500 invalid:text-pink-600
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                  "
            />

            <button
              onClick={Logins}
              className="form-button hover:bg-blue-600 "
              disabled={loading}
            >
              {loading ? `Logging...  ` : "Login"}
            </button>

            <p className="flex items-center justify-center uppercase my-1">
              or
            </p>

            <div className=" space-y-2">
              <GoogleSignIn className="form-button-login ">
                Login with Google
              </GoogleSignIn>

              <FacebookSignIn className="form-button-login">
                Login with Facebook
              </FacebookSignIn>
            </div>
            <div>
              You don't have an account?
              <Link to="/register">
                <span style={{ color: "red" }}>Register</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
