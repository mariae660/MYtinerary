import { ITEMS, LOAD, ERROR } from "../actions/types";

const initialstate = {
  citys: [],
  loading: false,
  error: ""
};

export default function(state = initialstate, action) {
  switch (action.type) {
    case ITEMS:
      return {
        ...state,
        citys: action.payload
      };
    default:
      return state;
  }
}
