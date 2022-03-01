import axios from "axios";

// Get Receivers List
export const GetReceiversRequest = () => {
  return {
    type: "GET_RECEIVERS_REQUEST"
  };
};
export const GetReceiversSuccess = (data) => {
  return {
    type: "GET_RECEIVERS_SUCCESS",
    payload: data
  };
};
export const GetReceiversFailed = (error) => {
  return {
    type: "GET_RECEIVERS_FAILED",
    payload: error
  };
};

export const GetReceivers = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return (dispatch) => {
    dispatch(GetReceiversRequest());
    return axios
      .get(
        `${process.env.REACT_APP_ZWALLET_API}/users?limit=5&sort=first_name&order=asc`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        const data = res.data?.data;
        dispatch(GetReceiversSuccess(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(GetReceiversFailed(message));
      });
  };
};
