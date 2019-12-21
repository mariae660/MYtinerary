import React, { Component } from "react";
import { connect } from "react-redux";
import { getitineraries } from "../actions/itineraryactions";
import { getCitys } from "../actions/citiesActions";
import CityBanner from "./banner";
import Footer2 from "./footer2";
import Activities from "./activities";

class itinerary extends Component {
  renderitinerary() {
    return this.props.itineraryreducer.itinerary.length !== 0 ? (
      this.props.itineraryreducer.itinerary.map(itinerari => (
        <div>
          <div
            className="container-fluid d-flex media border-right border-left border-top mt-5 m-0"
            key={itinerary.itinerary}
          >
            <img
              src={itinerari.profileepic}
              className="rounded-circle mr-3 align-self-start "
              alt="Imagen"
              style={{ width: "100px" }}
            />
            <div className="media-body">
              <h3 className="mt-0">{itinerari.title} </h3>
              <div className="d-flex justify-content-between">
                {""}
                <small>Likes: {itinerari.rating}</small>
                <small>{itinerari.duration}</small>
                <small>{itinerari.price}$</small>
              </div>
              {itinerari.hashtag.map((tag, index) => (
                <span>#{tag}</span>
              ))}
            </div>
          </div>
          <div id="demo" className="collapse">
            <Activities
              idItinerary={itinerari._id}
              key={`slider${itinerari._id}`}
            />
          </div>
          <button
            type="button"
            className="h5 w-100"
            data-toggle="collapse"
            data-target="#demo"
          >
            More Info
          </button>
        </div>
      ))
    ) : (
      <h3>No Hay Ciudades con ese Criterio</h3>
    );
  }
  componentDidMount() {
    const cityid = this.props.match.params.cityid;
    this.props.getitineraries(cityid);
    this.props.getCitys();
  }
  render() {
    var NewArray = [];
    NewArray = this.props.cityreducer.citys.filter(array => {
      if (array._id == this.props.match.params.cityid) {
        return array;
      }
      return false;
    });
    return (
      <div className="container mt-2">
        <CityBanner city={NewArray[0]} />
        {this.props.itineraryreducer.loading ? (
          <h3>Cargando</h3>
        ) : this.props.itineraryreducer.error ? (
          <h3>{this.props.itineraryreducer.error}</h3>
        ) : this.props.itineraryreducer.itinerary ? (
          this.renderitinerary()
        ) : (
          ""
        )}
        <Footer2 />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getitineraries,
  getCitys
};
const mapStateToProps = ({ itineraryreducer, cityreducer }) => {
  return { itineraryreducer, cityreducer };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(itinerary);
