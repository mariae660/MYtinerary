import React, { Component } from "react";
import { FaHome } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Cities } from "./Cities";
import { Link } from "react-router-dom";
import { index } from "./Index";

class Footer2 extends React.Component {
  render() {
    return (
      <h1 className="mt-5 mb-0 d-flex justify-content-center fixed-bottom bg-white">
        {" "}
        <div className="col-sm-1">
          <Link to="/cities">
            {" "}
            <IoIosArrowRoundBack />
          </Link>
        </div>
        <div className="col-sm-8 mr-5">
          <Link to="/">
            {" "}
            <FaHome />
          </Link>
        </div>
      </h1>
    );
  }
}
export default Footer2;
