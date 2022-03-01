import axios from "axios";

export const GetDetailsReceiverRequest = () => {
  return {
    type: "GET_DETAILS_RECEIVER_REQUEST"
  };
};
export const GetDetailsReceiverSuccess = (data) => {
  return {
    type: "GET_DETAILS_RECEIVER_SUCCESS",
    payload: data
  };
};
export const GetDetailsReceiverFailed = (error) => {
  return {
    type: "GET_DETAILS_RECEIVER_FAILED",
    payload: error
  };
};

export const GetDetailsReceiver = ({ id }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return (dispatch) => {
    dispatch(GetDetailsReceiverRequest());
    return axios
      .get(`${process.env.REACT_APP_ZWALLET_API}/users/details/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => {
        const result = res.data.data;
        dispatch(GetDetailsReceiverSuccess(result));
      })
      .catch((err) => {
        const message = err.response;
        dispatch(GetDetailsReceiverFailed(message));
      });
  };
};
