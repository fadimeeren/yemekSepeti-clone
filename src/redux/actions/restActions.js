// thunk action
import ACTION_TYPES from "./actionTypes";
import api from "../../api";

export const getRestaurants = () => (dispatch) => {
  dispatch({ type: ACTION_TYPES.REST_LOADING });

  api
    .get("/getRestaurants")
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.REST_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ACTION_TYPES.REST_ERROR,
        payload: err.message,
      });
    });
};
