import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "./reducers";

const initialstate = {};

const store = createStore(
  rootReducer,
  initialstate,
  composeWithDevTools(applyMiddleware(reduxThunk))
);
export default store;
