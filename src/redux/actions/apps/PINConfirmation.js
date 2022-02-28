import axios from "axios";

export const PINConfirmationRequest = () => {
  return {
    type: "PIN_CONFIRMATION_REQUEST"
  };
};
export const PINConfirmationSuccess = (data) => {
  return {
    type: "PIN_CONFIRMATION_SUCCESS",
    payload: data
  };
};
export const PINConfirmationFailed = (error) => {
  return {
    type: "PIN_CONFIRMATION_FAILED",
    payload: error
  };
};

export const PINConfirmation = ({ PIN, navigate, setErrorMessage }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return (dispatch) => {
    dispatch(PINConfirmationRequest());
    return axios
      .post(
        `${process.env.REACT_APP_ZWALLET_API}/users/PIN`,
        { PIN: PIN },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        const data = res.data?.message;
        navigate("/apps/password/change");
        dispatch(PINConfirmationSuccess(data));
      })
      .catch((err) => {
        const message = err.response.data;
        if (err.response.status === 500) {
          setErrorMessage("We have trouble");
        } else {
          setErrorMessage(err.response.data.message);
        }
        dispatch(PINConfirmationFailed(message));
      });
  };
};
