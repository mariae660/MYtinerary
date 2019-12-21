import axios from "axios";
import { returnErrors } from "./errorActions";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  GOOGLE_SUCCESS
} from "./TypesAuth";

export const tokenConfig = getState => {
  const token = getState().authReducer.token;

  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  debugger;
  if (token) {
    config.headers["Authorization"] = "bearer" + " " + token;
  }
  return config;
};

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  axios
    .get("http://localhost:5000/api/login", tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

export const register = ({
  FirstName,
  LastName,
  Password,
  Email,
  ProfilePic,
  Country
}) => dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  const body = JSON.stringify({
    FirstName,
    LastName,
    Password,
    Email,
    ProfilePic,
    Country
  });
  axios
    .post("http://localhost:5000/api/users", body, config)
    .then(res =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

export const login = ({ Email, Password }) => dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  const body = JSON.stringify({
    Email,
    Password
  });
  axios
    .post("http://localhost:5000/api/login", body, config)
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });
};
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};
export const googleSuccess = token => dispatch => {
  return dispatch({
    type: GOOGLE_SUCCESS,
    payload: token
  });
};
