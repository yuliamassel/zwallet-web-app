import axios from "axios";

export const TopupMethodRequest = () => {
  return {
    type: "TOPUP_METHOD_REQUEST"
  };
};
export const TopupMethodSuccess = (data) => {
  return {
    type: "TOPUP_METHOD_SUCCESS",
    payload: data
  };
};
export const TopupMethodFailed = (error) => {
  return {
    type: "TOPUP_METHOD_FAILED",
    payload: error
  };
};

export const TopupMethod = ({ topUpMethod, navigate }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return (dispatch) => {
    dispatch(TopupMethodRequest());
    return axios
      .post(
        `${process.env.REACT_APP_ZWALLET_API}/wallet/topup/method`,
        { topup_method: topUpMethod },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        const result = res.data.data;
        const topUpId = result.id;
        localStorage.setItem("topUpId", JSON.stringify(topUpId));
        navigate("/apps/topup/input");
        dispatch(TopupMethodSuccess(result));
      })
      .catch((err) => {
        const message = err.response;
        dispatch(TopupMethodFailed(message));
      });
  };
};
