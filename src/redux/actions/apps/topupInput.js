import axios from "axios";

export const TopupInputRequest = () => {
  return {
    type: "TOPUP_INPUT_REQUEST"
  };
};
export const TopupInputSuccess = (data) => {
  return {
    type: "TOPUP_INPUT_SUCCESS",
    payload: data
  };
};
export const TopupInputFailed = (error) => {
  return {
    type: "TOPUP_INPUT_FAILED",
    payload: error
  };
};

export const TopupInput = ({
  topUpId,
  topupForm,
  handleModalPIN,
  setErrorMessage
}) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return (dispatch) => {
    dispatch(TopupInputRequest());
    return axios
      .put(
        `${process.env.REACT_APP_ZWALLET_API}/wallet/topup/${topUpId}`,
        { amount_topup: topupForm.amount_topup },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        const data = res.data.data;
        handleModalPIN();
        dispatch(TopupInputSuccess(data));
      })
      .catch((err) => {
        const message = err.response;
        if (err.response.status === 500) {
          setErrorMessage("We have trouble");
        } else {
          setErrorMessage(err.response.data.message);
        }
        dispatch(TopupInputFailed(message));
      });
  };
};
