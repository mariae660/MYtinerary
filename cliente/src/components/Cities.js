import React, { Component } from "react";
import { connect } from "react-redux";
import { getCitys } from "../actions/citiesActions";
import { Link } from "react-router-dom";

class Cities extends Component {
  constructor() {
    super();
    this.state = {
      filter: ""
    };
  }

  updateFilter(event) {
    const e = event.target.value;
    setTimeout(() => {
      this.setState({
        filter: e.substr(0, 20)
      });
    }, 300);
  }

  searchCities(citys) {
    return citys.filter(city => {
      return (
        city.city.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1
      );
    });
  }
  renderCitys(filteredCitys) {
    return filteredCitys.length !== 0 ? (
      filteredCitys.map(city => (
        <div className=" card text-white text-center d-flex " key={city.city}>
          <Link to={`/itinerary/${city.city}`}>
            <img
              src={city.link}
              className="card-img px-0 mx-0"
              style={{
                objectFit: "cover",
                width: "700px",
                maxWidth: "100%",
                maxHeight: "180px",
                filter: "brightness(50%)"
              }}
              alt={`Imagen de ${city.city}`}
            />
            <div className="card-img-overlay align-items-center d-flex justify-content-center">
              <h1 className="card-text text-white align-items-centers">
                {city.country} - {city.city}
              </h1>
            </div>
          </Link>
        </div>
      ))
    ) : (
      <h3>No Hay Ciudades con ese Criterio</h3>
    );
  }
  componentDidMount() {
    if (!this.props.citys.length) {
      this.props.getCitys();
    }
  }
  render() {
    let filteredCitys = this.searchCities(this.props.citys);
    return (
      <div className="container mt-2">
        <input
          type="text"
          placeholder="Filter by City"
          className="mb-2"
          value={this.state.search}
          onChange={this.updateFilter.bind(this)}
        />
        {this.props.loading ? (
          <h3>Cargando</h3>
        ) : this.props.error ? (
          <h3>{this.props.error}</h3>
        ) : this.props.citys ? (
          this.renderCitys(filteredCitys)
        ) : (
          ""
        )}
      </div>
    );
  }
}
const mapStateToProps = reducers => {
  return reducers.cityreducer;
};
export default connect(
  mapStateToProps,
  { getCitys }
)(Cities);
