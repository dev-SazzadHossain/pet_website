import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Containers from "../ShearComponents/Containers/Containers";

const RootLayout = () => {
  return (
    <>
      <Containers>
        <Navbar />
        <Outlet />
        <Footer />
      </Containers>
    </>
  );
};

export default RootLayout;
