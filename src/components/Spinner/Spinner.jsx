import React from "react";
import spin from "../img/Rocket.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img className="my-3" src={spin} alt="Loading" />
    </div>
  );
};

export default Spinner;
