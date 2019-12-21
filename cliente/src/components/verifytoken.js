import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loadUser, googleSuccess } from "../actions/authActions";

class VerifyToken extends Component {
  componentWillMount() {
    if (this.props.match.params.token) {
      debugger;
      const token = this.props.match.params.token;
      window.localStorage.setItem("token", token);
      this.props.googleSuccess(token);

      this.props.loadUser(this.props);
    }
  }
  render() {
    return <Redirect to="/" />;
  }
}

const mapStateToProps = authReducer => {
  return authReducer;
};
export default connect(
  mapStateToProps,
  { loadUser, googleSuccess }
)(VerifyToken);
