import React, { Component } from "react";
import { connect } from "react-redux";
import { getCitys } from "../actions/citiesActions";
import CityBanner from "./banner";

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
        <div>
          <CityBanner city={city} />
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
