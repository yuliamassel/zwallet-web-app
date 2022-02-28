import axios from "axios";

export const PINConfirmRequest = () => {
  return {
    type: "PIN_CONFIRM_REQUEST"
  };
};
export const PINConfirmSuccess = (data) => {
  return {
    type: "PIN_CONFIRM_SUCCESS",
    payload: data
  };
};
export const PINConfirmFailed = (error) => {
  return {
    type: "PIN_CONFIRM_FAILED",
    payload: error
  };
};

export const PINConfirm = ({ PIN, navigate, setErrorMessage }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return (dispatch) => {
    dispatch(PINConfirmRequest());
    return axios
      .post(
        `${process.env.REACT_APP_ZWALLET_API}/users/PIN`,
        { PIN: PIN },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        const data = res.data?.message;
        dispatch(PINConfirmSuccess(data));
        navigate("/apps/PIN/new");
      })
      .catch((err) => {
        const message = err.response;
        if (err.response.status === 500) {
          setErrorMessage("We have trouble");
        } else {
          setErrorMessage(err.response.data.message);
        }
        dispatch(PINConfirmFailed(message));
      });
  };
};
