import React from "react";
import { useQuery } from "@apollo/client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Profile/Header";
import { GET_ME } from "../utils/queries";

const Profile = () => {
  const { loading, data } = useQuery(GET_ME);
  const user = data?.me || [];
  return (
    <div>
      <Nav />
      <Header user={user} />
      <div style={{ paddingBottom: "30rem" }}></div>
      <Footer />
    </div>
  );
};

export default Profile;
