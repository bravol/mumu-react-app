import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { auth } from "./firebase";
import { useStateValue } from "./stateProvider";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import SingleProduct from "./pages/SingleProduct";
import Saved from "./pages/saved/Saved";
import Notifications from "./pages/Notifications";
import Premium from "./pages/Premium";
import Adverts from "./pages/Adverts";
import Posts from "./pages/Posts";
import Feedback from "./pages/Feedback";
import Performance from "./pages/Performance";
import MyShop from "./pages/MyShop";
import MyBalance from "./pages/MyBalance";
import Settings from "./pages/Settings";
import CheckOut from "./pages/saved/CheckOut";
import MakeMoney from "./pages/MakeMoney";
import Followers from "./pages/Followers";
import InviteFriends from "./pages/InviteFriends";
import HowTosell from "./pages/howToSell/HowTosell";
import Feedbacking from "./pages/Feedbacking";
import Gopremium from "./pages/howToSell/Gopremium";
import Manager from "./pages/Manager";

import Contact from "./pages/questions/popular/Contact";
import Loading from "./components/Loading";
import { onAuthStateChanged } from "firebase/auth";
import ChatPage from "./pages/ChatPage";
import Profile from "./pages/Profile";

function App() {
  const [loading, setLoading] = useState(true);
  //this is a data layer component connected with firebase
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //only runs once when the app component loads..
    const unsub = onAuthStateChanged(auth, (authUser) => {
      setLoading(false);
      console.log("The User is >>>", authUser);

      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    //cleaning the useEffect function
    return () => {
      unsub();
    };
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Router>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/chatpage" element={<ChatPage />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/adverts" element={<Adverts />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/myshop" element={<MyShop />} />
            <Route path="/myBalance" element={<MyBalance />} />
            <Route path="/settings" element={<Settings />} />

            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/makeMoney" element={<MakeMoney />} />
            <Route path="/followers" element={<Followers />} />
            <Route path="/inviteFriends" element={<InviteFriends />} />
            <Route path="/howToSell" element={<HowTosell />} />
            <Route path="/feedbacking" element={<Feedbacking />} />
            <Route path="/gopremiums" element={<Gopremium />} />
            <Route path="/manager" element={<Manager />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
