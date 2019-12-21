import React, { Component } from "react";
import { Link } from "react-router-dom";
import Avatar from "./avatar";
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <div className="dropdown">
          <Avatar />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar2"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar2">
          <ul className="navbar-nav">
            <Link className="dropdown-item" to="/">
              <li className="nav-item text-light">Home</li>
            </Link>
          </ul>
        </div>
      </nav>
    );
  }
}
export default NavBar;
