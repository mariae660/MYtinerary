import axios from "axios";
import { ITEMS, LOAD, ERROR } from "./types";

export const getCitys = () => dispach => {
  dispach({
    type: LOAD
  });

  axios
    .get("http://localhost:5000/api/cities")
    .then(data => {
      console.log(data);
      dispach({
        type: ITEMS,
        payload: data.data
      });
    })
    .catch(err => {
      console.log("Error; err");
    });
};
