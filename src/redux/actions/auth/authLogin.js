import axios from "axios";

export const AuthLoginRequest = () => {
  return {
    type: "AUTH_LOGIN_REQUEST"
  };
};
export const AuthLoginSuccess = (data) => {
  return {
    type: "AUTH_LOGIN_SUCCESS",
    payload: data
  };
};
export const AuthLoginFailed = (error) => {
  return {
    type: "AUTH_LOGIN_FAILED",
    payload: error
  };
};

export const AuthLogin = ({ form, navigate, setErrorMessage }) => {
  return (dispatch) => {
    dispatch(AuthLoginRequest());
    axios
      .post(`${process.env.REACT_APP_ZWALLET_API}/users/login`, {
        email: form.email,
        password: form.password
      })
      .then((res) => {
        const { data } = res;
        const result = res.data.data;
        const token = result.token;
        dispatch(AuthLoginSuccess(data));
        localStorage.setItem("token", JSON.stringify(token));
        navigate("/");
      })
      .catch((err) => {
        const message = err.response;
        dispatch(AuthLoginFailed(message));
        if (err.response.status === 403) {
          setErrorMessage(err.response.data.message);
        } else {
          setErrorMessage("We have trouble");
        }
      });
  };
};
