import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Containers from "../ShearComponents/Containers/Containers";
import Hero from "../Components/Hero/Hero";

const RootLayout = () => {
  const [menu, setMenu] = useState(false);
  const [size, setSize] = useState(null);

  return (
    <>
      <div className="">
        <Navbar menu={menu} setMenu={setMenu} setSize={setSize} size={size} />
        <Hero menu={menu} setMenu={setMenu} setSize={setSize} size={size} />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
