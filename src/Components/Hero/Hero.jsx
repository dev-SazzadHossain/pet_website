import React from "react";
import style from "./Hero.module.css";
import { Link } from "react-router-dom";
import { MdOutlineMenuOpen, MdRestaurantMenu } from "react-icons/md";
import Containers from "../../ShearComponents/Containers/Containers";

const Hero = ({ menu, setMenu, size, setSize }) => {
  return (
    <div className="bg-[#794C51]">
      <Containers>
        <div className="">
          {/* menu bar here */}
          <ul
            className={`xl:flex lg:flex justify-between items-center py-5 text-center mx-auto   xl:w-[900px] lg:w-[900px] w-full xl:px-0 ease-linear lg:px-0 opacity-100 px-5 z-50  xl:relative xl:transition-none lg:transition-none transition-all xl:duration-0 lg:duration-0 duration-300 lg:relative absolute xl:top-0 lg:top-0  ${
              menu
                ? "left-0 top-0 h-[100vh] flex flex-col w-full bg-[#794C51]"
                : "top-[-350px] left-0 opacity-0"
            } `}
          >
            <li className="text-lg font-bold tracking-wide  shadow-sm rounded-lg  text-white hover:text-[rgb(237,164,74)] hover:transition-all hover:duration-200 hover:-translate-y-1">
              <Link>Home</Link>
            </li>
            <li className="text-lg font-bold tracking-wide  shadow-sm rounded-lg  text-white hover:text-[rgb(237,164,74)] hover:transition-all hover:duration-200 hover:-translate-y-1 xl:mt-0 lg:mt-0 mt-2">
              <Link>Dog</Link>
            </li>
            <li className="text-lg font-bold tracking-wide  shadow-sm rounded-lg  text-white hover:text-[rgb(237,164,74)] hover:transition-all hover:duration-200 hover:-translate-y-1 xl:mt-0 lg:mt-0 mt-2">
              <Link>Cat</Link>
            </li>
            <li className="text-lg font-bold tracking-wide  shadow-sm rounded-lg  text-white hover:text-[rgb(237,164,74)] hover:transition-all hover:duration-200 hover:-translate-y-1 xl:mt-0 lg:mt-0 mt-2">
              <Link>Bird</Link>
            </li>
            <li className="text-lg font-bold tracking-wide  shadow-sm rounded-lg  text-white hover:text-[rgb(237,164,74)] hover:transition-all hover:duration-200 hover:-translate-y-1 xl:mt-0 lg:mt-0 mt-2">
              <Link>Toy</Link>
            </li>
            <li className="text-lg font-bold tracking-wide  shadow-sm rounded-lg  text-white hover:text-[rgb(237,164,74)] hover:transition-all hover:duration-200 hover:-translate-y-1 xl:mt-0 lg:mt-0 mt-2">
              <Link>About</Link>
            </li>
            <li className="text-lg font-bold tracking-wide  shadow-sm rounded-lg  text-white hover:text-[rgb(237,164,74)] hover:transition-all hover:duration-200 hover:-translate-y-1 xl:mt-0 lg:mt-0 mt-2">
              <Link>Faqs</Link>
            </li>
            <li className="text-lg font-bold tracking-wide  shadow-sm rounded-lg  text-white hover:text-[rgb(237,164,74)] hover:transition-all hover:duration-200 hover:-translate-y-1 xl:mt-0 lg:mt-0 mt-2">
              <Link>Blog</Link>
            </li>
            <li className="text-lg font-bold tracking-wide  shadow-sm rounded-lg  text-white hover:text-[rgb(237,164,74)] hover:transition-all hover:duration-200 hover:-translate-y-1 xl:mt-0 lg:mt-0 mt-2">
              <Link>Contact</Link>
            </li>
            <div
              onClick={() => setMenu(false)}
              className=" absolute right-5 top-5 hover:rotate-180 duration-200 cursor-pointer xl:hidden lg:hidden block"
            >
              {" "}
              <MdRestaurantMenu size="35px" />
            </div>
          </ul>
          {/* menu bar here */}
        </div>
      </Containers>
    </div>
  );
};

export default Hero;
