import axios from "axios";

export const TransferInputRequest = () => {
  return {
    type: "TRANSFER_REQUEST"
  };
};
export const TransferInputSuccess = (data) => {
  return {
    type: "TRANSFER_SUCCESS",
    payload: data
  };
};
export const TransferInputFailed = (error) => {
  return {
    type: "TRANSFER_FAILED",
    payload: error
  };
};

export const TransferInput = ({
  receiver,
  form,
  toConfirmPage,
  setErrorMessage
}) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return (dispatch) => {
    dispatch(TransferInputRequest());
    return axios
      .post(
        `${process.env.REACT_APP_ZWALLET_API}/transaction/transfer`,
        {
          receiverName: `${receiver.first_name} ${receiver.last_name}`,
          receiverPhone: receiver.phone,
          amountTransfer: form.amountTransfer,
          notes: form.notes
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        const data = res.data.data;
        const transferId = data.id;
        localStorage.setItem("transferId", JSON.stringify(transferId));
        toConfirmPage();
        dispatch(TransferInputSuccess(data));
      })
      .catch((err) => {
        const message = err.response;
        if (err.response.status === 500) {
          setErrorMessage("We have trouble");
        } else {
          setErrorMessage(err.response.data.message);
        }
        dispatch(TransferInputFailed(message));
      });
  };
};
