import axios from "axios";

export const AuthCreatePINRequest = () => {
  return {
    type: "AUTH_CREATE_PIN_REQUEST"
  };
};
export const AuthCreatePINSuccess = (data) => {
  return {
    type: "AUTH_CREATE_PIN_SUCCESS",
    payload: data
  };
};
export const AuthCreatePINFailed = (error) => {
  return {
    type: "AUTH_CREATE_PIN_FAILED",
    payload: error
  };
};

export const AuthCreatePIN = ({ PIN, navigate, setErrorMessage }) => {
  return (dispatch) => {
    const userId = JSON.parse(localStorage.getItem("userId"));
    dispatch(AuthCreatePINRequest());
    return axios
      .put(`${process.env.REACT_APP_ZWALLET_API}/users/PIN/${userId}`, {
        PIN: PIN
      })
      .then((res) => {
        const data = res.data?.data;
        localStorage.clear();
        navigate("/auth/PIN/success");
        dispatch(AuthCreatePINSuccess(data));
      })
      .catch((err) => {
        const message = err.response;
        if (err.response.status === 500) {
          setErrorMessage("We have trouble");
        } else {
          setErrorMessage(err.response.data.message);
        }
        dispatch(AuthCreatePINFailed(message));
      });
  };
};
