import React from "react";
import { useQuery } from "@apollo/client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Head from "../components/Profile/Head";
import { GET_ME, GET_USER_ITEMS } from "../utils/queries";
import Auth from "../utils/auth";
import Body from "../components/Profile/Body";

const Profile = () => {
  if (!Auth.loggedIn) {
    alert("Session Expired!");
    window.location.assign("/");
  }
  const me = useQuery(GET_ME);
  const items = useQuery(GET_USER_ITEMS);
  let meData = "";
  let itemsData = [];
  if (me.loading) {
    console.log("Loading user");
  } else {
    meData = me.data;
  }
  if (items.loading) {
    console.log("Loading items");
  } else {
    itemsData = items.data;
  }
  return (
    <div>
      <Nav />
      <Head user={meData} />
      <Body items={itemsData} />
      <Footer />
    </div>
  );
};

export default Profile;
