import React from "react";

const Containers = ({ children }) => {
  return (
    <div>
      <div className="xl:w-[1280px] xl:mx-auto lg:w-[1024px] lg:mx-auto md:w-[768px] md:mx-auto sm:w-[640px] sm:mx-auto w-full xl:px-0 lg:px-0 md:px-0 sm:px-0 px-5">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Containers;
