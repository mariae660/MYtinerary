import React, { Component } from "react";
import user from "../img/user.png";
import { Link } from "react-router-dom";
import homebutton from "../img/homeIcon.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <div className="dropdown">
          <img
            className="navbar-brand dropdown-toggle"
            style={{ height: "50px", width: "50px" }}
            data-toggle="dropdown"
            src={user}
            alt="user"
          />

          <div
            className="dropdown-menu"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            <Link
              className="dropdown-item text-decoration-underline"
              to="/login"
            >
              Log in
            </Link>
            <Link className="dropdown-item" to="/createAcc">
              Create Account
            </Link>
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <Link to="/" className="nav-link" src={homebutton} alt="Home">
                Home
              </Link>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
