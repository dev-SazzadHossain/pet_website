import React from "react";
import style from "./Hero.module.css";
import { Link } from "react-router-dom";

const Hero = ({ menu, setMenu, size, setSize }) => {
  return (
    <div className="">
      <ul
        className={`xl:flex lg:flex justify-between items-center py-5 text-center mx-auto   xl:w-[900px] lg:w-[900px] w-full xl:px-0 lg:px-0 px-5    z-50 mt-5 `}
      >
        <li className="text-lg font-bold tracking-wide px-5 py-1 shadow-sm rounded-lg hover:bg-[rgb(237,164,74)] hover:text-white hover:transition-all hover:duration-200 hover:-translate-y-1">
          <Link>Home</Link>
        </li>
        <li className="text-lg font-bold tracking-wide px-5 py-1 shadow-sm rounded-lg hover:bg-[rgb(237,164,74)] hover:text-white hover:transition-all hover:duration-200 hover:-translate-y-1 xl:mt-0 lg:mt-0 mt-2">
          <Link>Dog</Link>
        </li>
        <li className="text-lg font-bold tracking-wide px-5 py-1 shadow-sm rounded-lg hover:bg-[rgb(237,164,74)] hover:text-white hover:transition-all hover:duration-200 hover:-translate-y-1 xl:mt-0 lg:mt-0 mt-2">
          <Link>Cat</Link>
        </li>
        <li className="text-lg font-bold tracking-wide px-5 py-1 shadow-sm rounded-lg hover:bg-[rgb(237,164,74)] hover:text-white hover:transition-all hover:duration-200 hover:-translate-y-1 xl:mt-0 lg:mt-0 mt-2">
          <Link>Bird</Link>
        </li>
        <li className="text-lg font-bold tracking-wide px-5 py-1 shadow-sm rounded-lg hover:bg-[rgb(237,164,74)] hover:text-white hover:transition-all hover:duration-200 hover:-translate-y-1 xl:mt-0 lg:mt-0 mt-2">
          <Link>Toy</Link>
        </li>
        <li className="text-lg font-bold tracking-wide px-5 py-1 shadow-sm rounded-lg hover:bg-[rgb(237,164,74)] hover:text-white hover:transition-all hover:duration-200 hover:-translate-y-1 xl:mt-0 lg:mt-0 mt-2">
          <Link>About</Link>
        </li>
        <li className="text-lg font-bold tracking-wide px-5 py-1 shadow-sm rounded-lg hover:bg-[rgb(237,164,74)] hover:text-white hover:transition-all hover:duration-200 hover:-translate-y-1 xl:mt-0 lg:mt-0 mt-2">
          <Link>Faqs</Link>
        </li>
        <li className="text-lg font-bold tracking-wide px-5 py-1 shadow-sm rounded-lg hover:bg-[rgb(237,164,74)] hover:text-white hover:transition-all hover:duration-200 hover:-translate-y-1 xl:mt-0 lg:mt-0 mt-2">
          <Link>Blog</Link>
        </li>
        <li className="text-lg font-bold tracking-wide px-5 py-1 shadow-sm rounded-lg hover:bg-[rgb(237,164,74)] hover:text-white hover:transition-all hover:duration-200 hover:-translate-y-1 xl:mt-0 lg:mt-0 mt-2">
          <Link>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Hero;
