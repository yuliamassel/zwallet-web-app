import axios from "axios";

export const DeletePhoneNumberRequest = () => {
  return {
    type: "DELETE_PHONE_NUMBER_REQUEST"
  };
};
export const DeletePhoneNumberSuccess = (data) => {
  return {
    type: "DELETE_PHONE_NUMBER_SUCCESS",
    payload: data
  };
};
export const DeletePhoneNumberFailed = (error) => {
  return {
    type: "DELETE_PHONE_NUMBER_FAILED",
    payload: error
  };
};

export const DeletePhoneNumber = ({ handleModalAlert, handleModalSuccess }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return (dispatch) => {
    dispatch(DeletePhoneNumberRequest());
    return axios
      .put(
        `${process.env.REACT_APP_ZWALLET_API}/users/profile/delete-phone-number`,
        { phone: null },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        const data = res.data.data;
        handleModalAlert();
        handleModalSuccess();
        dispatch(DeletePhoneNumberSuccess(data));
      })
      .catch((err) => {
        const message = err.response;
        dispatch(DeletePhoneNumberFailed(message));
      });
  };
};
