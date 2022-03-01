import axios from "axios";

export const TopupConfirmationRequest = () => {
  return {
    type: "TOPUP_CONFIRMATION_REQUEST"
  };
};
export const TopupConfirmationSuccess = (data) => {
  return {
    type: "TOPUP_CONFIRMATION_SUCCESS",
    payload: data
  };
};
export const TopupConfirmationFailed = (error) => {
  return {
    type: "TOPUP_CONFIRMATION_FAILED",
    payload: error
  };
};

export const TopupConfirmation = ({
  topUpId,
  PIN,
  handleModalPIN,
  handleModalSuccess,
  setErrorMessagePIN
}) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return (dispatch) => {
    dispatch(TopupConfirmationRequest());
    return axios
      .post(
        `${process.env.REACT_APP_ZWALLET_API}/wallet/topup/confirmation/${topUpId}`,
        { PIN: PIN },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        const data = res.data.data;
        localStorage.removeItem("topUpId");
        handleModalPIN();
        handleModalSuccess();
        dispatch(TopupConfirmationSuccess(data));
      })
      .catch((err) => {
        const message = err.response;
        if (err.response.status === 500) {
          setErrorMessagePIN("We have trouble");
        } else {
          setErrorMessagePIN(err.response.data.message);
        }
        dispatch(TopupConfirmationFailed(message));
      });
  };
};
