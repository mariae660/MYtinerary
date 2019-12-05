import axios from "axios";
import { ITEMS1, LOAD1, ERROR1 } from "./types";

export const getitineraries = cityid => dispach => {
  dispach({
    type: LOAD1
  });

  axios
    .get(`http://localhost:5000/api/itinerary/${cityid}`)
    .then(data => {
      dispach({
        type: ITEMS1,
        payload: data.data
      });
    })
    .catch(err => {
      console.log("Error; err");
    });
};
