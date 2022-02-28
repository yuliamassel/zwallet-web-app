import axios from "axios";

export const GetProfileRequest = () => {
  return {
    type: "GET_PROFILE_REQUEST"
  };
};
export const GetProfileSuccess = (data) => {
  return {
    type: "GET_PROFILE_SUCCESS",
    payload: data
  };
};
export const GetProfileFailed = (error) => {
  return {
    type: "GET_PROFILE_FAILED",
    payload: error
  };
};

export const GetProfile = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return (dispatch) => {
    dispatch(GetProfileRequest());
    return axios
      .get(`${process.env.REACT_APP_ZWALLET_API}/users/profile`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => {
        const data = res.data?.data;
        dispatch(GetProfileSuccess(data));
      })
      .catch((err) => {
        const message = err.response;
        dispatch(GetProfileFailed(message));
      });
  };
};
