import axios from "axios";

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
