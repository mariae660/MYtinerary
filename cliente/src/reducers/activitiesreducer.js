import { ITEMS2, LOAD2, ERROR2 } from "../actions/types";

const initialstate = {
  activities: [],
  loading: false,
  error: ""
};

export default function(state = initialstate, action) {
  switch (action.type) {
    case ITEMS2:
      return {
        ...state,
        activities: action.payload
      };
    default:
      return state;
  }
}
