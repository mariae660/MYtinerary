import { combineReducers } from "redux";
import cityreducer from "./cityreducer";
import itineraryreducer from "./itineraryreducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  cityreducer,
  itineraryreducer,
  authReducer,
  errorReducer
});
