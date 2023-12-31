import React, { useEffect, useState } from "react";
import { CiSearch, CiYoutube } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineMenuOpen } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { MdRestaurantMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [searchBar, setSearch] = useState(false);
  const [size, setSize] = useState(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const size = window.innerWidth;
      setSize(size);
      if (size > 1023) {
        setSearch(false);
      }
    });
  }, [size, searchBar]);
  return (
    <>
      {/* Search bar true apply style */}
      {searchBar && (
        <div className="search_bar py-6 w-full flex  items-center">
          <div className=" relative w-[250px] max-w-full mx-auto">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
              className=" outline-none  focus:border-2 border-[1px] px-3 py-2  w-[250px] focus:transition-all transition-all focus:duration-300 rounded-full mx-auto bg-[#F6AB4A] text-black placeholder:text-black flex "
            />
            <CiSearch
              className="absolute top-1/2  right-5 -translate-y-1/2 cursor-pointer"
              size="20px"
            />
          </div>
          <div>
            <IoCloseSharp
              onClick={() => setSearch(false)}
              size="30px"
              className="hover:rotate-180  duration-300 cursor-pointer"
            />
          </div>
        </div>
      )}
      {/* Search bar true apply style */}

      {/* default header style */}
      <div
        className={`xl:flex xl:justify-between xl:items-center lg:flex lg:items-center lg:justify-between py-2 flex justify-between items-center ${
          searchBar && "hidden"
        }`}
      >
        <div className="logo">
          <h3 className="text-3xl font-extrabold tracking-wider text-[#794C4F]">
            <span className="effect text-4xl"> KATE</span>
          </h3>
          <p className=" effect text-lg font-bold text-[#F8C078]">Pet Foods</p>
        </div>
        <div className="search_bar relative xl:block lg:block hidden">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search"
            className="group outline-none  focus:border-2 border-[1px] px-3 py-2 focus:max-w-[300px] focus:w-[300px] w-[250px] focus:transition-all transition-all focus:duration-300 rounded-full mx-auto bg-[#F6AB4A] text-black placeholder:text-black xl:block lg:block hidden"
          />
          <div className="search_icon xl:block lg:block hidden">
            {" "}
            <CiSearch
              className="xl:absolute lg:absolute block top-1/2 -translate-y-1/2 right-5 cursor-pointer"
              size="20px"
            />
          </div>
        </div>
        <div
          onClick={() => setMenu((prv) => !prv)}
          className="xl:hidden lg:hidden block"
        >
          {menu ? (
            <MdRestaurantMenu size="35px" />
          ) : (
            <MdOutlineMenuOpen size="35px" />
          )}
        </div>
        <div className="social_icons xl:flex xl:items-center xl:gap-5 lg:flex lg:items-center lg:gap-5  hidden">
          <div className="search_icon xl:hidden lg:hidden  w-[30px] h-[30px] shadow-sm shadow-slate-300  flex justify-center items-center rounded-full group hover:-translate-y-1 cursor-pointer hover:bg-[rgb(241,171,81)] transition-all duration-200">
            {" "}
            <CiSearch className=" cursor-pointer" size="20px" />
          </div>
          <li className="w-[30px] h-[30px] shadow-sm shadow-slate-300  flex justify-center items-center rounded-full group hover:-translate-y-1 cursor-pointer hover:bg-[rgb(241,171,81)] transition-all duration-200">
            <FaFacebookF
              size="20px"
              className="group-hover:text-white group-hover:transition-all group-hover:duration-200"
            />
          </li>
          <li className="w-[30px] h-[30px] shadow-sm shadow-slate-300  flex justify-center items-center rounded-full group hover:-translate-y-1 cursor-pointer hover:bg-[rgb(241,171,81)] transition-all duration-200">
            <CiYoutube
              size="20px"
              className="group-hover:text-white group-hover:transition-all group-hover:duration-200"
            />
          </li>
          <li className="w-[30px] h-[30px] shadow-sm shadow-slate-300  flex justify-center items-center rounded-full group hover:-translate-y-1 cursor-pointer hover:bg-[rgb(241,171,81)] transition-all duration-200">
            <FaInstagram
              size="20px"
              className="group-hover:text-white group-hover:transition-all group-hover:duration-200"
            />
          </li>
        </div>
      </div>
      {/* default header style */}

      {/* mobile */}
      <div className="social_icons flex items-center xl:w-fit lg:w-fit w-full justify-center gap-5 xl:hidden lg:hidden ">
        {searchBar ? (
          ""
        ) : (
          <div
            onClick={() => setSearch((prv) => !prv)}
            className="search_icon xl:hidden lg:hidden  w-[30px] h-[30px] shadow-sm shadow-slate-300  flex justify-center items-center rounded-full group hover:-translate-y-1 cursor-pointer hover:bg-[rgb(241,171,81)] transition-all duration-200"
          >
            {" "}
            <CiSearch className=" cursor-pointer" size="20px" />
          </div>
        )}

        <li className="w-[30px] h-[30px] shadow-sm shadow-slate-300  flex justify-center items-center rounded-full group hover:-translate-y-1 cursor-pointer hover:bg-[rgb(241,171,81)] transition-all duration-200">
          <FaFacebookF
            size="20px"
            className="group-hover:text-white group-hover:transition-all group-hover:duration-200"
          />
        </li>
        <li className="w-[30px] h-[30px] shadow-sm shadow-slate-300  flex justify-center items-center rounded-full group hover:-translate-y-1 cursor-pointer hover:bg-[rgb(241,171,81)] transition-all duration-200">
          <CiYoutube
            size="20px"
            className="group-hover:text-white group-hover:transition-all group-hover:duration-200"
          />
        </li>
        <li className="w-[30px] h-[30px] shadow-sm shadow-slate-300  flex justify-center items-center rounded-full group hover:-translate-y-1 cursor-pointer hover:bg-[rgb(241,171,81)] transition-all duration-200">
          <FaInstagram
            size="20px"
            className="group-hover:text-white group-hover:transition-all group-hover:duration-200"
          />
        </li>
      </div>
      {/* mobile */}
    </>
  );
};

export default Navbar;
