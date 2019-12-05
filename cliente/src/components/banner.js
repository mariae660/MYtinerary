import React, { Component } from "react";
import { Link } from "react-router-dom";
class CityBanner extends Component {
  render() {
    if (this.props.city) {
      return (
        <div
          className=" card text-white text-center d-flex "
          key={this.props.city.city}
        >
          <Link to={`/itinerary/${this.props.city._id}`}>
            <img
              src={this.props.city.link}
              className="card-img px-0 mx-0"
              style={{
                objectFit: "cover",
                width: "700px",
                maxWidth: "100%",
                maxHeight: "180px",
                padding: "0px",
                filter: "brightness(50%)"
              }}
              alt={`Imagen de ${this.props.city.city}`}
            />
            <div className="card-img-overlay align-items-center d-flex justify-content-center">
              <h1 className="card-text text-white align-items-centers">
                {this.props.city.country} - {this.props.city.city}
              </h1>
            </div>
          </Link>
        </div>
      );
    } else {
      return false;
    }
  }
}
export default CityBanner;
