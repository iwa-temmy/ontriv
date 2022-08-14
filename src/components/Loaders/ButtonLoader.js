import React from "react";
import { ThreeDots } from "react-loader-spinner";

const ButtonLoader = () => {
  return (
    <div className="text-center w-100 align-items-center">
      <ThreeDots
        color="white"
        height={"12px"}
        wrapperStyle={{ display: "block" }}
      />
    </div>
  );
};

export default ButtonLoader;
