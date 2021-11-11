import React from "react";
import errorImg from "../images/Banner/error.png";
const NotFound = () => {
  return (
    <div style={{ height: "100vh" }} className="container">
      <img className="img-fluid" src={errorImg} alt="" />
    </div>
  );
};

export default NotFound;
