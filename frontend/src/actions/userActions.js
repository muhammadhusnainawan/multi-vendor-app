import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILS,
} from "../constants/userConstants";
import axios from "axios";

export const registerUserAction =
  (name, email, password, avatar) => async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        "/user/create-user",
        { name, email, password, avatar },
        config
      );
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
       type: USER_REGISTER_FAILS,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
