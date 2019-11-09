import React, { Component } from "react";
import { Link } from "react-router-dom";
import Arrow from "../img/circled-right-2.png";
import Footer from "./footer";

class Index extends Component {
  render() {
    return (
      <body>
        <div className="text-center mt-4">
          <p>
            <b>
              Find your perfect trip, designed by insiders who know and love
              their cities
            </b>
          </p>
          <Link to="/cities">
            <img className="w-25 mt-3" src={Arrow} alt="Arrow" />
          </Link>
          <p className="mt-3 text-left">Popular MYtineraries</p>
        </div>
        <Footer />
      </body>
    );
  }
}
export default Index;
