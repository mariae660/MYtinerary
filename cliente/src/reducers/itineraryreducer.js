import { ITEMS1, LOAD1, ERROR1 } from "../actions/types";

const initialstate = {
  itinerary: [],
  loading: false,
  error: ""
};

export default function(state = initialstate, action) {
  switch (action.type) {
    case ITEMS1:
      return {
        ...state,
        itinerary: action.payload
      };
    default:
      return state;
  }
}
