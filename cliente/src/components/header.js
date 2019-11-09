import React, { Component } from "react";
import logo from "../img/MYtineraryLogo.png";

class Header extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <img className="col-sm-12 w-100 m-0 p-0 " src={logo} alt="logo" />
        </header>
      </div>
    );
  }
}
export default Header;
