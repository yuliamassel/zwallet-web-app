import axios from "axios";

export const TransferConfirmationRequest = () => {
  return {
    type: "TRANSFER_CONFIRMATION_REQUEST"
  };
};
export const TransferConfirmationSuccess = (data) => {
  return {
    type: "TRANSFER_CONFIRMATION_SUCCESS",
    payload: data
  };
};
export const TransferConfirmationFailed = (error) => {
  return {
    type: "TRANSFER_CONFIRMATION_FAILED",
    payload: error
  };
};

export const TransferConfirmation = ({
  transferId,
  PIN,
  navigate,
  setErrorMessage
}) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return (dispatch) => {
    dispatch(TransferConfirmationRequest());
    return axios
      .post(
        `${process.env.REACT_APP_ZWALLET_API}/transaction/transfer/${transferId}`,
        { PIN: PIN },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        const data = res.data.data;
        navigate("/apps/status");
        localStorage.removeItem("transferId");
        dispatch(TransferConfirmationSuccess(data));
      })
      .catch((err) => {
        const message = err.response;
        if (err.response.status === 500) {
          setErrorMessage("We have trouble");
        } else {
          setErrorMessage(err.response.data.message);
        }
        dispatch(TransferConfirmationFailed(message));
      });
  };
};
