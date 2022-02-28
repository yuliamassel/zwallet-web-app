import axios from "axios";

export const NewPhoneRequest = () => {
  return {
    type: "NEW_PHONE_NUMBER_REQUEST"
  };
};
export const NewPhoneSuccess = (data) => {
  return {
    type: "NEW_PHONE_NUMBER_SUCCESS",
    payload: data
  };
};
export const NewPhoneFailed = (error) => {
  return {
    type: "NEW_PHONE_NUMBER_FAILED",
    payload: error
  };
};

export const NewPhoneNumber = ({
  form,
  handleModalSuccess,
  setErrorMessage
}) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return (dispatch) => {
    dispatch(NewPhoneRequest());
    return axios
      .put(
        `${process.env.REACT_APP_ZWALLET_API}/users/profile`,
        { phone: form.phone },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        const data = res.data?.data;
        handleModalSuccess();
        dispatch(NewPhoneSuccess(data));
      })
      .catch((err) => {
        const message = err.response;
        if (err.response.status === 500) {
          setErrorMessage("We have trouble");
        } else {
          setErrorMessage(err.response.data.message);
        }
        dispatch(NewPhoneFailed(message));
      });
  };
};
