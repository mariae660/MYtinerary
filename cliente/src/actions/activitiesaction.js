import axios from "axios";
import { ITEMS2, LOAD2, ERROR2 } from "./types";

export const getActivities = idItinerary => dispach => {
  dispach({
    type: LOAD2
  });

  axios
    .get(`http://localhost:5000/api/activities/${idItinerary}`)
    .then(data => {
      dispach({
        type: ITEMS2,
        payload: data.data
      });
    })
    .catch(err => {
      console.log("Error; err");
    });
};
