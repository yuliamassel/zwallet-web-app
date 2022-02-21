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

// Search Receiver
export const SearchReceiverRequest = () => {
  return {
    type: "SEARCH_RECEIVER_REQUEST"
  };
};
export const SearchReceiverSuccess = (data) => {
  return {
    type: "SEARCH_RECEIVER_SUCCESS",
    payload: data
  };
};
export const SearchReceiverFailed = (error) => {
  return {
    type: "SEARCH_RECEIVER_FAILED",
    payload: error
  };
};

export const GetReceivers = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return (dispatch) => {
    dispatch(GetReceiversRequest());
    return axios
      .get(
        `${process.env.REACT_APP_ZWALLET_API}/users?limit=4&sort=first_name&order=asc`,
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

export const SearchReceiver = (querySearch) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return (dispatch) => {
    dispatch(SearchReceiverRequest());
    return axios
      .get(
        `${process.env.REACT_APP_ZWALLET_API}/users/search?name=${querySearch}&sort=created_at&order=asc`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        const data = res.data?.data;
        dispatch(SearchReceiverSuccess(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(SearchReceiverFailed(message));
      });
  };
};
