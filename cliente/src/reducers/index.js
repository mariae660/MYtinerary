import { combineReducers } from "redux";
import cityreducer from "./cityreducer";
import itineraryreducer from "./itineraryreducer";

export default combineReducers({
  cityreducer,
  itineraryreducer
});
